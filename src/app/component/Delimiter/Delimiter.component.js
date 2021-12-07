/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import {
    DEFAULT_POSITION,
    SECONDARY_POSITION
} from './Delimiter.config';

import './Delimiter.style.scss';

export class Delimiter extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        headline: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        positionDefault: PropTypes.bool,
        imgIndex: PropTypes.number
    }

    static defaultProps = {
        positionDefault: true,
        imgIndex: 1
    }

    render() {
        const {
            t,
            headline = '',
            subtitle = '',
            imgIndex = 1,
            positionDefault = true
        } = this.props;

        const accuratePosition = positionDefault
            ? DEFAULT_POSITION
            : SECONDARY_POSITION;

        return (
            <section
              className="Delimiter"
            >
                <div className="Delimiter-Content">
                    <h2 className="Delimiter-Title">
                        <p className="Subtitle">
                            { subtitle }
                        </p>
                        <p className="Headline">
                            <strong>{ headline }</strong>
                        </p>
                    </h2>
                </div>
                <img
                  className={ `Elementor Elementor-${accuratePosition}` }
                  src="/assets/img/icons/elementor.svg"
                  alt={ t('aria.section-end-bound') }
                />
                <img
                  className="Delimiter-Image"
                  src={ `/assets/img/section/section-delimiter-${imgIndex}.webp` }
                  alt={ t('aria.section-delim-bg') }
                />
            </section>
        );
    }
}

export default withTranslation()(Delimiter);
