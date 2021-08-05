import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAsGlc6KQz_20zWdo5YXhPpkw_x958lyEw",
  authDomain: "motoapp-da5f9.firebaseapp.com",
  projectId: "motoapp-da5f9",
  storageBucket: "motoapp-da5f9.appspot.com",
  messagingSenderId: "95280987880",
  appId: "1:95280987880:web:5b3852376651e58cea135d",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const auth = firebase.auth();

export default {
  db,
  firebase,
  auth,
};
