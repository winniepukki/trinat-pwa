/**
 * SIA Trinat restaurant project
 * Copyright © winniepukki. All rights reserved.
 *
 * @license MIT
 */

import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth';

import firebase, { app } from '@util/Firebase/firebase';

import AccountType from '@type/Account';

import Auth from './Auth.component';

import {
    subscribeAccount,
    unsubscribeAccount
} from '@store/Account/Account.action';

import verifyAdminQuery from '@query/VerifyAdmin.query';

export const mapStateToProps = (state) => ({
    account: state.AccountReducer.account
});

export const mapDispatchToProps = (dispatch) => ({
    subscribeAccount: (account) => dispatch(subscribeAccount(account)),
    unsubscribeAccount: () => dispatch(unsubscribeAccount())
});

export class AuthContainer extends React.Component {
    static propTypes = {
        account: AccountType.isRequired,
        subscribeAccount: PropTypes.func.isRequired,
        unsubscribeAccount: PropTypes.func.isRequired
    };

    containerFunctions = {
        handleAuthState: this.handleAuthState.bind(this)
    }

    componentDidMount() {
        const auth = getAuth(app);

        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {
                    displayName: name,
                    email = ''
                } = user;

                verifyAdminQuery(email)
                    .then((result) => {
                        const {
                            data: {
                                verifyAdmin: {
                                    success: admin = false
                                } = {}
                            } = {}
                        } = result;

                        const { subscribeAccount } = this.props;

                        /* Subscribe the account to Redux */
                        subscribeAccount({ email, name, admin });
                    });
            }
        });
    }

    containerProps() {
        const {
            account: {
                email
            } = {}
        } = this.props;

        return {
            email
        };
    }

    handleAuthState() {
        const auth = getAuth(app);
        const {
            account: {
                email
            } = {}
        } = this.props;

        if (email) {
            signOut(auth)
                .then(() => {
                    const { unsubscribeAccount } = this.props;
                    unsubscribeAccount();
                });

            return;
        }

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
                    verifyAdminQuery(email)
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
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
