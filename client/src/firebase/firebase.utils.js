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

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  // const collectionRef = firestore.collection('users');

  const snapShot = await userRef.get()
  // const collectionSnapshot = await collectionRef.get();
  // console.log("snapshot", { collectionSnapshot });

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

export const getCartRef = async (userId) => {

  const cartRef = firestore.collection("carts").where("userId","==", userId)

  const snapShot = await cartRef.get()

  if (snapShot.empty) {
   
    try {
      const cartDocRef = firestore.collection("carts").doc()
      await cartDocRef.set({
        userId,
        cartItems: []
      });
      return cartDocRef
    } catch (error) {
      console.log("error creating new cart", error.message)
    }
  } else {
    return snapShot.docs[0].ref
  }
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

  console.log(transformedCollection)

  return transformedCollection.reduce( (accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator
  }, {})
  
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  });
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;