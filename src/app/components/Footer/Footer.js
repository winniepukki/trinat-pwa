/* eslint-disable class-methods-use-this */
/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './footer.style.scss';
import creamcamp from '../../../public/assets/images/social/creamcamp.svg';

import apple from '../../../public/assets/images/social/apple.svg';
import visa from '../../../public/assets/images/social/visa.svg';
import masterCard from '../../../public/assets/images/social/mastercard.svg';
import americanExpress from '../../../public/assets/images/social/americanexpress.svg';
import ScrollComponent from '../Scroll/Scroll.component';

class Footer extends React.Component {
  static propTypes = {
      t: PropTypes.func.isRequired
  };

  constructor(props) {
      super(props);
      this.renderPaymentMethods = this.renderPaymentMethods.bind(this);
      this.renderFooter = this.renderFooter.bind(this);
      this.renderFooterNotice = this.renderFooterNotice.bind(this);
      this.renderFooterMenuItems = this.renderFooterMenuItems.bind(this);
  }

  renderPaymentMethods() {
      return (
          <div className="custom-grid-4">
            <img src={ apple } alt="" />
            <img src={ visa } alt="" />
            <img src={ masterCard } alt="" />
            <img src={ americanExpress } alt="" />
          </div>
      );
  }

  renderFooter() {
      const { t } = this.props;
      return (
          <div className="footer">
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
                      href={ `tel:${t('address.email')}` }
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

  renderFooterMenuItems() {
      const { t } = this.props;
      return (
          Object.values(t('footer-menu', { returnObjects: true })).map((item) => (
              <li key={ item } className="footer-notice-text">
                <a href="#">{ item }</a>
              </li>
          ))
      );
  }

  renderFooterNotice() {
      const { t } = this.props;
      return (
          <div className="footer-notice">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div className="col-sm-6 custom-flexbox custom-align-ic">
                  <a href="https://cream.camp">
                    <img src={ creamcamp } alt="" className="copyright" />
                  </a>
                  <span className="footer-notice-text">{ t('copyright') }</span>
                </div>
                <div className="col-sm-6">
                  <ul className="footer-links">
                    { this.renderFooterMenuItems() }
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
