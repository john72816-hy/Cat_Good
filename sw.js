// sw.js
const CACHE_NAME = 'cat-app-v1';

// 安裝時快取
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './manifest.json'
            ]);
        })
    );
});

// 必須有 fetch 事件，Lighthouse 才會通過
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
