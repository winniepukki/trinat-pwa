import React from 'react';
import firebase from '../../util/firebase';
import Form from "../Form/Form";

class GoogleLogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        };
        this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    handleSignIn() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                const token = result.credential.accessToken;
                const user = result.user;
            })
            .catch(function (error) {
            })
    }

    handleSignOut() {
        firebase.auth().signOut()
            .then(() => {
                this.setState({
                    isLoggedIn: false
                })
            })
            .catch(err => {

            })
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if(user !== null) {
                if(user.email === this.props.adminAccount) {
                    this.setState({
                        isLoggedIn: true
                    })
                }
            }
        })
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        return <div>
            {
                isLoggedIn ? <Form/> : ''
            }
            <button onClick={this.handleSignIn}>Log in with google</button>
            <button onClick={this.handleSignOut}>Sign out</button>
        </div>
    }
}

GoogleLogIn.defaultProps = {
    adminAccount: 'shared.solent@gmail.com'
};

export default GoogleLogIn;
