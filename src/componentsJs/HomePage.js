import React from "react";
import { useNavigate } from "react-router-dom";
import "../componentsCss/HomePage.css";

const HomePage = () => {
    const navigate = useNavigate();

    const handleGoToSignUp = () => {
        navigate("/signupPage"); // Navigate to SignUpPage
    };

    const handleGoToLogin = () => {
        navigate("/loginPage");
    };

    return (
        <div className="home-page">
            <h1>Welcome to Home Page</h1>
            <button onClick={handleGoToSignUp}>Go to Sign Up</button>
            <button onClick={handleGoToLogin}>Go to Login</button>
        </div>
    );
};

export default HomePage;
