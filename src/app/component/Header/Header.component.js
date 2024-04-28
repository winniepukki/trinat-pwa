/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation, getI18n } from 'react-i18next';

import RefType from '@type/Ref';

import Language from '@component/Language';

import './Header.style.scss';
import useClientSideDevice from '@util/Script/useClientSideDevice';

export class Header extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        handleOpenState: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        headerDetails: RefType.isRequired
    }

    render() {
        const {
            t,
            open = false,
            handleOpenState,
            headerDetails
        } = this.props;

        const { language = '' } = getI18n();
        const { isAppleDevice } = useClientSideDevice();

        return (
            <header className="Header">
                <div className="container">
                    <div className="row">
                        <div
                          className="Header-Details col-sm-7"
                          ref={ headerDetails }
                        >
                            <a
                              href="https://www.waze.com/en/live-map/directions/latvia/riga/trinat?place=ChIJuR9jcTbF7kYREaS40W3ryts"
                              className="Header-Details-Link"
                              aria-label={ t('aria.visit-us') }
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
                              aria-label={ t('aria.call-us') }
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
                              aria-label={ t('aria.link-fb') }
                            >
                                <i className="fab fa-facebook" />
                            </a>
                            <a
                              className="Header-Social-Link"
                              href="https://www.instagram.com/siatrinat/"
                              aria-label={ t('aria.link-ig') }
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            { isAppleDevice ? (
                                <a
                                  className="Header-Social-Link"
                                  href="https://trinat.app/download"
                                  aria-label={ t('aria.link-download-appStore') }
                                >
                                    <i className="fab fa-apple" />
                                </a>
                            ) : (
                                <a
                                  className="Header-Social-Link"
                                  href="https://trinat.app/download"
                                  aria-label={ t('aria.link-download-android') }
                                >
                                    <i className="fab fa-android" />
                                </a>
                            ) }
                            <button
                              className="Button Button-Language-Switcher Button-Light"
                              onClick={ handleOpenState }
                              aria-label={ t('aria.lang-switch-open') }
                            >
                                <i className="fas fa-chevron-down" />
                                <span className="Current-Language">{ language }</span>
                            </button>
                            <Language handleOpenState={ handleOpenState } open={ open } />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default withTranslation()(Header);
