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

import './Reservation.style.scss';

export class Reservation extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired
    }

    render() {
        const {
            t,
            open = false,
            onClose
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
                                Rezervācija
                            </p>
                        </h2>
                        <div className="Reservation-Group">
                            <label htmlFor="name">
                                { t('name') }
                                *
                            </label>
                            <input id="name" name="name" type="text" />
                        </div>
                        <div className="Reservation-Group">
                            <label htmlFor="email">
                                { t('surname') }
                                *
                            </label>
                            <input id="email" name="email" type="email" />
                        </div>
                        <div className="Reservation-Group Input-Last">
                            <label htmlFor="phone">
                                { t('phone') }
                                *
                            </label>
                            <input id="phone" name="phone" type="text" />
                        </div>
                        <div className="Reservation-Group">
                            <label htmlFor="date">
                                { t('date') }
                                *
                            </label>
                            <input id="date" name="date" type="date" />
                        </div>
                        <div className="Reservation-Group">
                            <label htmlFor="time">
                                { t('time') }
                                *
                            </label>
                            <input id="time" name="time" type="time" />
                        </div>
                        <div className="Reservation-Group Input-Last">
                            <label htmlFor="seats">
                                { t('seats') }
                                *
                            </label>
                            <select name="seats">
                                <option value="1">1 Person</option>
                                <option value="2">2 People</option>
                                <option value="3">3 People</option>
                                <option value="4">4 People</option>
                                <option value="5">5 People</option>
                                <option value="more">5+ People</option>
                            </select>
                        </div>
                        <div className="Reservation-Box-Submit">
                            <button
                              className="Button Button-Reservation Button-Light"
                              aria-label="Submit the reservation form"
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
