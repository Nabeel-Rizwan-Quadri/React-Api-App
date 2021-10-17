// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOoEKLkx1iOVb7JiT8kgz9xFOVhzk1qJo",
  authDomain: "react-posts-api.firebaseapp.com",
  projectId: "react-posts-api",
  storageBucket: "react-posts-api.appspot.com",
  messagingSenderId: "593633985595",
  appId: "1:593633985595:web:dc17a9ddb91138681b881e",
  measurementId: "G-ZEGJ9SK9LM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const sigup = () => {
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}

const login = () =>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

export{
    sigup,
    login
}