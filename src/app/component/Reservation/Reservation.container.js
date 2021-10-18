/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';

import Reservation from './Reservation.component';

import {
    MIN_INPUT_LENGTH,
    MAX_INPUT_LENGTH
} from '@util/Validator/Validator.config';
import {
    dateInPast,
    validateInputLength,
    validatePhoneNumber
} from '@util/Validator';

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
            message: '',
            values: {
                name: '',
                surname: '',
                phone: '',
                date: '',
                time: '',
                guests: 1
            }
        };
    }

    containerProps() {
        const {
            message,
            values: {
                name = '',
                surname = '',
                phone = '',
                date = '',
                time = '',
                guests = 1
            } = {}
        } = this.state;

        return {
            message,
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

    handleFieldReset() {
        this.setState({
            values: {
                name: '',
                surname: '',
                phone: '',
                date: '',
                time: '',
                guests: 1
            }
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
                guests = 1
            } = {}
        } = this.state;

        if (!validateInputLength(
            MIN_INPUT_LENGTH,
            MAX_INPUT_LENGTH,
            name,
            surname,
            date,
            time
        )) {
            this.setState({
                message: 'Input length!'
            });

            return;
        }

        if (!validatePhoneNumber(phone)) {
            this.setState({
                message: 'Phone error!'
            });

            return;
        }

        if (dateInPast(date)) {
            this.setState({
                message: 'Date in past!'
            });

            return;
        }

        createReservation(
            name,
            surname,
            phone,
            date,
            time,
            +guests
        )
            .then((response) => {
                console.log(response);
                this.handleFieldReset();
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
