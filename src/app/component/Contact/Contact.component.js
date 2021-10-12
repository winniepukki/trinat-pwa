/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React, { createRef } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import {
    MIN_LENGTH,
    MIN_SHORT_LENGTH,
    HIDE_NOTIFICATION_TIMEOUT
} from '@component/Contact/Contact.config';

import './Contact.style.scss';
import createReview from '@query/Review.query';

class Contact extends React.Component {
  static propTypes = {
      t: PropTypes.func.isRequired
  }

  constructor(props) {
      super(props);

      this.state = {
          message: '',
          values: {
              fullName: '',
              email: '',
              review: ''
          }
      };

      this.notificationRef = createRef();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.resetAllFields = this.resetAllFields.bind(this);
      this.renderContactForm = this.renderContactForm.bind(this);
      this.closeContactNotification = this.closeContactNotification.bind(this);
  }

  resetAllFields() {
      this.setState({
          values: {
              fullName: '',
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
              fullName = '',
              email = '',
              review = ''
          }
      } = this.state;
      const { t } = this.props;

      /**
       * Ensure values are not empty
       */
      if (!fullName.length
          && !email.length
          && !review.length) {
          this.notificationRef.current.className = 'contact-notification error';
          this.setState({
              message: t('notification.form-error-empty')
          });

          return;
      }

      /**
       * Ensure values are over the
       * pre-defined min application length
       */
      if (fullName.length < MIN_SHORT_LENGTH
          || email.length < MIN_LENGTH
          || review.length < MIN_LENGTH) {
          this.notificationRef.current.className = 'contact-notification error';
          this.setState({
              message: t('notification.form-error')
          });

          return;
      }

      createReview(fullName, email, review)
          .then((response) => {
              const { errors = [] } = response;

              if (errors.length) {
                  const [{ message }] = errors;

                  this.notificationRef.current.className = 'contact-notification error';
                  this.setState({
                      message: t(message)
                  });

                  return;
              }

              this.setState({
                  message: t('notification.form-success')
              });

              /**
               * Prompt a success notification
               * and push the review to the DB amongst
               * resetting fields and hiding the message
               */
              this.notificationRef.current.className = 'contact-notification success';
              this.resetAllFields();

              setTimeout(() => {
                  this.notificationRef.current.className = 'hidden';
              }, HIDE_NOTIFICATION_TIMEOUT);
          });
  }

  renderContactForm() {
      const {
          t
      } = this.props;

      const {
          values: {
              fullName = '',
              email = '',
              review = ''
          } = {}
      } = this.state;

      return (
      <form autoComplete="off">
        <input
          type="text"
          className="contact-control"
          value={ fullName }
          name="fullName"
          onChange={ this.handleChange }
          placeholder={ t('contact-form.fullName') }
        />
        <input
          type="email"
          className="contact-control"
          value={ email }
          name="email"
          onChange={ this.handleChange }
          placeholder={ t('contact-form.email') }
        />
        <input
          type="text"
          className="contact-control"
          value={ review }
          name="review"
          onChange={ this.handleChange }
          placeholder={ t('contact-form.review') }
        />
        <button
          type="button"
          className="button-default button-dark"
          onClick={ this.handleSubmit }
          aria-label="Submit contact form"
        >
          { t('send') }
        </button>
      </form>
      );
  }

  /**
   * Allow users to personally hide
   * the notification message
   */
  closeContactNotification() {
      this.notificationRef.current.className = 'hidden';
  }

  render() {
      const { t } = this.props;
      const { message = '' } = this.state;
      return (
          <div className="Contact">
              <div className="container">
                <div className="parallax-section parallax-section-contact">
                  <div className="inner-container inner-container-contact">
                    <h3>
                      <p className="parallax-title">{ t('contact.title') }</p>
                    </h3>
                    <p className="simple-text">
                      <a
                        href={ `tel:${ t('address.phone')} ` }
                        className="business-contacts"
                        aria-label="Business phone"
                      >
                        { t('address.phone') }
                      </a>
                        &nbsp; – &nbsp;
                      <a
                        href={ `mailto:${ t('address.email')} ` }
                        className="business-contacts"
                        aria-label="Business email"
                      >
                        { t('address.email') }
                      </a>
                    </p>
                    <p className="simple-text">{ t('contact.text') }</p>
                    <p
                      className="hidden"
                      ref={ this.notificationRef }
                    >
                        { message }
                        <button
                          className="button-close"
                          onClick={ this.closeContactNotification }
                          aria-label="Close contact form notification"
                        >
                            <i className="far fa-times-circle" />
                        </button>
                    </p>
                    { this.renderContactForm() }
                  </div>
                </div>
              </div>
          </div>
      );
  }
}

export default withTranslation()(Contact);
