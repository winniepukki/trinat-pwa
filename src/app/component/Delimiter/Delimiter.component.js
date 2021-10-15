/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';

import {
    DEFAULT_POSITION,
    SECONDARY_POSITION
} from './Delimiter.config';

import './Delimiter.style.scss';

export class Delimiter extends React.Component {
    static propTypes = {
        headline: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        positionDefault: PropTypes.bool
    }

    static defaultProps = {
        positionDefault: true
    }

    getAccuratePosition() {
        const { positionDefault } = this.props;

        if (positionDefault) {
            return DEFAULT_POSITION;
        }

        return SECONDARY_POSITION;
    }

    render() {
        const {
            headline = '',
            subtitle = ''
        } = this.props;

        const accuratePosition = this.getAccuratePosition();

        return (
            <section
              className="Delimiter"
            >
                <div className="Delimiter-Content">
                    <h2
                      className="Delimiter-Title"
                    >
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
                  alt=""
                />
                <img
                  className="Delimiter-Image"
                  src="/assets/img/section/section-delimiter-1.jpg"
                  alt=""
                />
            </section>
        );
    }
}

export default Delimiter;
