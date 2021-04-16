/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './contact.style.scss';
import firebase from '../../util/firebase';

class Contact extends React.Component {
  static propTypes = {
      t: PropTypes.func.isRequired
  }

  constructor(props) {
      super(props);

      this.state = {
          values: {
              fullName: '',
              email: '',
              review: ''
          }
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.resetAllFields = this.resetAllFields.bind(this);
      this.renderContactForm = this.renderContactForm.bind(this);
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
      const starterRef = firebase.database().ref('Reviews');
      const {
          values: {
              fullName,
              email,
              review
          }
      } = this.state;

      const preparedReview = {
          fullName,
          email,
          review
      };

      starterRef.push(preparedReview);
      this.resetAllFields();
  }

  renderContactForm() {
      const {
          t
      } = this.props;

      const {
          fullName,
          email,
          review
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
        >
          { t('send') }
        </button>
      </form>
      );
  }

  render() {
      const { t } = this.props;
      return (
          <div className="container">
            <div className="parallax-section parallax-section-contact">
              <div className="inner-container inner-container-contact">
                <h3>
                  <p className="parallax-title">{ t('contact.title') }</p>
                </h3>
                <p className="simple-text">
                  { `${t('address.phone')} - ${t('address.email')}` }
                </p>
                <p className="simple-text">{ t('contact.text') }</p>
                { this.renderContactForm() }
              </div>
            </div>
          </div>
      );
  }
}

export default withTranslation()(Contact);
