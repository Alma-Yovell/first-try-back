// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkYhA8d__N2x0oHFB5TZTzyKQ_SFdsjuE",
  authDomain: "first-try-back.firebaseapp.com",
  projectId: "first-try-back",
  storageBucket: "first-try-back.firebasestorage.app",
  messagingSenderId: "461563107426",
  appId: "1:461563107426:web:da2b180ccf111f05ffd93b",
  measurementId: "G-MC1HJ84YT2", // Optional, you can keep it but we won’t use it.
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
