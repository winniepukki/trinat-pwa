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

        if (open) {
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
                            <input className="Input-Dark" id="name" name="name" type="text" />
                        </div>
                        <div className="Reservation-Group">
                            <label htmlFor="email">
                                { t('surname') }
                                *
                            </label>
                            <input className="Input-Dark" id="email" name="email" type="email" />
                        </div>
                        <div className="Reservation-Group Input-Last">
                            <label htmlFor="phone">
                                { t('phone') }
                                *
                            </label>
                            <input className="Input-Dark" id="phone" name="phone" type="text" />
                        </div>
                        <div className="Reservation-Group">
                            <label htmlFor="date">
                                { t('date') }
                                *
                            </label>
                            <input className="Input-Dark" id="date" name="date" type="date" />
                        </div>
                        <div className="Reservation-Group">
                            <label htmlFor="time">
                                { t('time') }
                                *
                            </label>
                            <input className="Input-Dark" id="time" name="time" type="time" />
                        </div>
                        <div className="Reservation-Group Input-Last">
                            <label htmlFor="seats">
                                { t('seats') }
                                *
                            </label>
                            <input className="Input-Dark" id="seats" name="seats" type="text" />
                        </div>
                        <div className="Reservation-Box-Submit">
                            <button className="Button Button-Reservation Button-Light">
                                { t('submit') }
                            </button>
                        </div>
                        <button onClick={ onClose } className="Button Button-Close Button-Light">
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
