#!/usr/bin/env python3
"""Bouwt Boardroomcoach.apk zonder Android SDK of Gradle.

Benodigd (allemaal van Maven Central, map via --tools):
  android-all.jar   org.robolectric:android-all:14-robolectric-10818077 (Android-API om tegen te compileren)
  dalvik-dx-16.0.1.jar  com.jakewharton.android.repackaged:dalvik-dx (Java -> dex)
  apksig-2.3.0.jar  com.android.tools.build:apksig (v2-handtekening)
Plus een JDK. De binaire AndroidManifest.xml en resources.arsc schrijft dit script zelf.

Gebruik:
  python3 build_apk.py --tools DIR --keystore sleutel.p12 --storepass WACHTWOORD [--version-code 1 --version-name 1.0]
"""
import argparse, os, pathlib, re, shutil, struct, subprocess, sys, urllib.request, zipfile

HERE = pathlib.Path(__file__).resolve().parent
APP = HERE.parent
PKG = 'nl.boardroomcoach.app'
MIN_SDK, TARGET_SDK = 24, 34

# Android-attribuut-ID's (uit android.R.attr, API 34)
ATTR = {
    'theme': 0x01010000, 'label': 0x01010001, 'icon': 0x01010002, 'name': 0x01010003,
    'exported': 0x01010010, 'configChanges': 0x0101001f, 'versionCode': 0x0101021b,
    'versionName': 0x0101021c, 'minSdkVersion': 0x0101020c, 'windowSoftInputMode': 0x0101022b,
    'targetSdkVersion': 0x01010270, 'allowBackup': 0x01010280, 'hardwareAccelerated': 0x010102d3,
}
THEME_MATERIAL_LIGHT_NOACTIONBAR = 16974401
ICON_ID = 0x7f010000
NS_ANDROID = 'http://schemas.android.com/apk/res/android'

T_REF, T_STRING, T_DEC, T_HEX, T_BOOL = 0x01, 0x03, 0x10, 0x11, 0x12


# ---------------------------------------------------------------- string pool
def string_pool(strings):
    def enc_len(n):
        return bytes([n]) if n < 0x80 else bytes([(n >> 8) | 0x80, n & 0xFF])
    data, offsets = b'', []
    for s in strings:
        offsets.append(len(data))
        b = s.encode('utf-8')
        data += enc_len(len(s)) + enc_len(len(b)) + b + b'\x00'
    while len(data) % 4:
        data += b'\x00'
    start = 28 + 4 * len(strings)
    hdr = struct.pack('<HHIIIIII', 0x0001, 28, start + len(data), len(strings), 0, 0x100, start, 0)
    return hdr + b''.join(struct.pack('<I', o) for o in offsets) + data


# ---------------------------------------------------------------- binaire XML (manifest)
class AXML:
    def __init__(self, attr_names):
        self.strings = list(attr_names)          # attribuutnamen met ID eerst (resource map)
        self.resmap = [ATTR[n] for n in attr_names]
        self.nodes = []

    def s(self, v):
        if v not in self.strings:
            self.strings.append(v)
        return self.strings.index(v)

    def start(self, tag, attrs):
        # attrs: lijst van (namespace|None, naam, type, waarde)
        enc = []
        for ns, name, typ, val in attrs:
            nsi = self.s(NS_ANDROID) if ns else 0xFFFFFFFF
            ni = self.s(name)
            if typ == T_STRING:
                si = self.s(val)
                enc.append((ATTR.get(name, 0xFFFFFFFF) if ns else 0xFFFFFFFF, name, struct.pack('<IIIHBBI', nsi, ni, si, 8, 0, T_STRING, si)))
            else:
                enc.append((ATTR.get(name, 0xFFFFFFFF) if ns else 0xFFFFFFFF, name, struct.pack('<IIIHBBI', nsi, ni, 0xFFFFFFFF, 8, 0, typ, val & 0xFFFFFFFF)))
        enc.sort(key=lambda e: (e[0], e[1]))
        body = struct.pack('<IIHHHHHH', 0xFFFFFFFF, self.s(tag), 20, 20, len(enc), 0, 0, 0) + b''.join(e[2] for e in enc)
        self.nodes.append(struct.pack('<HHIII', 0x0102, 16, 16 + len(body), 1, 0xFFFFFFFF) + body)

    def end(self, tag):
        self.nodes.append(struct.pack('<HHIIIII', 0x0103, 16, 24, 1, 0xFFFFFFFF, 0xFFFFFFFF, self.s(tag)))

    def build(self):
        p, u = self.s('android'), self.s(NS_ANDROID)
        ns_start = struct.pack('<HHIIIII', 0x0100, 16, 24, 1, 0xFFFFFFFF, p, u)
        ns_end = struct.pack('<HHIIIII', 0x0101, 16, 24, 1, 0xFFFFFFFF, p, u)
        pool = string_pool(self.strings)
        rmap = struct.pack('<HHI', 0x0180, 8, 8 + 4 * len(self.resmap)) + b''.join(struct.pack('<I', i) for i in self.resmap)
        body = pool + rmap + ns_start + b''.join(self.nodes) + ns_end
        return struct.pack('<HHI', 0x0003, 8, 8 + len(body)) + body


