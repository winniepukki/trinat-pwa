/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './Footer.style.scss';

import ScrollComponent from '@component/Scroll/Scroll.component';
import GoogleLogIn from '@component/GoogleLogIn/GoogleLogIn.component';

class Footer extends React.Component {
  static propTypes = {
      t: PropTypes.func.isRequired,
      lang: PropTypes.string.isRequired
  };

  constructor(props) {
      super(props);
      this.renderPaymentMethods = this.renderPaymentMethods.bind(this);
      this.renderFooter = this.renderFooter.bind(this);
      this.renderFooterNotice = this.renderFooterNotice.bind(this);
  }

  renderPaymentMethods() {
      return (
          <div className="payment-methods custom-grid-4-fixed">
            <img src="assets/img/social/apple.svg" alt="Apple pay icon" />
            <img src="assets/img/social/visa.svg" alt="Visa icon" />
            <img src="assets/img/social/mastercard.svg" alt="Mastercard icon" />
            <img src="assets/img/social/americanexpress.svg" alt="AmericanExpress icon" />
          </div>
      );
  }

  renderFooter() {
      const { t } = this.props;
      return (
          <div className="Footer">
            <ScrollComponent showBelow={ 250 } />
            <div className="container">
              <div className="row">
                <div className="col-sm-3">
                  <h5>
                    <p>{ t('trinat.title') }</p>
                    <p>{ t('trinat.type') }</p>
                  </h5>
                  <p className="simple-text">{ t('footer-text') }</p>
                  { this.renderPaymentMethods() }
                </div>
                <div className="col-sm-3">
                  <h6>{ t('recent-posts') }</h6>
                </div>
                <div className="col-sm-3">
                  <h6>{ t('view-gallery') }</h6>
                </div>
                <div className="col-sm-3">
                  <h6>{ t('footer-contact-info') }</h6>
                  <p className="simple-text">
                    <i className="fas fa-map-marker-alt" />
                    <span>{ t('address.line') }</span>
                  </p>
                  <p className="simple-text">
                    <i className="fas fa-phone-alt" />
                    <a
                      href={ `tel:${t('address.phone')}` }
                    >
                      { t('address.phone') }
                    </a>
                  </p>
                  <p className="simple-text">
                    <i className="fas fa-at" />
                    <a
                      href={ `mailto:${t('address.email')}` }
                    >
                      { t('address.email') }
                    </a>
                  </p>
                  <p className="simple-text">
                    <i className="fas fa-globe" />
                    <span>{ t('address.web') }</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
      );
  }

  renderFooterNotice() {
      const {
          t,
          lang: currentLanguage = ''
      } = this.props;

      return (
          <div className="Footer-Notice">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-sm-6 custom-flexbox custom-align-ic">
                  <a href="https://twitter.com/winniepukki" aria-label="This website developers' copyright notice">
                    <img
                      src="assets/img/social/winniepukki.svg"
                      alt=""
                      className="copyright"
                    />
                  </a>
                  <span className="footer-notice-text">{ t('copyright') }</span>
                </div>
                <div className="col-sm-6">
                  <ul className="Footer-Links custom-justify-spe">
                      <li className="footer-notice-text">
                          <a
                            href="#"
                            aria-label="Footer link to about us page"
                          >
                              { t('footer-menu.about') }
                          </a>
                      </li>
                      <li className="footer-notice-text">
                          <a
                            href="#"
                            aria-label="Footer link to careers page"
                          >
                              { t('footer-menu.careers') }
                          </a>
                      </li>
                      <li className="footer-notice-text">
                          <a
                            href="#"
                            aria-label="Footer link to the delivery page"
                          >
                              { t('footer-menu.delivery') }
                          </a>
                      </li>
                      <GoogleLogIn lang={ currentLanguage } />
                  </ul>
                </div>
              </div>
            </div>
          </div>
      );
  }

  render() {
      return (
          <div>
            { this.renderFooter() }
            { this.renderFooterNotice() }
          </div>
      );
  }
}

export default withTranslation()(Footer);
