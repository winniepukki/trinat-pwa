/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';
import leaf from './leaf.png';

import './Promotion.style.scss';

export class Promotion extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    };

    render() {
        const { t } = this.props;

        return (
            <div
              className="Promotion"
            >
                <div className="Promotion-Container">
                    <div className="Promotion-Content">
                        <h2>
                            <p className="title-first">{ t('promotion.title') }</p>
                            <p className="title-caption">
                                <strong>{ t('promotion.subtitle') }</strong>
                            </p>
                        </h2>
                        <img className="Promotion-Linebreak" src={ leaf } alt="" />
                        <p className="Promotion-Description">{ t('promotion.text') }</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default withTranslation()(Promotion);
