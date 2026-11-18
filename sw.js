/* Mister Tó · service worker
   - a app (index.html): rede primeiro (há versão nova → usa-a); sem rede → usa a guardada
   - ícones, manifesto e tipos de letra: guardados
   - ESPN e pontes: nunca guardados (vão sempre à rede) */
const VERSION = 'to-v3.1.0';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png', './bg.webp'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(CORE)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('to-') && k !== VERSION && k !== 'to-runtime').map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req = e.request; if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (/espn\.com|corsproxy\.io|allorigins\.win/.test(url.hostname)) return;
  if (req.mode === 'navigate' || (url.origin === self.location.origin && /\/(index\.html)?$/.test(url.pathname))) {
    e.respondWith(fetch(url.href, { cache: 'no-cache', credentials: 'same-origin' }).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return res; })
      .catch(() => caches.match('./index.html').then(r => r || caches.match('./'))));
    return;
  }
  if (url.origin === self.location.origin || /fonts\.(googleapis|gstatic)\.com/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { if (res && res.ok && res.type !== 'opaque') { const copy = res.clone(); caches.open('to-runtime').then(c => c.put(req, copy)); } return res; })));
  }
});
