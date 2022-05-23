// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpBydJPMHFLIIDYtrS8omwF2tozkYgRFY",
  authDomain: "instagram-2-d9284.firebaseapp.com",
  projectId: "instagram-2-d9284",
  storageBucket: "instagram-2-d9284.appspot.com",
  messagingSenderId: "911838350721",
  appId: "1:911838350721:web:1dcfc1a2d8ed0980eeec80"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig): getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}