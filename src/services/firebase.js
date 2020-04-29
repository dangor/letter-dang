import firebase from 'firebase';
import * as firebaseui from 'firebaseui';

const firebaseConfig = {
  apiKey: "AIzaSyCmxJ2QC3Sk-Nn8udObDTZa4VUvdkYic3U",
  authDomain: "letter-dang.firebaseapp.com",
  databaseURL: "https://letter-dang.firebaseio.com",
  projectId: "letter-dang",
  storageBucket: "letter-dang.appspot.com",
  messagingSenderId: "685319733489",
  appId: "1:685319733489:web:4761e36fc4c35112126950"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const authUi = new firebaseui.auth.AuthUI(auth);
const db = firebase.database();
const emailAuthProvider = firebase.auth.EmailAuthProvider.PROVIDER_ID;

export { auth, authUi, db, emailAuthProvider };
