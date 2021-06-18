/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import {
    STATUS_CREATED,
    STATUS_OK
} from '@component/ProductList/ProductList.config';
import {
    LANG_CODE_LV,
    LANG_CODE_RU
} from '@component/Starters/Starters.config';

export class ProductListQuery {
    getProductList(lang) {
        if (lang !== LANG_CODE_LV && lang !== LANG_CODE_RU) {
            return {};
        }

        const request = {
            query: `
                query {
                    products {
                        _id
                        title
                        category
                        description
                        image_url
                        price
                        language
                    }
                }
            `
        };

        async function fetchProducts() {
            // eslint-disable-next-line no-return-await
            return await fetch('http://winniepukki.ddns.net', {
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
                .catch(() => {});
        }

        return fetchProducts();
    }
}

export default new ProductListQuery();
