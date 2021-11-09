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
            'css/vendor.css',
            'css/src_app_component_App_index_js.css',
            'css/src_app_component_Footer_index_js.css',
            'css/src_app_component_Navigation_index_js.css',
            'main.js',
            'vendor.js',
            'src_app_component_App_index_js.js',
            'src_app_component_Footer_index_js.js',
            'src_app_component_Navigation_index_js.js',
            'src_app_component_ScrollTop_index_js.js',
            'src_app_route_Router_component_js.js'
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
