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
        t: PropTypes.func.isRequired,
        contentKey: PropTypes.string.isRequired,
        descriptionKey: PropTypes.string.isRequired,
        authorKey: PropTypes.string.isRequired
    }

    render() {
        const {
            t,
            contentKey = '',
            descriptionKey = '',
            authorKey = ''
        } = this.props;

        return (
            <blockquote
              className="Blockquote"
            >
                <div className="Blockquote-Content">
                    { t(contentKey) }
                </div>
                <div className="Blockquote-Description">
                    { t(descriptionKey) }
                </div>
                <div className="Blockquote-Author">
                    { t(authorKey) }
                </div>
            </blockquote>
        );
    }
}

export default withTranslation()(Blockquote);
