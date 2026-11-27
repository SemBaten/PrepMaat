// Prepmaat: werkt ook zonder internet. Verhoog het versienummer bij een update.
const CACHE = "prepmaat-v44";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))); self.clients.claim(); });
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== location.origin) return;
  const save = r => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); } return r; };
  // Aanbiedingen, productfoto's en de versiecheck: altijd vers als het kan
  if (/\.json$|sw\.js$/.test(url.pathname)) { e.respondWith(fetch(e.request).then(save).catch(() => caches.match(e.request))); return; }
  // De app zelf: meteen uit het geheugen (snel), en op de achtergrond de nieuwste versie ophalen voor de volgende keer
  e.respondWith(caches.match(e.request).then(hit => {
    const net = fetch(e.request).then(save).catch(() => hit || caches.match("index.html"));
    if (hit) { e.waitUntil(net); return hit; }
    return net;
  }));
});
