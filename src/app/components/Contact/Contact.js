import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './contact.style.scss';

class Contact extends React.Component {
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
    this.renderContactForm = this.renderContactForm.bind(this);
  }

  handleChange(e) {
    const { values } = this.state;
    this.setState({
      values: { ...values, [e.target.name]: e.target.value }
    });
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
          value={fullName}
          name="fullName"
          onChange={this.handleChange}
          placeholder={t('contact-form.fullName')}
        />
        <input
          type="email"
          className="contact-control"
          value={email}
          name="email"
          onChange={this.handleChange}
          placeholder={t('contact-form.email')}
        />
        <input
          type="text"
          className="contact-control"
          value={review}
          name="review"
          onChange={this.handleChange}
          placeholder={t('contact-form.review')}
        />
        <button type="button" className="button-default button-dark">
          {t('send')}
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
              <p className="parallax-title">{t('contact.title')}</p>
            </h3>
            <p className="simple-text">
              {`${t('address.phone')} - ${t('address.email')}`}
            </p>
            <p className="simple-text">{t('contact.text')}</p>
            { this.renderContactForm() }
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Contact);
