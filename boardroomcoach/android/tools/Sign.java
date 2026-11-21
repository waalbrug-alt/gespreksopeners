import com.android.apksig.ApkSigner;

import java.io.File;
import java.io.FileInputStream;
import java.security.KeyStore;
import java.security.PrivateKey;
import java.security.cert.X509Certificate;
import java.util.Collections;

/** Ondertekent een APK (v2) met een PKCS12-sleutel. Gebruik: Sign in.apk out.apk keystore.p12 wachtwoord alias */
public class Sign {
    public static void main(String[] a) throws Exception {
        KeyStore ks = KeyStore.getInstance("PKCS12");
        char[] pw = a[3].toCharArray();
        try (FileInputStream in = new FileInputStream(a[2])) { ks.load(in, pw); }
        PrivateKey key = (PrivateKey) ks.getKey(a[4], pw);
        X509Certificate cert = (X509Certificate) ks.getCertificate(a[4]);
        ApkSigner.SignerConfig cfg = new ApkSigner.SignerConfig.Builder("BOARDRMC", key, Collections.singletonList(cert)).build();
        new ApkSigner.Builder(Collections.singletonList(cfg))
                .setInputApk(new File(a[0]))
                .setOutputApk(new File(a[1]))
                .setMinSdkVersion(24)
                .setV1SigningEnabled(false) // v2 volstaat vanaf Android 7 (minSdk 24)
                .setV2SigningEnabled(true)
                .setCreatedBy("Boardroomcoach build")
                .build()
                .sign();
        System.out.println("ondertekend: " + a[1]);
    }
}
