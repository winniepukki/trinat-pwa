/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';

import { withTranslation } from 'react-i18next';

import './Language.style.scss';

export class Language extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        handleOpenState: PropTypes.func.isRequired,
        i18n: PropTypes.instanceOf(Object).isRequired
    }

    constructor(props) {
        super(props);

        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(event) {
        const {
            i18n = {}
        } = this.props;

        const {
            target: {
                dataset: {
                    language = ''
                } = {}
            } = {}
        } = event;

        i18n.changeLanguage(language);
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
                  data-language="lv"
                  onClick={ this.changeLanguage }
                  className="Language-Button"
                >
                  Latviski
                </button>
                <button
                  data-language="ru"
                  onClick={ this.changeLanguage }
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

export default withTranslation()(Language);
