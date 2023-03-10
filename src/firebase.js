// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRuZjIS-uSKf1_yqeiqh17dqXbD_8d9xs",
  authDomain: "ngoconnect-4e954.firebaseapp.com",
  databaseURL: "https://ngoconnect-4e954-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ngoconnect-4e954",
  storageBucket: "ngoconnect-4e954.appspot.com",
  messagingSenderId: "928098471161",
  appId: "1:928098471161:web:229a3be0bf55e659c96628",
  measurementId: "G-YEBXJY5R6P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);