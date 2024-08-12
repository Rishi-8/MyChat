import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "chat-f30bb.firebaseapp.com",
  projectId: "chat-f30bb",
  storageBucket: "chat-f30bb.appspot.com",
  messagingSenderId: "129431452932",
  appId: "1:129431452932:web:1fcd849e3d4cd6e5b46451"
};

if (process.env.REACT_APP_API_KEY) {
  console.log("API key is set correctly.");
} else {
  console.log("API key is missing.");
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()
