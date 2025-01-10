import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";  // Import Firestore instance from firebase.js
import './SignInPage.css';


const SignInPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!name || !password) {
      setError("Please enter both name and password.");
      return;
    }

    try {
      // Debug log to check if function is being triggered
      console.log("Attempting to add user:", name, password);

      // Add user data to Firestore (in the 'users' collection)
      const docRef = await addDoc(collection(db, "users"), {
        name,
        password,
      });
      
      // Success log and user added to Firestore
      console.log("User added with ID:", docRef.id);  // docRef.id is the document ID
      
      // Reset form and clear error
      setName("");
      setPassword("");
      setError("");
      
      alert("Sign-in successful!");
    } catch (error) {
      // Handle errors in adding document
      console.error("Error adding document: ", error);
      setError("An error occurred, please try again.");
    }
  };

  return (
    <div className="sign-in-container">
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignInPage;
