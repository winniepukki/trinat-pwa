/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import firebase from '@util/Firebase/firebase';

import Auth from './Auth.component';

import {
    subscribeAccount
} from '@store/Account/Account.action';

export const mapStateToProps = () => ({});

export const mapDispatchToProps = (dispatch) => ({
    subscribeAccount: (account) => dispatch(subscribeAccount(account))
});

export class AuthContainer extends React.Component {
    static propTypes = {
        subscribeAccount: PropTypes.func.isRequired
    };

    containerFunctions = {
        handleSignIn: this.handleSignIn.bind(this)
    }

    handleSignIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { subscribeAccount } = this.props;
                const {
                    user: {
                        email = '',
                        displayName: name = ''
                    } = {}
                } = result;

                if (email.length) {
                    subscribeAccount({ email, name });
                }
            })
            .catch(() => {});
    }

    render() {
        return (
            <Auth
              { ...this.containerFunctions }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
