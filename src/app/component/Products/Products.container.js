/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import React from 'react';

import Products from './Products.component';

import fetchCategoriesWithProducts from '@query/Categories.query';

export class ProductsContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        };

        this.getProductList = this.getProductList.bind(this);
    }

    async componentDidMount() {
        const categories = await this.getProductList()
            .catch(() => this.getProductsFromIndexedDB());

        this.setState({
            categories
        });

        this.putProductsToIndexedDB();
    }

    getProductsFromIndexedDB() {
        const request = window.indexedDB.open('products', 1);
        request.onsuccess = (event) => {
            const db = event.target.result;
            const transaction = db.transaction('products');
            const objectStore = transaction.objectStore('products');
            const request = objectStore.getAll();

            request.onsuccess = () => {
                const { result: products = [] } = request;

                return products;
            };
        };
    }

    putProductsToIndexedDB() {
        // eslint-disable-next-line no-unused-vars
        let db;
        const request = window.indexedDB.open('products', 1);

        const { categories } = this.state;

        request.onsuccess = (e) => {
            db = e.target.result;
        };

        request.onupgradeneeded = (e) => {
            const db = e.target.result;

            if (db.version >= 2) {
                db.deleteObjectStore('products');
            }

            const objectStore = db.createObjectStore('products', {
                keyPath: 'key'
            });

            for (let i = 0; i < categories.length; i++) {
                objectStore.add(categories[i]);
            }
        };
    }

    containerProps() {
        const { categories = [] } = this.state;

        return {
            categories
        };
    }

    async getProductList() {
        return fetchCategoriesWithProducts()
            .then(({ data: { getCategories = [] } = {} }) => getCategories);
    }

    render() {
        return (
            <Products
              { ...this.containerProps() }
            />
        );
    }
}

export default ProductsContainer;
