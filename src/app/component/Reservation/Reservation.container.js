/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';

import Reservation from './Reservation.component';

import createReservation from '@query/Reservation.query';

export class ReservationContainer extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired
    }

    containerFunctions = {
        handleChange: this.handleChange.bind(this),
        handleSubmit: this.handleSubmit.bind(this)
    }

    constructor(props) {
        super(props);

        this.state = {
            values: {
                name: '',
                surname: '',
                phone: '',
                date: '',
                time: '',
                guests: 0
            }
        };
    }

    containerProps() {
        const {
            values: {
                name = '',
                surname = '',
                phone = '',
                date = '',
                time = '',
                guests = 0
            } = {}
        } = this.state;

        return {
            values: {
                name,
                surname,
                phone,
                date,
                time,
                guests
            }
        };
    }

    handleChange(e) {
        const { values } = this.state;
        this.setState({
            values: { ...values, [e.target.name]: e.target.value }
        });
    }

    handleSubmit() {
        const {
            values: {
                name = '',
                surname = '',
                phone = '',
                date = '',
                time = '',
                guests = ''
            } = {}
        } = this.state;

        createReservation(
            name,
            surname,
            phone,
            date,
            time,
            parseInt(guests, 10)
        )
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const {
            open,
            onClose
        } = this.props;

        return (
            <Reservation
              open={ open }
              onClose={ onClose }
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default ReservationContainer;
