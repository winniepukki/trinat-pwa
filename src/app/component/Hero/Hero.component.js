/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

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
                                    { t('hero.text') }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <img
                  className="Elementor Elementor-Bottom"
                  src="/assets/img/icons/elementor.svg"
                  alt="Hero section end boundary"
                />
                <img
                  className="Hero-Image"
                  src="/assets/img/section/hero.jpg"
                  alt="Hero section background"
                />
            </section>
        );
    }
}

export default withTranslation()(Hero);
