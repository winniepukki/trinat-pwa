/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

const query = `mutation($language: String!, $reservation: ReservationInput) {
  createReservation(language: $language, reservation: $reservation) {
    message
    success
  }
}
`;

export const createReservationMutation = async (
    language = '', {
        name = '',
        surname = '',
        phone = '',
        date = '',
        time = '',
        guests = '',
        note = ''
    }
) => fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        query,
        variables: {
            language,
            reservation: {
                name,
                surname,
                phone,
                date,
                time,
                guests,
                note
            }
        }
    })
})
    .then((response) => response.json())
    .then((data) => data);

export default createReservationMutation;
