/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const cacheName = 'v1';
const assets = [
    'index.html',
    'main.js'
];

// self.addEventListener('install', (e) => {
//     e.waitUntil(
//         caches
//             .open(cacheName)
//             .then((cache) => {
//                 cache.addAll(assets);
//             })
//             .then(() => self.skipWaiting())
//     );
// });

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== cacheName) {
                        return caches.delete(cache);
                    }

                    return false;
                })
            ))
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request)
            .then((res) => {
                const resClone = res.clone();
                caches
                    .open(cacheName)
                    .then((cache) => {
                        cache.put(e.request, resClone);
                    });

                return res;
            })
            .catch((err) => {
                caches.match(e.request)
                    .then((res) => res);
            })
    );
});
