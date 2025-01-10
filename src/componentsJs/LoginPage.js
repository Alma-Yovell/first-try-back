import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../data/firebase"; // Firestore instance
import "../componentsCss/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate the form
    if (!name || !password) {
      setError("Please enter both name and password.");
      return;
    }

    try {
      // Query Firestore for a user with matching name and password
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("name", "==", name), where("password", "==", password));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        // No matching user found
        setError("Invalid name or password. Please try again.");
        setSuccessMessage("");
      } else {
        // User found
        setError("");
        setSuccessMessage(`Hello, ${name}! Welcome back!`);
        setName("");
        setPassword("");
      }
    } catch (err) {
      console.error("Error checking login: ", err);
      setError("An error occurred. Please try again.");
      setSuccessMessage("");
    }
  };

  const handleGoToHome = () => {
    navigate("/homePage"); // Navigate to HomePage
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <button onClick={handleGoToHome}>Go to Home Page</button>
    </div>
  );
};

export default LoginPage;
