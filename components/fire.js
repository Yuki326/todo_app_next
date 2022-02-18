import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBO2frlRiG2SrldoYWnuoN2TYnLO_eaJsY",
  authDomain: "yuki-todoapp.firebaseapp.com",
  projectId: "yuki-todoapp",
  storageBucket: "yuki-todoapp.appspot.com",
  messagingSenderId: "649742666850",
  appId: "1:649742666850:web:74ae733d39067d3491553b",
  measurementId: "G-1QF6GERTSH"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };