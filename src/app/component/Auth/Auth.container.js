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

import verifyAdmin from '@query/VerifyAdmin.query';

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

        /* Authenticate through Firebase */
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
                    /* Verify if the user is admin */
                    verifyAdmin(email)
                        .then((result) => {
                            const {
                                data: {
                                    verifyAdmin: {
                                        success: admin = false
                                    } = {}
                                } = {}
                            } = result;

                            /* Subscribe the account to Redux */
                            subscribeAccount({ email, name, admin });
                        });
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
