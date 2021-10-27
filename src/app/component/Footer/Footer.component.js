/* eslint-disable max-len */
/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import Auth from '@component/Auth';

import CURRENT_VERSION from './Footer.config';

import './Footer.style.scss';

export class Footer extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    }

    render() {
        const { t } = this.props;
        const year = new Date().getFullYear();

        return (
            <section className="Footer">
                <img
                  className="Elementor Elementor-Top"
                  src="/assets/img/icons/elementor.svg"
                  alt="Footer section start boundary"
                />
                <div className="Footer-Block">
                    <div className="container">
                        <div className="row">
                            <div className="Footer-Block-Item col-sm-3">
                                <img
                                  className="Logo"
                                  src="/assets/img/logo/logo.png"
                                  alt={ t('aria.logo') }
                                />
                                <p className="Simple-Text">
                                    { t('footer-text', { version: CURRENT_VERSION }) }
                                </p>
                                <div className="Footer-Block-Item-Payment">
                                    <img
                                      className="Payment-Image"
                                      src="/assets/img/social/apple.svg"
                                      alt={ t('aria.pay-apple') }
                                    />
                                    <img
                                      className="Payment-Image"
                                      src="/assets/img/social/visa.svg"
                                      alt={ t('aria.pay-visa') }
                                    />
                                    <img
                                      className="Payment-Image"
                                      src="/assets/img/social/mastercard.svg"
                                      alt={ t('aria.pay-mc') }
                                    />
                                    <img
                                      className="Payment-Image"
                                      src="/assets/img/social/americanexpress.svg"
                                      alt={ t('aria.pay-ax') }
                                    />
                                </div>
                            </div>
                            <div className="Footer-Block-Item col-xs-6 col-sm-2">
                                <h3>{ t('overview') }</h3>
                                <ul className="List List-Light">
                                    <li className="List-Light-Item Custom-TTC">
                                        <a
                                          href="https://www.facebook.com/3nataly/reviews/"
                                          aria-label={ t('aria.link-reviews') }
                                        >
                                            { t('reviews') }
                                        </a>
                                    </li>
                                    <li className="List-Light-Item Custom-TTC">
                                        <a
                                          href="https://www.facebook.com/3nataly/jobs"
                                          aria-label={ t('aria.link-careers') }
                                        >
                                            { t('careers') }
                                        </a>
                                    </li>
                                    <li className="List-Light-Item Custom-TTC">
                                        <a
                                          href="https://github.com/winniepukki"
                                          aria-label={ t('aria.link-dev') }
                                        >
                                            { t('developer') }
                                        </a>
                                    </li>
                                    <li className="List-Light-Item Custom-TTC">
                                        <a
                                          href="https://www.instagram.com/siatrinat/"
                                          aria-label={ t('aria.link-gallery') }
                                        >
                                            { t('gallery') }
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="Footer-Block-Item col-xs-6 col-sm-2">
                                <h3>{ t('resources') }</h3>
                                <ul className="List List-Light">
                                    <li className="List-Light-Item Custom-TTC">
                                        <a
                                          href="https://covid19.gov.lv/"
                                          aria-label={ t('aria.link-covid') }
                                        >
                                            { t('covid') }
                                        </a>
                                    </li>
                                    <li className="List-Light-Item Custom-TTC">
                                        <a
                                          href="https://covid19sertifikats.lv/"
                                          aria-label={ t('aria.link-cert') }
                                        >
                                            { t('certificate') }
                                        </a>
                                    </li>
                                    <li className="List-Light-Item Custom-TTC">
                                        <a
                                          href="https://bit.ly/3Bequ7s"
                                          aria-label={ t('aria.link-privacy') }
                                        >
                                            { t('privacy') }
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="Footer-Block-Item col-sm-2">
                                <h3>{ t('contact') }</h3>
                                <ul className="List List-Elementor">
                                    <li className="List-Elementor-Item">
                                        <a
                                          href={ `tel:${ t('address.phone') }` }
                                          className="Footer-Link"
                                          aria-label={ t('aria.call-us') }
                                        >
                                            <span>
                                                <i className="fas fa-phone-alt" />
                                            </span>
                                            <span className="Elementor-Text">
                                                { t('address.phone') }
                                            </span>
                                        </a>
                                    </li>
                                    <li className="List-Elementor-Item">
                                        <a
                                          href={ `mailto:${ t('address.email') }` }
                                          className="Footer-Link"
                                          aria-label={ t('aria.email-us') }
                                        >
                                            <span>
                                                <i className="far fa-envelope" />
                                            </span>
                                            <span className="Elementor-Text">
                                                { t('address.email') }
                                            </span>
                                        </a>
                                    </li>
                                    <li className="List-Elementor-Item">
                                        <a
                                          href="#"
                                          className="Footer-Link"
                                          aria-label={ t('aria.webpage') }
                                        >
                                            <span>
                                                <i className="fas fa-link" />
                                            </span>
                                            <span className="Elementor-Text">
                                                { t('address.web') }
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="Footer-Block-Item col-sm-3">
                                <h3>{ t('location') }</h3>
                                <ul className="List List-Elementor">
                                    <li className="List-Elementor-Item">
                                        <a
                                          href="https://goo.gl/maps/2erjPnp65Ksf3DVy5"
                                          className="Footer-Link"
                                          aria-label={ t('aria.visit-us') }
                                        >
                                            <span>
                                                <i className="fas fa-map-marker-alt" />
                                            </span>
                                            <span className="Elementor-Text">
                                                { t('address.line-full') }
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Footer-Notice">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <span className="Copyright-Notice">
                                    { t('copyright', { year }) }
                                </span>
                            </div>
                            <div className="col-sm-6">
                                <ul
                                  className="List List-Footer"
                                >
                                  <li className="List-Footer-Item">
                                      <Auth />
                                  </li>
                                  <li className="List-Footer-Item">
                                      <a
                                        href="https://bit.ly/3Bequ7s"
                                        aria-label={ t('aria.link-privacy') }
                                      >
                                          { t('privacy') }
                                      </a>
                                  </li>
                                  <li className="List-Footer-Item">
                                      <a
                                        href="https://www.facebook.com/3nataly/jobs"
                                        aria-label={ t('aria.link-careers') }
                                      >
                                          { t('careers') }
                                      </a>
                                  </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withTranslation()(Footer);
