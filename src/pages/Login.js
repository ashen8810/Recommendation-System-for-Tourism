import React, { useState } from "react";
import './Login.css';
import Google from './google-logo.png'
import Facebook from './facebook.png'
//import Register from "../../../../pages/Register/Register";

export default function Login({ onClose }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [showOverlay, setShowOverlay] = useState(false);

  const handleLoginClick = () => {
    setShowOverlay(true);
  };

  const handleCloseClick = () => {
    setShowOverlay(false);
    onClose();
  };

    const validateEmail = () => {
        if (!email) {
            setEmailError("Email is required.");
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Invalid email address.");
        } else {
            setEmailError("");
        }
    };

    const validatePassword = () => {
        if (!password) {
            setPasswordError("Password is required.");
        } else {
            setPasswordError("");
        }
    };

    const handleLogin = () => {
        validateEmail();
        validatePassword();

        if (!emailError && !passwordError) {
            onClose();
        }
    };

    return (
        <>
            {showOverlay && <div className="overlay" onClick={handleCloseClick}></div>}
            <div className={`login-popup ${showOverlay ? "visible" : ""}`}>
                <div className="login-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <h2>Login</h2>
                    <form>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={validateEmail}
                        />
                        {emailError && <p className="error">{emailError}</p>}

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={validatePassword}
                        />
                        {passwordError && <p className="error">{passwordError}</p>}

                        <button className="logIn-button" type="button" onClick={handleLogin}>Log in</button>
                        <p className="or">or</p>
                        <div>
                            <button className="google-button">
                                <img src={Google} alt="Logo" className="google-image" />
                                Signup with Google
                            </button>
                            <button className="facebook-button">
                                <img src={Facebook} alt="Logo" className="facebook-image" />
                                Signup with Facebook
                            </button>
                        </div>
                    </form>

                    <div className="bottom">
                        Still not registered?
                        <a href="/register"> Register</a>
                    </div>
                </div>
            </div>
        </>
    );
}
