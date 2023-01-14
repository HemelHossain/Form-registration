// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-BllniQW9n-NGyAkNQBLsHbsuCWh65gs",
  authDomain: "log-reg-authentication.firebaseapp.com",
  projectId: "log-reg-authentication",
  storageBucket: "log-reg-authentication.appspot.com",
  messagingSenderId: "720143740887",
  appId: "1:720143740887:web:48168557f187b9f9fb6592"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;