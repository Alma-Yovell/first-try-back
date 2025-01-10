import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../data/firebase"; // Import Firestore instance from firebase.js
import "../componentsCss/SignUpPage.css";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleGoToHome = () => {
      navigate("/homePage"); // Navigate to HomePage
  };

  const handleSignUp = async (e) => {
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

      alert(`Sign-up successful! User ID: ${docRef.id}`);
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
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
        <button type="submit">Sign Up</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleGoToHome}>Go to Home Page</button>
    </div>
  );
};

export default SignUpPage;
