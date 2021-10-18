/* eslint-disable max-len,jsx-a11y/label-has-associated-control */
/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { withTranslation } from 'react-i18next';

import ReservationType from '@type/Reservation';

import './Reservation.style.scss';

export class Reservation extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        values: ReservationType.isRequired
    }

    render() {
        const {
            t,
            open = false,
            onClose,
            values: {
                name = '',
                surname = '',
                phone = '',
                date = '',
                time = '',
                guests = 0
            } = {},
            handleChange,
            handleSubmit
        } = this.props;

        if (!open) {
            return null;
        }

        return ReactDOM.createPortal(
            <section
              className="Reservation"
            >
                <div
                  className="Reservation-Wrapper"
                >
                    <div
                      className="Reservation-Box"
                    >
                        <h2>
                            <p className="Subtitle">Galdu</p>
                            <p className="Headline">
                                { t('reservation') }
                            </p>
                        </h2>
                        <div className="Reservation-Group">
                            <label htmlFor="name">
                                { t('name') }
                                *
                            </label>
                            <input
                              id="name"
                              name="name"
                              type="text"
                              value={ name }
                              onChange={ handleChange }
                            />
                        </div>
                        <div className="Reservation-Group">
                            <label htmlFor="surname">
                                { t('surname') }
                                *
                            </label>
                            <input
                              id="surname"
                              name="surname"
                              type="text"
                              value={ surname }
                              onChange={ handleChange }
                            />
                        </div>
                        <div className="Reservation-Group Input-Last">
                            <label htmlFor="phone">
                                { t('phone') }
                                *
                            </label>
                            <input
                              id="phone"
                              name="phone"
                              type="text"
                              value={ phone }
                              onChange={ handleChange }
                            />
                        </div>
                        <div className="Reservation-Group">
                            <label htmlFor="date">
                                { t('date') }
                                *
                            </label>
                            <input
                              id="date"
                              name="date"
                              type="date"
                              value={ date }
                              onChange={ handleChange }
                            />
                        </div>
                        <div className="Reservation-Group">
                            <label htmlFor="time">
                                { t('time') }
                                *
                            </label>
                            <input
                              id="time"
                              name="time"
                              type="time"
                              value={ time }
                              onChange={ handleChange }
                            />
                        </div>
                        <div className="Reservation-Group Input-Last">
                            <label htmlFor="guests">
                                { t('seats') }
                                *
                            </label>
                            <select
                              name="guests"
                              id="guests"
                              value={ guests }
                              onChange={ handleChange }
                            >
                                <option value="1">{ t('guest', { count: 1 }) }</option>
                                <option value="2">{ t('guest', { count: 2 }) }</option>
                                <option value="3">{ t('guest', { count: 3 }) }</option>
                                <option value="4">{ t('guest', { count: 4 }) }</option>
                                <option value="5">{ t('guest', { count: 5 }) }</option>
                                <option value="more">{ t('guest-over') }</option>
                            </select>
                        </div>
                        <div className="Reservation-Box-Submit">
                            <button
                              className="Button Button-Reservation Button-Light"
                              aria-label="Submit the reservation form"
                              onClick={ handleSubmit }
                            >
                                { t('submit') }
                            </button>
                        </div>
                        <button
                          onClick={ onClose }
                          className="Button Button-Close Button-Light"
                          aria-label="Close the reservation form"
                        >
                            <i className="far fa-times-circle" />
                        </button>
                    </div>
                </div>
            </section>,
            document.getElementById('modal-root')
        );
    }
}

export default withTranslation()(Reservation);
