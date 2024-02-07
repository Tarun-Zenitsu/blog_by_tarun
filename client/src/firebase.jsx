// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tarun-blog.firebaseapp.com",
  projectId: "tarun-blog",
  storageBucket: "tarun-blog.appspot.com",
  messagingSenderId: "786615470464",
  appId: "1:786615470464:web:dd67d39d96dc324c195965"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);