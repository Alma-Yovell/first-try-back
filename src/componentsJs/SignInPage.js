import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../data/firebase"; // Import Firestore instance from firebase.js
import "../componentsCss/SignInPage.css";

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
      // Add user data to Firestore (in the 'users' collection)
      const docRef = await addDoc(collection(db, "users"), { name, password });

      // Reset form
      setName("");
      setPassword("");
      setError("");

      alert(`Sign-in successful! User ID: ${docRef.id}`);
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to sign in. Please try again.");
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
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignInPage;
