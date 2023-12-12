import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyCQLXq8cPSwVwLIZm16cT4tqAM48nFi66w",
    authDomain: "notesapp-382b4.firebaseapp.com",
    projectId: "notesapp-382b4",
    storageBucket: "notesapp-382b4.appspot.com",
    messagingSenderId: "213288451245",
    appId: "1:213288451245:web:032c30a5dd8bb64f2a5a24"
});

const FIREBASE = firebase;

export default FIREBASE;