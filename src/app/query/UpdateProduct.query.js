/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const query = `mutation(
    $id: ID!,
    $lang:
    String!,
    $email: String!,
    $product: EditProduct
) {
  updateProduct(id: $id, lang: $lang, email: $email, product: $product) {
    success
  }
}
`;

export const updateProductMutation = async (
    id = '',
    lang = '',
    email = '', {
        title,
        description,
        price
    }
) => fetch('https://trinat-graphql.herokuapp.com/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        query,
        variables: {
            id,
            lang,
            email,
            product: {
                title,
                description,
                price
            }
        }
    })
})
    .then((response) => response.json())
    .then((data) => data);

export default updateProductMutation;
