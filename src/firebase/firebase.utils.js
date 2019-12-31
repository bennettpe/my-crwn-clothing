// Firebase Utilities 
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: 'AIzaSyCJj-VkBjkA9iG53JrRgxVoWsaFBj3BkDc',
  authDomain: 'my-crwn-db-7a068.firebaseapp.com',
  databaseURL: 'https://my-crwn-db-7a068.firebaseio.com',
  projectId: 'my-crwn-db-7a068',
  storageBucket: 'my-crwn-db-7a068.appspot.com',
  messageingSenderId: '325464700114',
  appId: '1:325464700114:web:15ee08e6444012e52ce90b',
  measurementId: 'G-RHJ6N8RWFY'
}; 

// Initialize Firebase 
firebase.initializeApp(firebaseConfig);

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

//157. Moving Our Shop Data To Firebase 
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  // Group into one request
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });
  
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  } , {});
};

//
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
};

// make auth and firestore references 
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Goole Auth Provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
