/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

const query = `mutation(
  $name: String!
  $surname: String!
  $phone: String!
  $date: String!
  $time: String!
  $guests: Float!
) {
  createReservation(reservationInput: {
    name: $name
    surname: $surname
    phone: $phone
    date: $date
    time: $time
    guests: $guests
  }) {
    name
    surname
    phone
    date
    time
    guests
  }
}
`;

export const createReservation = async (
    name = '',
    surname = '',
    phone = '',
    date = '',
    time = '',
    guests = 0
) => fetch('https://winniepukki.ddns.net', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
        query,
        variables: {
            name,
            surname,
            phone,
            date,
            time,
            guests
        }
    })
})
    .then((response) => response.json())
    .then((data) => data);

export default createReservation;
