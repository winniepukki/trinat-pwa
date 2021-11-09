/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

const query = `mutation($reservation: ReservationInput) {
  createReservation(reservation: $reservation) {
    message
    success
  }
}
`;

export const createReservationMutation = async ({
    name = '',
    surname = '',
    phone = '',
    date = '',
    time = '',
    guests = ''
}) => fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        query,
        variables: {
            reservation: {
                name,
                surname,
                phone,
                date,
                time,
                guests
            }
        }
    })
})
    .then((response) => response.json())
    .then((data) => data);

export default createReservationMutation;
