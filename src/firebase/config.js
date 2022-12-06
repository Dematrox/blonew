// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpVA3QzKwTbpmqM5THw3SIG5PYZJlCTGE",
  authDomain: "blonew-8c35e.firebaseapp.com",
  projectId: "blonew-8c35e",
  storageBucket: "blonew-8c35e.appspot.com",
  messagingSenderId: "830429720671",
  appId: "1:830429720671:web:c03c962b6f0b72f13babea",
  measurementId: "G-PRV0BYPJRX"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FireBaseApp );
export const FirebaseDB = getFirestore( FireBaseApp );


// const analytics = getAnalytics(app);