package nl.boardroomcoach.app;

import android.app.Activity;
import android.content.ClipData;
import android.content.ClipboardManager;
import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebResourceRequest;
import android.webkit.WebResourceResponse;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

/**
 * Boardroomcoach: de webapp draait lokaal uit de app-assets (geen server nodig).
 * Voortgang wordt bewaard in de WebView-opslag én in SharedPreferences van de app,
 * zodat hij blijft staan na afsluiten, herstarten of een update.
 */
public class MainActivity extends Activity {
    private static final String HOST = "appassets.androidplatform.net";
    private static final String START = "https://" + HOST + "/index.html";
    private WebView web;

    @Override
    protected void onCreate(Bundle state) {
        super.onCreate(state);
        Window w = getWindow();
        w.setStatusBarColor(Color.WHITE);
        if (Build.VERSION.SDK_INT >= 23) {
            w.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
        }
        if (Build.VERSION.SDK_INT >= 26) {
            w.setNavigationBarColor(Color.WHITE);
            w.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR | View.SYSTEM_UI_FLAG_LIGHT_NAVIGATION_BAR);
        }

        web = new WebView(this);
        web.setBackgroundColor(Color.rgb(238, 242, 241));
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setDatabaseEnabled(true);
        s.setAllowFileAccess(false);
        s.setAllowContentAccess(false);
        s.setMediaPlaybackRequiresUserGesture(true);
        web.addJavascriptInterface(new Store(this), "AndroidStore");
        web.setWebViewClient(new LocalClient());
        setContentView(web);

        if (state != null && web.restoreState(state) != null) return;
        web.loadUrl(START);
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    public void onBackPressed() {
        web.evaluateJavascript("(window.__back && window.__back()) ? 'y' : 'n'", new ValueCallback<String>() {
            @Override
            public void onReceiveValue(String v) {
                if (!"\"y\"".equals(v)) finish();
            }
        });
    }

    @Override
    protected void onDestroy() {
        if (web != null) web.destroy();
        super.onDestroy();
    }

    /** Serveert de bestanden uit assets/www op een vast https-adres, zodat opslag betrouwbaar werkt. */
    private class LocalClient extends WebViewClient {
        private final Map<String, String> mimes = new HashMap<String, String>();

        LocalClient() {
            mimes.put("html", "text/html");
            mimes.put("css", "text/css");
            mimes.put("js", "application/javascript");
            mimes.put("woff2", "font/woff2");
            mimes.put("png", "image/png");
            mimes.put("svg", "image/svg+xml");
            mimes.put("json", "application/json");
        }

        @Override
        public WebResourceResponse shouldInterceptRequest(WebView view, WebResourceRequest req) {
            Uri u = req.getUrl();
            if (!HOST.equals(u.getHost())) return null;
            String path = u.getPath();
            if (path == null || path.equals("/") || path.isEmpty()) path = "/index.html";
            if (path.contains("..")) return notFound();
            try {
                InputStream in = getAssets().open("www" + path);
                String ext = path.substring(path.lastIndexOf('.') + 1);
                String mime = mimes.containsKey(ext) ? mimes.get(ext) : "application/octet-stream";
                WebResourceResponse r = new WebResourceResponse(mime, "utf-8", in);
                Map<String, String> h = new HashMap<String, String>();
                h.put("Cache-Control", "no-cache");
                r.setResponseHeaders(h);
                return r;
            } catch (IOException e) {
                return notFound();
            }
        }

        private WebResourceResponse notFound() {
            return new WebResourceResponse("text/plain", "utf-8", 404, "Not Found", new HashMap<String, String>(), null);
        }

        @Override
        public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
            Uri u = req.getUrl();
            if (HOST.equals(u.getHost())) return false;
            try {
                startActivity(new Intent(Intent.ACTION_VIEW, u));
            } catch (Exception e) {
                // geen app om de link te openen
            }
            return true;
        }
    }

    /** Brug voor JavaScript: voortgang bewaren in de app-opslag en tekst naar het klembord kopiëren. */
    public static class Store {
        private final Context ctx;
        private final SharedPreferences prefs;

        Store(Context c) {
            ctx = c.getApplicationContext();
            prefs = ctx.getSharedPreferences("boardroomcoach", Context.MODE_PRIVATE);
        }

        @JavascriptInterface
        public String load() {
            return prefs.getString("state", "");
        }

        @JavascriptInterface
        public void save(String json) {
            if (json != null) prefs.edit().putString("state", json).apply();
        }

        @JavascriptInterface
        public void copy(final String text) {
            new android.os.Handler(ctx.getMainLooper()).post(new Runnable() {
                @Override
                public void run() {
                    ClipboardManager cm = (ClipboardManager) ctx.getSystemService(Context.CLIPBOARD_SERVICE);
                    if (cm != null) cm.setPrimaryClip(ClipData.newPlainText("Boardroomcoach reservecode", text));
                }
            });
        }
    }
}
