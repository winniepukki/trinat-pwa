/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';

import { withTranslation } from 'react-i18next';

import Language from './Language.component';

export class LanguageContainer extends React.Component {
    static propTypes = {
        open: PropTypes.bool.isRequired,
        handleOpenState: PropTypes.func.isRequired,
        i18n: PropTypes.instanceOf(Object).isRequired
    }

    containerFunctions = {
        changeLanguage: this.changeLanguage.bind(this)
    }

    changeLanguage(event) {
        const {
            i18n = {},
            handleOpenState
        } = this.props;

        const {
            target: {
                dataset: {
                    language = ''
                } = {}
            } = {}
        } = event;

        i18n.changeLanguage(language);
        handleOpenState();
    }

    containerProps() {
        const {
            open,
            handleOpenState
        } = this.props;

        return {
            open,
            handleOpenState
        };
    }

    render() {
        return (
          <Language
            { ...this.containerProps() }
            { ...this.containerFunctions }
          />
        );
    }
}

export default withTranslation()(LanguageContainer);
