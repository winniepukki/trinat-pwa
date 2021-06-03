/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';
import firebase from '@util/firebase';
import { connect } from 'react-redux';
import {
    subscribeAccount,
    unsubscribeAccount
} from '../../store/index';

export const mapDispatchToProps = (dispatch) => ({
    subscribeAccount: (account) => dispatch(subscribeAccount(account)),
    unsubscribeAccount: () => dispatch(unsubscribeAccount())
});

class GoogleLogIn extends React.Component {
    static propTypes = {
        subscribeAccount: PropTypes.func.isRequired,
        unsubscribeAccount: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignOut() {
        firebase.auth().signOut()
            .then(() => {
                const { unsubscribeAccount } = this.props;
                unsubscribeAccount();
            })
            .catch(() => {});
    }

    handleSignIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { subscribeAccount } = this.props;
                const {
                    user: {
                        email = ''
                    } = {}
                } = result;

                if (email.length) {
                    subscribeAccount(email);
                }
            })
            .catch(() => {});
    }

    render() {
        return (
          <div>
            <button
              type="button"
              className="button-auth"
              onClick={ this.handleSignIn }
            >
                <i className="fas fa-user-lock" />
            </button>
            <button
              type="button"
              onClick={ this.handleSignOut }
              className="button-auth"
            >
                <i className="fas fa-sign-out-alt" />
            </button>
          </div>
        );
    }
}

export default
connect(mapDispatchToProps)(GoogleLogIn);
