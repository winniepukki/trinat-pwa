/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/

import PropTypes from 'prop-types';
import React from 'react';
import { withTranslation } from 'react-i18next';

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
            <span
              className="Auth"
              onClick={ handleSignIn }
            >
                { t('auth') }
            </span>
        );
    }
}

export default withTranslation()(Auth);
