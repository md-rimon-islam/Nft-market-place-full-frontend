// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Fixed typo here
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKFsMVjwLvtxEasw9rS9gskpjz_9I71v0",
  authDomain: "nft-marketplace-8e0cb.firebaseapp.com",
  projectId: "nft-marketplace-8e0cb",
  storageBucket: "nft-marketplace-8e0cb.firebasestorage.app",
  messagingSenderId: "273297602325",
  appId: "1:273297602325:web:e20e5d6f00eb18a2249b1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const db = getFirestore(app); // Fixed typo here