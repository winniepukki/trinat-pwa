/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';

import './Language.style.scss';

export class Language extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        handleOpenState: PropTypes.func.isRequired
    }

    render() {
        const {
            open = false,
            handleOpenState
        } = this.props;

        if (!open) {
            return null;
        }

        return (
            <div className="Language">
                <button
                  className="Language-Button"
                >
                  Latviski
                </button>
                <button
                  className="Language-Button"
                >
                  По-русски
                </button>
                <button onClick={ handleOpenState } className="Language-Close">
                    <i className="far fa-times-circle" />
                </button>
            </div>
        );
    }
}

export default Language;