def manifest(version_code, version_name):
    a = AXML(['theme', 'label', 'icon', 'name', 'exported', 'configChanges', 'minSdkVersion',
              'versionCode', 'versionName', 'windowSoftInputMode', 'targetSdkVersion', 'allowBackup', 'hardwareAccelerated'])
    A = True
    a.start('manifest', [(A, 'versionCode', T_DEC, version_code), (A, 'versionName', T_STRING, version_name), (None, 'package', T_STRING, PKG)])
    a.start('uses-sdk', [(A, 'minSdkVersion', T_DEC, MIN_SDK), (A, 'targetSdkVersion', T_DEC, TARGET_SDK)]); a.end('uses-sdk')
    a.start('uses-permission', [(A, 'name', T_STRING, 'android.permission.INTERNET')]); a.end('uses-permission')
    a.start('application', [(A, 'theme', T_REF, THEME_MATERIAL_LIGHT_NOACTIONBAR), (A, 'label', T_STRING, 'Boardroomcoach'),
                            (A, 'icon', T_REF, ICON_ID), (A, 'allowBackup', T_BOOL, 0xFFFFFFFF), (A, 'hardwareAccelerated', T_BOOL, 0xFFFFFFFF)])
    a.start('activity', [(A, 'name', T_STRING, PKG + '.MainActivity'), (A, 'exported', T_BOOL, 0xFFFFFFFF),
                         (A, 'configChanges', T_HEX, 0x04A0 | 0x0D00), (A, 'windowSoftInputMode', T_HEX, 0x10)])
    a.start('intent-filter', [])
    a.start('action', [(A, 'name', T_STRING, 'android.intent.action.MAIN')]); a.end('action')
    a.start('category', [(A, 'name', T_STRING, 'android.intent.category.LAUNCHER')]); a.end('category')
    a.end('intent-filter'); a.end('activity'); a.end('application'); a.end('manifest')
    return a.build()


# ---------------------------------------------------------------- resources.arsc (alleen het app-icoon)
ICON_PATH = 'res/drawable-xxxhdpi-v4/icon.png'

def resources_arsc():
    gpool = string_pool([ICON_PATH])
    tpool = string_pool(['drawable'])
    kpool = string_pool(['icon'])
    spec = struct.pack('<HHIBBHI', 0x0202, 16, 20, 1, 0, 0, 1) + struct.pack('<I', 0x0100)
    config = bytearray(64)
    struct.pack_into('<I', config, 0, 64)
    struct.pack_into('<H', config, 14, 640)   # dichtheid xxxhdpi
    struct.pack_into('<H', config, 24, 4)     # sdkVersion v4 (zoals aapt bij dichtheid)
    entry = struct.pack('<HHI', 8, 0, 0) + struct.pack('<HBBI', 8, 0, T_STRING, 0)
    hdr_size = 20 + 64
    typ = struct.pack('<HHIBBHII', 0x0201, hdr_size, hdr_size + 4 + len(entry), 1, 0, 0, 1, hdr_size + 4) + bytes(config) + struct.pack('<I', 0) + entry
    name = PKG.encode('utf-16-le').ljust(256, b'\x00')
    pk_hdr = 288
    body = tpool + kpool + spec + typ
    pkg = struct.pack('<HHII', 0x0200, pk_hdr, pk_hdr + len(body), 0x7f) + name + struct.pack('<IIIII', pk_hdr, 1, pk_hdr + len(tpool), 1, 0) + body
    total = 12 + len(gpool) + len(pkg)
    return struct.pack('<HHII', 0x0002, 12, total, 1) + gpool + pkg


# ---------------------------------------------------------------- web-inhoud
def fetch_fonts(dest):
    """Download alleen de latin- en latin-ext-subsets, zodat de app offline dezelfde letters toont."""
    css_path = dest / 'fonts.css'
    if css_path.exists():
        return
    dest.mkdir(parents=True, exist_ok=True)
    url = ('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,650;12..96,700;12..96,800'
           '&family=IBM+Plex+Mono:wght@500;600&family=Source+Sans+3:ital,wght@0,400;0,600;0,700;1,400&display=swap')
    ua = 'Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Mobile Safari/537.36'
    css = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent': ua}), timeout=30).read().decode()
    out, n, seen = [], 0, {}
    for m in re.finditer(r'/\* ([\w-]+) \*/\s*(@font-face \{.*?\})', css, re.S):
        subset, block = m.group(1), m.group(2)
        if subset not in ('latin', 'latin-ext'):
            continue
        src = re.search(r'url\((https://[^)]+)\)', block).group(1)
        if src not in seen:  # variabele fonts: meerdere gewichten delen één bestand
            seen[src] = 'f%02d.woff2' % n; n += 1
            (dest / seen[src]).write_bytes(urllib.request.urlopen(urllib.request.Request(src, headers={'User-Agent': ua}), timeout=30).read())
        fname = seen[src]
        out.append('/* %s */\n%s' % (subset, block.replace(src, fname)))
    css_path.write_text('\n'.join(out) + '\n', encoding='utf-8')


