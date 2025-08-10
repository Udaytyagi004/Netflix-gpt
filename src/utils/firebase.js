// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiRgT_PWz6EpHqLbPbdGH64pv5YnE7sjQ",
  authDomain: "netflixgpt-9b853.firebaseapp.com",
  projectId: "netflixgpt-9b853",
  storageBucket: "netflixgpt-9b853.firebasestorage.app",
  messagingSenderId: "611547930717",
  appId: "1:611547930717:web:a928293f08e65e230badb4",
  measurementId: "G-G8Y426979K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

