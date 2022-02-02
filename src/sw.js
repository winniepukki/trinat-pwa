/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const cacheVersion = 'v5';

self.addEventListener('activate', () => {
    caches.keys().then((keyList) => Promise.all(keyList.map((key) => {
        if (cacheVersion.indexOf(key) === -1) {
            return caches.delete(key);
        }

        return null;
    })));

    self.clients.claim();
});

self.addEventListener('install', async (event) => {
    event.waitUntil(
        caches.open(cacheVersion).then((cache) => cache.addAll([
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
            'assets/img/logo/logo-img.png',
            'assets/img/social/americanexpress.svg',
            'assets/img/social/apple.svg',
            'assets/img/social/mastercard.svg',
            'assets/img/social/visa.svg',
            'assets/img/section/hero.webp',
            'assets/img/section/section-delimiter-1.webp',
            'assets/img/section/section-delimiter-2.webp',
            'assets/img/section/section-plate.webp',
            'assets/img/section/section-stairs.webp'
        ]))
    );
});

self.addEventListener('fetch', (ev) => {
    ev.respondWith(
        caches.match(ev.request)
            .then((res) => {
                if (res) {
                    return res;
                }

                return fetch(ev.request);
            })
    );
});
