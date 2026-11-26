// 自動產生，勿手改（build/gen_sw.py）
const VER = 'sci-476d3e36c4';
const FILES = ["./", "index.html", "data/phy-ch3.js", "data/phy-ch4.js", "img/s3-q1.jpg", "img/s3-q101.jpg", "img/s3-q108.jpg", "img/s3-q113.jpg", "img/s3-q118.jpg", "img/s3-q12.jpg", "img/s3-q120.jpg", "img/s3-q127.jpg", "img/s3-q128.jpg", "img/s3-q13.jpg", "img/s3-q133.jpg", "img/s3-q134.jpg", "img/s3-q137.jpg", "img/s3-q138.jpg", "img/s3-q146.jpg", "img/s3-q147.jpg", "img/s3-q15.jpg", "img/s3-q150.jpg", "img/s3-q151.jpg", "img/s3-q152.jpg", "img/s3-q16.jpg", "img/s3-q164.jpg", "img/s3-q165.jpg", "img/s3-q166.jpg", "img/s3-q167.jpg", "img/s3-q169.jpg", "img/s3-q17.jpg", "img/s3-q178.jpg", "img/s3-q179.jpg", "img/s3-q180.jpg", "img/s3-q181.jpg", "img/s3-q185.jpg", "img/s3-q191.jpg", "img/s3-q194.jpg", "img/s3-q196.jpg", "img/s3-q2.jpg", "img/s3-q206.jpg", "img/s3-q21.jpg", "img/s3-q29.jpg", "img/s3-q30.jpg", "img/s3-q31.jpg", "img/s3-q32.jpg", "img/s3-q33.jpg", "img/s3-q34.jpg", "img/s3-q36.jpg", "img/s3-q37.jpg", "img/s3-q38.jpg", "img/s3-q4.jpg", "img/s3-q41.jpg", "img/s3-q44.jpg", "img/s3-q45.jpg", "img/s3-q47.jpg", "img/s3-q5.jpg", "img/s3-q56.jpg", "img/s3-q6.jpg", "img/s3-q62.jpg", "img/s3-q63.jpg", "img/s3-q64.jpg", "img/s3-q65.jpg", "img/s3-q66.jpg", "img/s3-q67.jpg", "img/s3-q69.jpg", "img/s3-q7.jpg", "img/s3-q71.jpg", "img/s3-q74.jpg", "img/s3-q76.jpg", "img/s3-q79.jpg", "img/s3-q80.jpg", "img/s3-q87.jpg", "img/s3-q88.jpg", "img/s3-q89.jpg", "img/s3-q90.jpg", "img/s3-q92.jpg", "img/s3-q93.jpg", "img/s3-q94.jpg", "img/s3-q95.jpg", "img/s3-q97.jpg", "img/s3-q99.jpg", "img/s4-q10.jpg", "img/s4-q100.jpg", "img/s4-q102.jpg", "img/s4-q103.jpg", "img/s4-q104.jpg", "img/s4-q105.jpg", "img/s4-q106.jpg", "img/s4-q107.jpg", "img/s4-q108.jpg", "img/s4-q11.jpg", "img/s4-q111.jpg", "img/s4-q112.jpg", "img/s4-q116.jpg", "img/s4-q117.jpg", "img/s4-q119.jpg", "img/s4-q121.jpg", "img/s4-q124.jpg", "img/s4-q125.jpg", "img/s4-q13.jpg", "img/s4-q132.jpg", "img/s4-q138.jpg", "img/s4-q140.jpg", "img/s4-q141.jpg", "img/s4-q142.jpg", "img/s4-q144.jpg", "img/s4-q147.jpg", "img/s4-q148.jpg", "img/s4-q149.jpg", "img/s4-q15.jpg", "img/s4-q151.jpg", "img/s4-q153.jpg", "img/s4-q154.jpg", "img/s4-q155.jpg", "img/s4-q156.jpg", "img/s4-q19.jpg", "img/s4-q2.jpg", "img/s4-q20.jpg", "img/s4-q22.jpg", "img/s4-q23.jpg", "img/s4-q24.jpg", "img/s4-q26.jpg", "img/s4-q29.jpg", "img/s4-q30.jpg", "img/s4-q31.jpg", "img/s4-q33.jpg", "img/s4-q35.jpg", "img/s4-q36.jpg", "img/s4-q37.jpg", "img/s4-q38.jpg", "img/s4-q39.jpg", "img/s4-q40.jpg", "img/s4-q41.jpg", "img/s4-q43.jpg", "img/s4-q44.jpg", "img/s4-q46.jpg", "img/s4-q47.jpg", "img/s4-q49.jpg", "img/s4-q5.jpg", "img/s4-q55.jpg", "img/s4-q56.jpg", "img/s4-q58.jpg", "img/s4-q6.jpg", "img/s4-q61.jpg", "img/s4-q67.jpg", "img/s4-q71.jpg", "img/s4-q74.jpg", "img/s4-q80.jpg", "img/s4-q81.jpg", "img/s4-q82.jpg", "img/s4-q88.jpg", "img/s4-q89.jpg", "img/s4-q90.jpg"];
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(VER).then(c => Promise.allSettled(FILES.map(f => c.add(new Request(f, {cache: 'reload'}))))));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith('sci-') && k !== VER).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  const isPage = req.mode === 'navigate' || /\/data\/|index\.html$|\/science\/$/.test(req.url);
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
