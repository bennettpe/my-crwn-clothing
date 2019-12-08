/* Firebase Utilities */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/* Get Firebase Config */
const config = require('../config')

var firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messageingSenderId: config.firebase.messageingSenderId,
  appId: config.firebase.appId,
  measurementId: config.firebase.measurementId
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
