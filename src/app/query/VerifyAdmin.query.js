/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

const query = `query($email: String!) {
  verifyAdmin(email: $email) {
    success
  }
}
`;

export const verifyAdminQuery = async (
    email = ''
) => fetch('https://graphql.trinatdata.info/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        query,
        variables: {
            email
        }
    })
})
    .then((response) => response.json())
    .then((data) => data);

export default verifyAdminQuery;
