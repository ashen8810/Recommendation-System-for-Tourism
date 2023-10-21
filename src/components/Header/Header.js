import React, { useState } from "react"
import './Header.css'
import logo from './websiteLogo.jpg';
import Login from '../../pages/Login/Login';
import Register from "../../pages/Register/Register";
import Search from "./search-logo.jpg";
import HomeSideBar from "components/HomeSideBar";


export default function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showRegisterPopup, setShowRegisterPopup] = useState(false);
  const[isSidebarOpen,setIsSidebarOpen] = useState(false);

  const handleClick = e=>{
    setIsSidebarOpen(!isSidebarOpen);

  }

  const closeSideBar = () =>{
    setIsSidebarOpen(false);
  }

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
    <>
    <header>
      <nav className="navbar">
        <div className="site-name">
          <button className="menu-button" onClick={handleClick}>&#9776;</button>
          <img src={logo} alt="Logo" className="logo-image" />
          Traveling Lanka
        </div>

        <div className="right-menu">
          <button className="search">
          <img src={Search} alt="Logo" className="search-image" />
          </button>
          <button className="login-button" onClick={openLoginPopup}>Log in</button>
          {showLoginPopup && <Login onClose={closeLoginPopup} />}
          <button className="register-button" onClick={openRegisterPopup}>Register</button>
          {showRegisterPopup && <Register onClose={closeRegisterPopup} />}
        </div>
      </nav>
    </header>
    {isSidebarOpen && (
            <div>
              <HomeSideBar
              onClose = {closeSideBar}/>
            </div>
          )}

    
    </>
  );
}
