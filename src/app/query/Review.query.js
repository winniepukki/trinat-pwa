/* eslint-disable no-return-await */
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

export class ReviewQuery {
    createReview(fullName, email, review) {
        const request = {
            query: `
                mutation {
                    createReview(reviewInput: {
                        fullName: "${fullName}"
                        email: "${email}"
                        review: "${review}"
                    }) {
                        fullName
                        email
                        review
                    }
                }
            `
        };

        async function fetchProducts() {
            return await fetch('https://winniepukki.ddns.net', {
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
                .catch((error) => error);
        }

        return fetchProducts();
    }
}

export default new ReviewQuery();
