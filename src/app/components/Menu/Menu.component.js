/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Reservation from '@components/Reservation/Reservation.component';
import { DIVIDER } from '@components/Header/Header.config';

import './Menu.style.scss';

class Menu extends React.Component {
  static propTypes = {
      t: PropTypes.func.isRequired
  };

  constructor(props) {
      super(props);
      this.state = {
          visible: false,
          menu: true
      };
      this.handleReservation = this.handleReservation.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
      window.addEventListener('scroll', this.handleScroll);
  }

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

  handleReservation() {
      const { visible } = this.state;
      this.setState({
          visible: !visible
      });
  }

  renderMenuItems() {
      const { t } = this.props;
      return (
          <ul className="nav custom-flexbox custom-justify-spa custom-align-ic">
            <li><a href="#" aria-label="Header story link">{ t('menu.story') }</a></li>
            <li><a href="#" aria-label="Header meny link">{ t('menu.menu') }</a></li>
            <li>
                <a href="#" aria-label="Header starters link">
                    { t('menu.starters') }
                </a>
            </li>
            <li>
                <a href="#" aria-label="Header contact link">
                    { t('menu.contact') }
                </a>
            </li>
            <li>
                <div className="reservation">
                  <a
                    className="reservation-button"
                    onClick={ this.handleReservation }
                    aria-label="Table reservation button"
                  >
                    { t('reservation') }
                  </a>
                </div>
            </li>
          </ul>
      );
  }

  render() {
      const { t } = this.props;
      const { visible, menu } = this.state;

      return (
          <div>
            { visible ? <Reservation handler={ this.handleReservation } /> : '' }
            <div className={ menu ? 'menu' : 'menu test-menu' }>
              <div className="container">
                <div className="row justify-content-center align-items-center">
                  <div className="col-6 col-sm-4">
                    <a href="/" className="homepage-uri" aria-label="Go home button">
                      <h5>
                        <p>{ t('trinat.title') }</p>
                        <p>
                          { t('trinat.type') }
                        </p>
                      </h5>
                    </a>
                  </div>
                  <div className="col-6 col-sm-8">
                    { this.renderMenuItems() }
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
  }
}

export default withTranslation()(Menu);
