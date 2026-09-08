// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB25tdgJhSzqCPxeQnOofk3zLc3vLqaU88",
  authDomain: "movefast-d0ffa.firebaseapp.com",
  projectId: "movefast-d0ffa",
  storageBucket: "movefast-d0ffa.firebasestorage.app",
  messagingSenderId: "515108507822",
  appId: "1:515108507822:web:fc9971562a8b99a1c29d3f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
