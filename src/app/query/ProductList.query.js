/**
* Immersive Technologies project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const query = `query {
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
        isRecommended
        isRecent
    }
}
`;

export const fetchProductListQuery = async () => fetch('https://graphql.reaktive.cc', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        query
    })
})
    .then((response) => response.json())
    .then((data) => data);

export default fetchProductListQuery;
