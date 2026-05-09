const CACHE_NAME = 'cat-sitter-v3';
const ASSETS = [
    'index.html',
    'manifest.json',
    'https://cdn.jsdelivr.net/npm/chart.js'
];

// 安裝並快取資源
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

// 攔截請求，優先使用快取
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(res => res || fetch(e.request))
    );
});