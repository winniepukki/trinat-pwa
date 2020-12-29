import firebase from 'firebase/app';
import config from './config';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: config.REACT_FIREBASE_API_KEY,
    authDomain: config.REACT_FIREBASE_AUTH_DOMAIN,
    databaseURL: config.REACT_FIREBASE_DATABASE_URL,
    projectId: config.REACT_FIREBASE_PROJECT_ID,
    storageBucket: config.REACT_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: config.REACT_FIREBASE_MESSAGING_SENDER_ID,
    appId: config.REACT_FIREBASE_APP_ID,
    measurementId: config.REACT_FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
