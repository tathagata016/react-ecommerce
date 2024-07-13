// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDxrZFBKmPvYjmjc5Vy9tHhq3xcdKv8_ts",
  authDomain: "fir-login1-1dc0f.firebaseapp.com",
  projectId: "fir-login1-1dc0f",
  storageBucket: "fir-login1-1dc0f.appspot.com",
  messagingSenderId: "410034614173",
  appId: "1:410034614173:web:9fcc2aa658b7e48b3e4974",
  measurementId: "G-H1RXQDPKXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export{app,auth}

