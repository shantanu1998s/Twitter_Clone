// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAocTz7esYOJNlEXOoUbu84UvfGCvX2-Ps",
  authDomain: "twitter-clone-ab064.firebaseapp.com",
  projectId: "twitter-clone-ab064",
  storageBucket: "twitter-clone-ab064.appspot.com",
  messagingSenderId: "246373901518",
  appId: "1:246373901518:web:1b41516717882753355c9f",
  measurementId: "G-8GSWRCRG6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth(app);

