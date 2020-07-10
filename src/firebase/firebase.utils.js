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

  