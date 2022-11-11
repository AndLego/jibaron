// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBheBcwZZHuc3XpbhycFnoj4xiALE79Wl0",
  authDomain: "jibaro-restaurant.firebaseapp.com",
  databaseURL: "https://jibaro-restaurant-default-rtdb.firebaseio.com",
  projectId: "jibaro-restaurant",
  storageBucket: "jibaro-restaurant.appspot.com",
  messagingSenderId: "908093916103",
  appId: "1:908093916103:web:2ffbcb456e8c31dd3b0fe2",
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
