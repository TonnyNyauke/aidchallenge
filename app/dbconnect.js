// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkLQvNGy1z4cAXVfyClHQ3FDmaxu4i8pc",
  authDomain: "aidchallenge-library.firebaseapp.com",
  projectId: "aidchallenge-library",
  storageBucket: "aidchallenge-library.appspot.com",
  messagingSenderId: "204416009686",
  appId: "1:204416009686:web:f5332b53fa26e4a87ad077",
  measurementId: "G-3K2MN78KRY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
