// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "job-task-82e64.firebaseapp.com",
  projectId: "job-task-82e64",
  storageBucket: "job-task-82e64.firebasestorage.app",
  messagingSenderId: "594224384479",
  appId: "1:594224384479:web:72ea80ffebe721d99e5c6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);