
import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDE8yyD05cG0wNrNWxeSUjJfc8ZTMcFUZk",
    authDomain: "jacksonana-gram.firebaseapp.com",
    databaseURL: "https://jacksonana-gram.firebaseio.com",
    projectId: "jacksonana-gram",
    storageBucket: "jacksonana-gram.appspot.com",
    messagingSenderId: "630664057831",
    appId: "1:630664057831:web:c61cb516a9f9fba0146342"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timeStamp };