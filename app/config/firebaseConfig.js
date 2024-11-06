// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcBAqOolb5gpJ86X74PaSZnxBCIhSb05U",
  authDomain: "mealplanet-8a0d6.firebaseapp.com",
  projectId: "mealplanet-8a0d6",
  storageBucket: "mealplanet-8a0d6.firebasestorage.app",
  messagingSenderId: "692591968034",
  appId: "1:692591968034:web:b2b6c80a31cd71dbe4af7b",
  measurementId: "G-B427CKVXRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };