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
        lang: PropTypes.string.isRequired
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
                const adminAccount = '';
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
                const {
                    user: {
                        email = ''
                    } = {}
                } = result;

                console.log(email);
            })
            .catch(() => {});
    }

    render() {
        const { isLoggedIn } = this.state;
        const { lang: currentLanguage } = this.props;
        return (
          <div>
            { isLoggedIn ? <Form lang={ currentLanguage } /> : '' }
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
