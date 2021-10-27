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
    RESET_TIME_IN_MS
} from './Reservation.config';
import {
    MIN_INPUT_LENGTH,
    MAX_INPUT_LENGTH
} from '@util/Validator/Validator.config';
import {
    dateInPast,
    validateInputLength,
    validatePhoneNumber, validateWorkingHours
} from '@util/Validator';

import createReservation from '@query/Reservation.query';

export class ReservationContainer extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired
    }

    containerFunctions = {
        handleChange: this.handleChange.bind(this),
        handleSubmit: this.handleSubmit.bind(this),
        handleInsideElementClick: this.handleInsideElementClick.bind(this)
    }

    constructor(props) {
        super(props);

        this.state = {
            status: false,
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
            open,
            onClose
        } = this.props;

        const {
            message,
            status,
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
            open,
            onClose,
            message,
            status,
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

    handleInsideElementClick(e) {
        e.stopPropagation();
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
                message: 'error.length'
            });

            return;
        }

        if (!validatePhoneNumber(phone)) {
            this.setState({
                message: 'error.phone'
            });

            return;
        }

        if (dateInPast(date)) {
            this.setState({
                message: 'error.date'
            });

            return;
        }

        if (!validateWorkingHours(time)) {
            this.setState({
                message: 'error.time'
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
            .then(() => {
                this.setState({
                    message: 'reservation-success',
                    status: true
                });

                this.handleFieldReset();

                setTimeout(() => {
                    this.setState({
                        message: '',
                        status: false
                    });
                }, RESET_TIME_IN_MS);
            })
            .catch(() => {
                this.setState({
                    message: 'error.network-reservation'
                });
            });
    }

    render() {
        return (
            <Reservation
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default ReservationContainer;
