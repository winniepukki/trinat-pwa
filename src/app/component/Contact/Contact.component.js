/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import { ContactType } from '@type/Contact';

import './Contact.style.scss';

export class Contact extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        handleChange: PropTypes.func.isRequired,
        handleSubmit: PropTypes.func.isRequired,
        message: PropTypes.string.isRequired,
        values: ContactType.isRequired
    }

    render() {
        const {
            t,
            values: {
                name = '',
                email = '',
                review = ''
            } = {},
            message = '',
            handleChange,
            handleSubmit
        } = this.props;

        return (
            <section
              className="Contact"
            >
                <p>
                    { t(message) }
                </p>
                <label htmlFor="name">
                    { t('name') }
                    *
                </label>
                <input
                  name="name"
                  type="text"
                  className="Contact-Input"
                  value={ name }
                  onChange={ handleChange }
                />

                <label htmlFor="email">
                    { t('email') }
                    *
                </label>
                <input
                  name="email"
                  type="email"
                  className="Contact-Input"
                  value={ email }
                  onChange={ handleChange }
                />

                <label htmlFor="email">
                    { t('review') }
                    *
                </label>
                <input
                  name="review"
                  type="text"
                  className="Contact-Input"
                  value={ review }
                  onChange={ handleChange }
                />

                <button
                  className="Button Button-Reservation Button-Filled"
                  onClick={ handleSubmit }
                  disabled={ !name.length || !email.length || !review.length }
                  aria-label={ t('aria.submit-contact') }
                >
                    { t('submit') }
                </button>
            </section>
        );
    }
}

export default withTranslation()(Contact);
