/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const query = `query {
  getCategories {
    key
    priority
    products {
      id
      price
      isRecommended
      isRecent
      locales {
        lang
        title
        description
      }
    }
  }
}
`;

export const fetchCategoriesWithProducts = async () => fetch('https://graphql.reaktivelab.co/graphql', {
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

export default fetchCategoriesWithProducts;
