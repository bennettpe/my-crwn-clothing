// Firebase Utilities 
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: `${process.env.REACT_APP_APIKEY}`,
  authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
  databaseURL: `${process.env.REACT_APP_DATABASEURL}`,
  projectId: `${process.env.REACT_APP_PROJECTID}`,
  storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
  messageingSenderId: `${process.env.REACT_APP_MESSAGINGSENDERID}`,
  appId: `${process.env.REACT_APP_APPID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENTID}`,
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
