/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

import './Auth.style.scss';

export class Auth extends React.Component {
    static propTypes = {
        t: PropTypes.func.isRequired,
        handleSignIn: PropTypes.func.isRequired
    }

    render() {
        const {
            t,
            handleSignIn
        } = this.props;

        return (
            <button
              className="Auth"
              onClick={ handleSignIn }
              aria-label={ t('aria.auth-attempt') }
            >
                { t('auth') }
            </button>
        );
    }
}

export default withTranslation()(Auth);
