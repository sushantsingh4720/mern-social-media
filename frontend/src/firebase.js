// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyhpY6A2yYOhOCK4o2kM4vr51G315-0JQ",
  authDomain: "let-s-come-together.firebaseapp.com",
  projectId: "let-s-come-together",
  storageBucket: "let-s-come-together.appspot.com",
  messagingSenderId: "682099239491",
  appId: "1:682099239491:web:fdb4a8dd143f6da8ac42f6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
