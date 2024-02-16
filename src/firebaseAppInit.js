// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBcR3Wo8NE2Cg5GatbosetBDEF-6_ztqkM",
  authDomain: "demows4.firebaseapp.com",
  projectId: "demows4",
  storageBucket: "demows4.appspot.com",
  messagingSenderId: "153695734035",
  appId: "1:153695734035:web:c166bd6ab0b987f295f2e6",
  measurementId: "G-X2CZVHL5F4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export {db, auth};