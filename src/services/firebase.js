import firebase from 'firebase';

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
const db = firebase.database();

export { db };
