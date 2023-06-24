/* eslint-disable max-len,jsx-a11y/label-has-associated-control,no-nested-ternary */
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

import { NOTE_MAX_VALUE } from './Reservation.config';

import ReservationType from '@type/Reservation';

import './Reservation.style.scss';

export class Reservation extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        onClose: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        handleInsideElementClick: PropTypes.func.isRequired,
        message: PropTypes.string.isRequired,
        loading: PropTypes.bool.isRequired,
        status: PropTypes.bool.isRequired,
        values: ReservationType.isRequired
    }

    renderReservationNoteCount() {
        const {
            t,
            values: {
                note = ''
            } = {}
        } = this.props;

        const count = note.length - NOTE_MAX_VALUE;
        const countReverse = NOTE_MAX_VALUE - note.length;

        if (countReverse < 0) {
            return (
              <span className="Reservation-Message-Error">
                  { t('note-error', { count }) }
              </span>
            );
        }

        return (
            <span>
                { t('note-limit', { count: countReverse }) }
            </span>
        );
    }

    render() {
        const {
            t,
            open = false,
            message = '',
            onClose,
            status,
            loading,
            values: {
                name = '',
                surname = '',
                phone = '',
                date = '',
                time = '',
                guests = '1',
                note = ''
            } = {},
            handleChange,
            handleSubmit,
            handleInsideElementClick
        } = this.props;

        if (!open) {
            return null;
        }

        const reservationClass = loading ? 'Pending' : status ? 'Success' : 'Error';

        return ReactDOM.createPortal(
            <section
              className="Reservation"
            >
                <div
                  className="Reservation-Wrapper"
                  onClick={ onClose }
                >
                    <div
                      className="Reservation-Box"
                      onClick={ handleInsideElementClick }
                    >
                        <h2>
                            <p className="Subtitle">
                                { t('table') }
                            </p>
                            <p className="Headline">
                                { t('reservation') }
                            </p>
                        </h2>
                        <p className="Text-Light">{ t('working-hours') }</p>
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
                              autoComplete="off"
                              onChange={ handleChange }
                              className="Reservation-Input"
                              data-private="redact"
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
                              autoComplete="off"
                              onChange={ handleChange }
                              className="Reservation-Input"
                              data-private="redact"
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
                              autoComplete="off"
                              onChange={ handleChange }
                              className="Reservation-Input"
                              data-private="redact"
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
                              className="Reservation-Input"
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
                              className="Reservation-Input"
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
                              className="Reservation-Input Reservation-Select"
                            >
                                <option value="1">{ t('guest', { count: 1 }) }</option>
                                <option value="2">{ t('guest', { count: 2 }) }</option>
                                <option value="3">{ t('guest', { count: 3 }) }</option>
                                <option value="4">{ t('guest', { count: 4 }) }</option>
                                <option value="5">{ t('guest', { count: 5 }) }</option>
                                <option value="100">{ t('guest-over') }</option>
                            </select>
                        </div>
                        <div className="Reservation-Group Reservation-Note">
                            <label htmlFor="note">
                                { t('note') }
                                &nbsp;
                                (
                                { this.renderReservationNoteCount() }
                                )
                            </label>
                            <textarea
                              className="Reservation-Comment"
                              value={ note }
                              onChange={ handleChange }
                              name="note"
                              id="note"
                            />
                        </div>
                        <div className="Reservation-Box-Submit">
                            <p className={ `Reservation-Message-${reservationClass}` }>{ t(message) }</p>

                            <button
                              className="Button Button-Reservation Button-Light"
                              aria-label={ t('aria.submit-reservation') }
                              onClick={ handleSubmit }
                              disabled={ !name.length
                                  || !surname.length
                                  || !phone.length
                                  || !date.length
                                  || !time.length }
                            >
                                { t('submit') }
                            </button>
                        </div>
                        <button
                          onClick={ onClose }
                          className="Button Button-Close-Reservation Button-Light"
                          aria-label={ t('aria.close-reservation') }
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
