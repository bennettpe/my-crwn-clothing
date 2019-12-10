// Firebase Utilities 
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Get Firebase Config 
const config = require('../config')

let firebaseConfig = {
  apiKey: config.firebase.apiKey,
  authDomain: config.firebase.authDomain,
  databaseURL: config.firebase.databaseURL,
  projectId: config.firebase.projectId,
  storageBucket: config.firebase.storageBucket,
  messageingSenderId: config.firebase.messageingSenderId,
  appId: config.firebase.appId,
  measurementId: config.firebase.measurementId
}; 

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // Check if userAuth object does not exist
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user, error.message');
    }
  }
  return userRef;
};

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

// make auth and firestore references 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Goole Auth Provider
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
