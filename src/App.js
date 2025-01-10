import logo from './logo.svg';
import './App.css';
import React from "react";
import app from "./firebase";

function App() {
  console.log("Firebase App initialized:", app);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> enter user</p>
      </header>
    </div>
  );
}

export default App;