def web_assets(build_dir):
    subprocess.run([sys.executable, str(APP / 'build.py')], check=True)
    html = (APP / 'index.html').read_text(encoding='utf-8')
    html = re.sub(r'<link rel="preconnect"[^>]*>\n', '', html)
    html = re.sub(r'<link rel="stylesheet" href="https://fonts\.googleapis\.com[^"]*">', '<link rel="stylesheet" href="fonts/fonts.css">', html)
    fonts = HERE / 'fonts'
    fetch_fonts(fonts)
    www = build_dir / 'www'
    shutil.rmtree(www, ignore_errors=True)
    (www / 'fonts').mkdir(parents=True)
    (www / 'index.html').write_text(html, encoding='utf-8')
    for f in fonts.iterdir():
        shutil.copy(f, www / 'fonts' / f.name)
    return www


# ---------------------------------------------------------------- code
def compile_dex(tools, build_dir):
    classes = build_dir / 'classes'
    shutil.rmtree(classes, ignore_errors=True); classes.mkdir(parents=True)
    srcs = [str(p) for p in (HERE / 'java').rglob('*.java')]
    subprocess.run(['javac', '-nowarn', '--release', '8', '-cp', str(tools / 'android-all.jar'), '-d', str(classes)] + srcs, check=True)
    dex = build_dir / 'classes.dex'
    subprocess.run(['java', '-cp', str(tools / 'dalvik-dx-16.0.1.jar'), 'com.android.dx.command.Main', '--dex',
                    '--min-sdk-version=%d' % MIN_SDK, '--output=' + str(dex), str(classes)], check=True)
    return dex


# ---------------------------------------------------------------- zip met uitlijning
def write_aligned_zip(path, entries):
    """entries: (naam, bytes, opgeslagen_zonder_compressie). Ongecomprimeerde bestanden worden op 4 bytes uitgelijnd."""
    with zipfile.ZipFile(path, 'w') as z:
        for name, data, stored in entries:
            zi = zipfile.ZipInfo(name, date_time=(2026, 1, 1, 0, 0, 0))
            zi.create_system = 0
            if stored:
                zi.compress_type = zipfile.ZIP_STORED
                off = z.fp.tell() + 30 + len(name.encode())
                pad = (-(off + 6)) % 4
                zi.extra = struct.pack('<HHH', 0xD935, 2 + pad, 4) + b'\x00' * pad
            else:
                zi.compress_type = zipfile.ZIP_DEFLATED
            z.writestr(zi, data)


def check_alignment(path):
    with open(path, 'rb') as f, zipfile.ZipFile(path) as z:
        for zi in z.infolist():
            if zi.compress_type == zipfile.ZIP_STORED and not zi.filename.endswith('/'):
                f.seek(zi.header_offset + 26)
                n, e = struct.unpack('<HH', f.read(4))
                data_off = zi.header_offset + 30 + n + e
                if data_off % 4:
                    raise SystemExit('niet uitgelijnd: %s' % zi.filename)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--tools', required=True)
    ap.add_argument('--keystore', required=True)
    ap.add_argument('--storepass', required=True)
    ap.add_argument('--alias', default='boardroomcoach')
    ap.add_argument('--version-code', type=int, default=1)
    ap.add_argument('--version-name', default='1.0')
    ap.add_argument('--out', default=str(HERE / 'Boardroomcoach.apk'))
    a = ap.parse_args()
    tools = pathlib.Path(a.tools).resolve()
    build = HERE / 'build'
    build.mkdir(exist_ok=True)

    www = web_assets(build)
    dex = compile_dex(tools, build)
    entries = [('AndroidManifest.xml', manifest(a.version_code, a.version_name), False),
               ('classes.dex', dex.read_bytes(), False),
               ('resources.arsc', resources_arsc(), True),
               (ICON_PATH, (HERE / 'res' / 'icon.png').read_bytes(), True)]
    for f in sorted(www.rglob('*')):
        if f.is_file():
            rel = 'assets/www/' + f.relative_to(www).as_posix()
            entries.append((rel, f.read_bytes(), f.suffix == '.woff2'))
    unsigned = build / 'unsigned.apk'
    write_aligned_zip(unsigned, entries)
    check_alignment(unsigned)

    signer = build / 'signer'
    signer.mkdir(exist_ok=True)
    cp = str(tools / 'apksig-2.3.0.jar')
    subprocess.run(['javac', '-nowarn', '-cp', cp, '-d', str(signer), str(HERE / 'tools' / 'Sign.java')], check=True)
    exports = ['--add-exports=java.base/%s=ALL-UNNAMED' % m for m in ('sun.security.x509', 'sun.security.pkcs', 'sun.security.util')]
    subprocess.run(['java'] + exports + ['-cp', cp + os.pathsep + str(signer), 'Sign', str(unsigned), a.out, a.keystore, a.storepass, a.alias], check=True)
    check_alignment(a.out)
    print('APK:', a.out, os.path.getsize(a.out), 'bytes')


if __name__ == '__main__':
    main()
