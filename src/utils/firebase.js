import firebase from "firebase/compat/app"
import "firebase/compat/firestore" 

const firebaseConfig = {
    apiKey: "AIzaSyBk0sx058CrF8VAvB6-iC-7ErFMt3tzSkE",
    authDomain: "portfolio-8053b.firebaseapp.com",
    projectId: "portfolio-8053b",
    storageBucket: "portfolio-8053b.appspot.com",
    messagingSenderId: "227195003111",
    appId: "1:227195003111:web:e3c2686ffc17a5e0cf0242"
};

if(!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
export { firestore }
