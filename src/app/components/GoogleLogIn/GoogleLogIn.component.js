/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-param-reassign */
/**
* SIA Trinat restaurant project
* Copyright © winniepukki. All rights reserved.
*
* @license MIT
*/
import React from 'react';
import PropTypes from 'prop-types';
import firebase from '@util/firebase';
import Form from '../Form/Form.component';

class GoogleLogIn extends React.Component {
    static propTypes = {
        adminAccount: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user !== null) {
                const { adminAccount } = this.props;
                if (user.email === adminAccount) {
                    this.setState({
                        isLoggedIn: true
                    });
                }
            }
        });
    }

    handleSignOut() {
        firebase.auth().signOut()
            .then(() => {
                this.setState({
                    isLoggedIn: false
                });
            })
            .catch(() => {});
    }

    handleSignIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const token = result.credential.accessToken;
                const { user } = result;
            })
            .catch(() => {});
    }

    render() {
        const { isLoggedIn } = this.state;
        return (
          <div>
            { isLoggedIn ? <Form /> : '' }
            <button
              type="button"
              onClick={ this.handleSignIn }
            >
                Log in with google
            </button>
            <button type="button" onClick={ this.handleSignOut }>Sign out</button>
          </div>
        );
    }
}

export default GoogleLogIn;
