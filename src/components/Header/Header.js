import React, { useState } from "react"
import './Header.css'
import logo from './websiteLogo.jpg';
import Login from '../../pages/Login/Login';
import Register from "../../pages/Register/Register";

export default function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);

  const openLoginPopup = () => {
    setShowLoginPopup(true);
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };
  const openRegisterPopup = () => {
    setShowRegisterPopup(true);
  };
  const closeRegisterPopup = () => {
    setShowRegisterPopup(false);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="site-name">
          <button className="menu-button">&#9776;</button>
          <img src={logo} alt="Logo" className="logo-image" />
          Traveling Lanka
        </div>

        <div className="right-menu">
          <button className="search">🌐</button>
          <button className="login-button" onClick={openLoginPopup}>Log in</button>
          {showLoginPopup && <Login onClose={closeLoginPopup} />}
          <button className="register-button" onClick={openRegisterPopup}>Register</button>
          {showRegisterPopup && <Register onClose={closeRegisterPopup} />}
        </div>
      </nav>
    </header>
  );
}
