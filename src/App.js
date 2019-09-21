import React from 'react';
import logo from './logo.svg';
import './App.css';
import Pokemon_App from "./Pokemon_App";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="red"></div>
          <img src={logo} className="App-logo" alt="logo" />
          <div className="white"></div>
      </header>
    <Pokemon_App />
    </div>
  );
}

export default App;
