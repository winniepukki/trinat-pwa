/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('install', async (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => cache.addAll([
            'index.html',
            'css/main.css',
            'main.js',
            '/assets/img/icons/elementor.svg',
            '/assets/img/section/hero.webp',
            '/assets/img/logo/logo.png',
            '/assets/img/logo/logo-dark.png'
        ]))
    );
});

self.addEventListener('fetch', (ev) => {
    // console.log(`Service worker intercepted request for: ${ev.request.url}`);
    ev.respondWith(
        caches.match(ev.request)
            .then((res) => {
                if (res) {
                    // console.log('This is in the cache');
                    return res;
                }

                // console.log('This is NOT in the cache - fetching from web');
                return fetch(ev.request);
            })
    );
});
