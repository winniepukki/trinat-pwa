/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import './forehead.style.scss';

import lv from '../../../public/assets/images/icons/latvia.svg';
import ru from '../../../public/assets/images/icons/russia.svg';

class Forehead extends Component {
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

  handleScroll() {
      const currentScrollPos = window.pageYOffset;
      const heroFrame = document.getElementById('hero').offsetHeight / 2;
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
          i18n: { language },
          parentCallback
      } = this.props;

      if (language === 'lv') {
          parentCallback('ru');
      } else {
          parentCallback('lv');
      }
  }

  renderLanguageSwitcher() {
      const { i18n: { language } } = this.props;

      return (
          <a onClick={ this.handleLanguage }>
            { language === 'lv'
                ? (
                  <span>
                    <img
                      src={ ru }
                      alt="Русский язык"
                      className="language-switcher"
                    />
                  </span>
                )
                : (
                  <span>
                    <img
                      src={ lv }
                      alt="Latviešu valoda"
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
          <div className={ menu ? 'forehead' : 'hidden' }>
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col forehead-item">
                  <span className="forehead-venue-address">
                    <i className="fas fa-map-marker-alt" />
                    { ' ' }
                    <a href="https://www.waze.com/en/live-map/directions/latvia/riga/trinat?place=ChIJuR9jcTbF7kYREaS40W3ryts">{ t('address.line') }</a>
                  </span>
                  <span>
                    <i className="fas fa-phone-alt" />
                    <a href="tel:">{ t('address.phone') }</a>
                  </span>
                </div>
                <div className="col forehead-item custom-tar">
                  <a
                    href="#"
                    className="forehead-social-network"
                  >
                      <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="forehead-social-network"
                  >
                      <i className="fab fa-instagram" />
                  </a>
                  { this.renderLanguageSwitcher() }
                </div>
              </div>
            </div>
          </div>
      );
  }
}

export default withTranslation()(Forehead);
