/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

const query = `mutation(
  $id: String! 
  $title: String! 
  $description: String! 
  $price: Float!
) {
  updateProduct(updateInput: {
    _id: $id
    title: $title
    description: $description
    price: $price
  }) {
    success
  }
}
`;

export const updateProduct = async (
    id,
    title,
    description,
    price
) => fetch('https://winniepukki.ddns.net', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        query,
        variables: {
            id,
            title,
            description,
            price
        }
    })
})
    .then((response) => response.json())
    .then((data) => data);

export default updateProduct;
