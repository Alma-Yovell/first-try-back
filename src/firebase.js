import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (replace this with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyBkYhA8d__N2x0oHFB5TZTzyKQ_SFdsjuE",
  authDomain: "first-try-back.firebaseapp.com",
  projectId: "first-try-back",
  storageBucket: "first-try-back.firebasestorage.app",
  messagingSenderId: "461563107426",
  appId: "1:461563107426:web:da2b180ccf111f05ffd93b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { app, db };
