// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4_hp6M1f5ZApBk4jWpqmWR1lBmFKvN9k",
  authDomain: "sample-signin-74819.firebaseapp.com",
  projectId: "sample-signin-74819",
  storageBucket: "sample-signin-74819.appspot.com",
  messagingSenderId: "607933591906",
  appId: "1:607933591906:web:437f86065de326484c3c3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;