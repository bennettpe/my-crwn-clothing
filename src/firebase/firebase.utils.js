/* Firebase Utilities */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCJj-VkBjkA9iG53JrRgxVoWsaFBj3BkDc",
  authDomain: "my-crwn-db-7a068.firebaseapp.com",
  databaseURL: "https://my-crwn-db-7a068.firebaseio.com",
  projectId: "my-crwn-db-7a068",
  storageBucket: "my-crwn-db-7a068.appspot.com",
  messagingSenderId: "325464700114",
  appId: "1:325464700114:web:15ee08e6444012e52ce90b",
  measurementId: "G-RHJ6N8RWFY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
