import React from "react";
import { HashRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "../componentsCss/App.css";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";

function App() {
    return (
        <div className="App">
            <Routes>
                {/* Set the root path "/" to navigate to HomePage */}
                <Route path="/" element={<Navigate to="/homePage" />} />
                <Route path="/homePage" element={<HomePage />} />
                <Route path="/signupPage" element={<SignUpPage />} />
                <Route path="/loginPage" element={<LoginPage />} />
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
