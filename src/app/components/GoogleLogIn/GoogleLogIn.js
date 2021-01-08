import React from 'react';
import firebase from '../../util/firebase';
import Form from '../Form/Form';

class GoogleLogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
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
            isLoggedIn: true,
          });
        }
      }
    });
  }

  handleSignOut() {
    firebase.auth().signOut()
      .then(() => {
        this.setState({
          isLoggedIn: false,
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
        {
          isLoggedIn ? <Form /> : ''
        }
        <button type="button" onClick={this.handleSignIn}>Log in with google</button>
        <button type="button" onClick={this.handleSignOut}>Sign out</button>
      </div>
    );
  }
}

GoogleLogIn.defaultProps = {
  adminAccount: 'shared.solent@gmail.com',
};

export default GoogleLogIn;
