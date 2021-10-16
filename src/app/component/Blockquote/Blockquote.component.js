/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

export class Blockquote extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired
    }

    render() {
        const { t } = this.props;

        return (
            <blockquote
              className="Blockquote"
            >
                <div className="Blockquote-Content">
                    UNTIL I DISCOVERED COOKING I WAS NEVER
                    REALLY INTERESTED IN ANYTHING
                </div>
                <div className="Blockquote-Description">
                    OUR FOUNDER JOHN PHILLIPE
                </div>
                <div className="Blockquote-Author">
                    { t('blockquote.author') }
                </div>
            </blockquote>
        );
    }
}

export default withTranslation()(Blockquote);
