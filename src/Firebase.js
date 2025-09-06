// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDasJz84my1wAzfv1DGn3qiqHTL308Hlg",
  authDomain: "household-budget-fe1cc.firebaseapp.com",
  projectId: "household-budget-fe1cc",
  storageBucket: "household-budget-fe1cc.firebasestorage.app",
  messagingSenderId: "28640647773",
  appId: "1:28640647773:web:3775c8c2d731dfb8e14bb4",
  measurementId: "G-T2L7T0D4V2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db};