/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

self.addEventListener('activate', () => self.clients.claim());

self.addEventListener('install', async (event) => {
    event.waitUntil(
        caches.open('v5').then((cache) => cache.addAll([
            '/',
            'index.html',
            'css/main.css',
            'css/vendor.css',
            'css/App.css',
            'css/Footer.css',
            'css/Navigation.css',
            'main.js',
            'vendor.js',
            'App.js',
            'Footer.js',
            'Navigation.js',
            'ScrollTop.js',
            'Router.js',
            'assets/img/icons/elementor.svg',
            'assets/img/icons/leaf.png',
            'assets/img/logo/logo.png',
            'assets/img/logo/logo-dark.png',
            'assets/img/social/americanexpress.svg',
            'assets/img/social/apple.svg',
            'assets/img/social/mastercard.svg',
            'assets/img/section/hero.webp',
            'assets/img/section/section-delimiter-1.webp',
            'assets/img/section/section-delimiter-2.webp',
            'assets/img/section/section-plate.webp',
            'assets/img/section/section-stairs.webp'
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
