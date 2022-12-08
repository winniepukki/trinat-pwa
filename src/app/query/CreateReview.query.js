/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const query = `mutation($review: ReviewInput) {
  createReview(review: $review) {
    message
    success
  }
}
`;

export const createReviewMutation = async ({
    name = '',
    email = '',
    review = ''
}) => fetch('https://trinat-graphql.herokuapp.com/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        query,
        variables: {
            review: {
                name,
                email,
                review
            }
        }
    })
})
    .then((response) => response.json())
    .then((data) => data);

export default createReviewMutation;
