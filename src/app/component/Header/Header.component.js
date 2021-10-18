/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation, getI18n } from 'react-i18next';

import Language from '@component/Language';

import './Header.style.scss';

export class Header extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        handleOpenState: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired
    }

    render() {
        const {
            t,
            open,
            handleOpenState
        } = this.props;

        const { language } = getI18n();

        return (
            <section className="Header">
                <div className="container">
                    <div className="row">
                        <div className="Header-Details col-sm-7">
                            <a
                              href="https://www.waze.com/en/live-map/directions/latvia/riga/trinat?place=ChIJuR9jcTbF7kYREaS40W3ryts"
                              className="Header-Details-Link"
                            >
                                <i className="fas fa-map-marker-alt" />
                                <span
                                  className="Header-Details-Text"
                                >
                                    { t('address.line') }
                                </span>
                            </a>
                            <a
                              href={ `tel:${ t('address.phone') }` }
                              className="Header-Details-Link"
                            >
                                <i className="fas fa-phone-alt" />
                                <span
                                  className="Header-Details-Text"
                                >
                                    { t('address.phone') }
                                </span>
                            </a>
                        </div>
                        <div className="Header-Social col-sm-5">
                            <a
                              className="Header-Social-Link"
                              href="https://www.facebook.com/3nataly"
                              aria-label="External link to Facebook page"
                            >
                                <i className="fab fa-facebook" />
                            </a>
                            <a
                              className="Header-Social-Link"
                              href="https://www.instagram.com/siatrinat/"
                              aria-label="External link to Instagram page"
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            <button
                              className="Button Button-Language-Switcher Button-Light"
                              onClick={ handleOpenState }
                              aria-label="Open language switcher"
                            >
                                <i className="fas fa-chevron-down" />
                                <span className="Current-Language">{ language }</span>
                            </button>
                            <Language handleOpenState={ handleOpenState } open={ open } />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Header);
