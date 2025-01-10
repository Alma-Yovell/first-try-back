import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "../componentsCss/App.css";
import SignInPage from "./SignInPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/signinPage" />} />
        <Route path="/signinPage" element={<SignInPage />} />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
