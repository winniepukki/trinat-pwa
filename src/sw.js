/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const cacheName = 'v1';
const assets = [
    'index.html',
    'manifest.json'
];

async function cacheFirst(request) {
    const cached = await caches.match(request);
    // eslint-disable-next-line no-return-await
    return cached ?? await fetch(request);
}

self.addEventListener('install', async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(assets);
});

self.addEventListener('fetch', (e) => {
    e.respondWith(cacheFirst(e.request));
});
