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
        email: PropTypes.string.isRequired,
        handleAuthState: PropTypes.func.isRequired
    }

    render() {
        const {
            t,
            email,
            handleAuthState
        } = this.props;

        return (
            <button
              className="Button Auth"
              onClick={ handleAuthState }
              aria-label={ t('aria.auth-attempt') }
            >
                { t(email ? 'signOut' : 'auth') }
            </button>
        );
    }
}

export default withTranslation()(Auth);
