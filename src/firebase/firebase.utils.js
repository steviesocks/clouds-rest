import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDMhXl5NHFxx1f4OBRcDlDNkf4JCuu4Jxc",
    authDomain: "clouds-rest-db.firebaseapp.com",
    databaseURL: "https://clouds-rest-db.firebaseio.com",
    projectId: "clouds-rest-db",
    storageBucket: "clouds-rest-db.appspot.com",
    messagingSenderId: "387654476576",
    appId: "1:387654476576:web:e028c37dbbab55e2802d45"
  }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;