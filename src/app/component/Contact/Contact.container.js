/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

import React from 'react';

import Contact from './Contact.component';

import createReviewMutation from '@query/CreateReview.query';

import { validateInputLength } from '@util/Validator';
import { RESET_TIME_IN_MS } from '@component/Reservation/Reservation.config';
import {
    MAX_EXTENDED_INPUT_LENGTH,
    MIN_INPUT_LENGTH
} from '@util/Validator/Validator.config';

export class ContactContainer extends React.Component {
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
                email: '',
                review: ''
            }
        };
    }

    containerProps() {
        const {
            message = '',
            values: {
                name = '',
                email = '',
                review = ''
            } = {}
        } = this.state;

        return {
            message,
            values: {
                name,
                email,
                review
            }
        };
    }

    handleFieldReset() {
        this.setState({
            values: {
                name: '',
                email: '',
                review: ''
            }
        });
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
                email = '',
                review = ''
            } = {}
        } = this.state;

        if (!validateInputLength(
            MIN_INPUT_LENGTH,
            MAX_EXTENDED_INPUT_LENGTH,
            name,
            email
        )) {
            this.setState({
                message: 'error.length'
            });

            return;
        }

        createReviewMutation({
            name,
            email,
            review
        })
            .then((response) => {
                const {
                    data: {
                        createReview: {
                            success = false
                        } = {}
                    } = {}
                } = response;

                if (!success) {
                    this.setState({
                        message: 'error.network'
                    });

                    return;
                }

                this.setState({
                    message: 'contact-success'
                });

                this.handleFieldReset();

                setTimeout(() => {
                    this.setState({
                        message: ''
                    });
                }, RESET_TIME_IN_MS);
            })
            .catch(() => {
                this.setState({
                    message: 'error.network'
                });
            });
    }

    render() {
        return (
            <Contact
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default ContactContainer;
