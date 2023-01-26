// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXERw_unE6BZVwkuMAK3fFP8z-Bcuk4XU",
  authDomain: "journal-app-524fa.firebaseapp.com",
  projectId: "journal-app-524fa",
  storageBucket: "journal-app-524fa.appspot.com",
  messagingSenderId: "108377284787",
  appId: "1:108377284787:web:930447fd59ad92721d90c6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)