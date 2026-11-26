// 自動產生，勿手改
const VER = 'chi-64b34c8db6';
const FILES = ["./", "index.html", "data/chi-l4.js"];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(VER).then(c => Promise.allSettled(FILES.map(f => c.add(new Request(f, {cache: 'reload'}))))));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('chi-') && k !== VER).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isPage = req.mode === 'navigate' || /\/data\/|index\.html$|\/chinese\/$/.test(req.url);
  if (isPage) {
    // 先抓網路（拿到最新題目），3 秒沒回應或沒網路就用離線版
    e.respondWith(new Promise(res => {
      let done = false;
      const fallback = () => caches.match(req, {ignoreSearch: true}).then(r => r || caches.match('index.html')).then(r => { if (!done && r) { done = true; res(r); } });
      const t = setTimeout(fallback, 3000);
      fetch(req).then(r => {
        clearTimeout(t);
        if (r.ok) { const cp = r.clone(); caches.open(VER).then(c => c.put(req, cp)); }
        if (!done) { done = true; res(r); }
      }).catch(() => { clearTimeout(t); fallback().then(() => { if (!done) { done = true; res(Response.error()); } }); });
    }));
  } else {
    e.respondWith(caches.match(req, {ignoreSearch: true}).then(r => r || fetch(req).then(n => {
      if (n.ok) { const cp = n.clone(); caches.open(VER).then(c => c.put(req, cp)); }
      return n;
    })));
  }
});
