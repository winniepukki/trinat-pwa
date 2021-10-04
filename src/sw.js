/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const cacheName = '2.0.3';
const assets = [
    'index.html',
    'manifest.json'
];

const STATUS_OK = 200;
const STATUS_CREATED = 201;

async function cacheFirst(request) {
    const cached = await caches.match(request);
    // eslint-disable-next-line no-return-await
    return cached ?? await fetch(request);
}

self.addEventListener('install', async () => {
    const cache = await caches.open(cacheName);
    await cache.addAll(assets);

    const request = {
        query: `
            query {
                products {
                    _id
                    title
                    category {
                        title
                        priority
                    }    
                    description
                    image_url
                    price
                    language
                }
            }
            `
    };

    await fetch('https://winniepukki.ddns.net', {
        method: 'POST',
        body: JSON.stringify(request),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((response) => {
            const { status } = response;
            if (status !== STATUS_OK && status !== STATUS_CREATED) {
                throw new Error('Unable to process your request!');
            }

            return response.json();
        })
        .then((data) => data)
        .then((data) => {
            const {
                data: {
                    products = []
                } = {}
            } = data;

            const request = indexedDB.open('products', 2);
            request.onupgradeneeded = (event) => {
                const db = event.target.result;

                const objectStore = db.createObjectStore('products', {
                    keyPath: 'title'
                });

                objectStore.createIndex('title', 'title', { unique: false });

                objectStore.transaction.oncomplete = () => {
                    const customerObjectStore = db
                        .transaction('products', 'readwrite')
                        .objectStore('products');

                    products.forEach((product) => {
                        customerObjectStore.add(product);
                    });
                };
            };
        })
        .catch(() => {});
});

self.addEventListener('fetch', (e) => {
    e.respondWith(cacheFirst(e.request));
});
