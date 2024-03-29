/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { Trans, withTranslation } from 'react-i18next';

import PHONE from './Hero.config';

import './Hero.style.scss';

export class Hero extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    }

    render() {
        const { t } = this.props;
        return (
            <section
              className="Hero Main-Section"
            >
                <div className="Hero-Caption">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>
                                    <p className="Subtitle">{ t('welcome') }</p>
                                    <p className="Headline">
                                        { t('trinat.title') }
                                        <strong>{ t('trinat.type') }</strong>
                                    </p>
                                </h2>
                                <p className="Hero-Text">
                                    <Trans i18nKey="hero.text">
                                        { t('hero.text') }
                                        <a
                                          href={ `tel:${ t('address.phone') }` }
                                          aria-label={ t('aria.call-us') }
                                        >
                                          { { PHONE } }
                                        </a>
                                    </Trans>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                  className="Elementor Elementor-Bottom"
                  src="/assets/img/icons/elementor.svg"
                  alt={ t('aria.section-end-bound') }
                />
                <img
                  className="Hero-Image"
                  src="/assets/img/section/section-hero.webp"
                  alt={ t('aria.section-bg') }
                />
            </section>
        );
    }
}

export default withTranslation()(Hero);
