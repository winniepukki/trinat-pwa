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
        t: PropTypes.func.isRequired,
        open: PropTypes.bool.isRequired,
        handleOpenState: PropTypes.func.isRequired,
        changeLanguage: PropTypes.func.isRequired
    }

    render() {
        const {
            t,
            open = false,
            handleOpenState,
            changeLanguage
        } = this.props;

        if (!open) {
            return null;
        }

        return (
            <div className="Language">
                <button
                  data-language="lv"
                  onClick={ changeLanguage }
                  className="Button Button-Language-Option"
                  aria-label={ t('aria.lang-switch-lv') }
                >
                  Latviski
                </button>
                <button
                  data-language="ru"
                  onClick={ changeLanguage }
                  className="Button Button-Language-Option"
                  aria-label={ t('aria.lang-switch-ru') }
                >
                  По-русски
                </button>
                <button
                  data-language="en"
                  onClick={ changeLanguage }
                  className="Button Button-Language-Option"
                  aria-label={ t('aria.lang-switch-en') }
                >
                    English
                </button>
                <button
                  onClick={ handleOpenState }
                  className="Button Button-Close Text-Dark"
                  aria-label={ t('aria.lang-switch-close') }
                >
                    <i className="far fa-times-circle" />
                </button>
            </div>
        );
    }
}

export default withTranslation()(Language);
