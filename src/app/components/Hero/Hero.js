/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';

import './hero.style.scss';
import { withTranslation } from 'react-i18next';
import logo from '../../../public/assets/images/hero.jpg';
import Menu from '../Menu/Menu';

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.renderWelcomeMessage = this.renderWelcomeMessage.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.renderHeroBackground = this.renderHeroBackground.bind(this);
  }

  renderWelcomeMessage() {
    const { t } = this.props;
    return (
      <div className="caption-title">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2 className="parallax-item">
                <p className="title-first">Welcome to</p>
                <p className="title-caption">
                  {t('trinat.title')}
                  <strong>{t('trinat.type')}</strong>
                </p>
                <span className="sub-title">{t('hero.title')}</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderMenu() {
    return <Menu />;
  }

  renderHeroBackground() {
    return (
      <img src={logo} alt="Home hero wallpaper" className="hero-wallpaper" />
    );
  }

  render() {
    return (
      <div className="hero" id="hero">
        { this.renderWelcomeMessage() }
        { this.renderMenu() }
        { this.renderHeroBackground() }
      </div>
    );
  }
}

Hero.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation()(Hero);
