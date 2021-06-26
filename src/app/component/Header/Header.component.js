/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { DIVIDER } from './Header.config';
import {
    LANG_CODE_LV,
    LANG_CODE_RU
} from '@component/Starters/Starters.config';

import './Header.style.scss';

class Header extends Component {
  static propTypes = {
      t: PropTypes.instanceOf(Object).isRequired,
      i18n: PropTypes.instanceOf(Object).isRequired,
      parentCallback: PropTypes.func.isRequired
  };

  constructor(props) {
      super(props);
      this.state = {
          menu: true
      };
      this.handleScroll = this.handleScroll.bind(this);
      this.handleLanguage = this.handleLanguage.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

  /**
   * Show/ hide header upon reaching 50%
   * of the Hero components height
   */
  handleScroll() {
      const currentScrollPos = window.pageYOffset;
      const heroFrame = document.getElementById('hero').offsetHeight / DIVIDER;
      if (currentScrollPos > heroFrame) {
          this.setState({
              menu: false
          });
      } else {
          this.setState({
              menu: true
          });
      }
  }

  handleLanguage() {
      const {
          i18n: {
              language = ''
          } = {},
          parentCallback
      } = this.props;

      /**
       * Change PWA language on the
       * language selection
       */
      if (language === LANG_CODE_LV) {
          parentCallback(LANG_CODE_RU);
      } else {
          parentCallback(LANG_CODE_LV);
      }
  }

  renderLanguageSwitcher() {
      const {
          i18n: {
              language = ''
          } = {}
      } = this.props;

      return (
          <a className="language-button" onClick={ this.handleLanguage }>
            { language === LANG_CODE_LV
                ? (
                  <span>
                    <img
                      src="assets/img/icons/russia.svg"
                      alt="Russian language switcher"
                      className="language-switcher"
                    />
                  </span>
                )
                : (
                  <span>
                    <img
                      src="assets/img/icons/latvia.svg"
                      alt="Latvian language switcher"
                      className="language-switcher"
                    />
                  </span>
                ) }
          </a>
      );
  }

  render() {
      const { menu } = this.state;
      const { t } = this.props;

      return (
          <div className={ menu ? 'Header' : 'hidden' }>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col header-item">
                  <span className="header-venue-address">
                    <i className="fas fa-map-marker-alt" />
                    { ' ' }
                    <a href="https://www.waze.com/en/live-map/directions/latvia/riga/trinat?place=ChIJuR9jcTbF7kYREaS40W3ryts">{ t('address.line') }</a>
                  </span>
                  <span>
                    <i className="fas fa-phone-alt" />
                    <a href="tel:">{ t('address.phone') }</a>
                  </span>
                </div>
                <div className="col header-item custom-tar">
                  <a
                    href="http://bit.ly/3nataly"
                    className="header-social-network"
                    aria-label="Visit us on Facebook button"
                  >
                      <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="https://www.flickr.com/photos/3nataly/"
                    className="header-social-network"
                    aria-label="Visit us on Flickr button"
                  >
                      <i className="fab fa-flickr" />
                  </a>
                  { this.renderLanguageSwitcher() }
                </div>
              </div>
            </div>
          </div>
      );
  }
}

export default withTranslation()(Header);
