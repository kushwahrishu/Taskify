// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPiGh8_vd6codEQrhss8nJ71WCd6w94gs",
  authDomain: "taskify-14207.firebaseapp.com",
  projectId: "taskify-14207",
  storageBucket: "taskify-14207.firebasestorage.app",
  messagingSenderId: "941142925187",
  appId: "1:941142925187:web:c82b21ffc536392c3ee0b6",
  measurementId: "G-CP0WXZK8G5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);