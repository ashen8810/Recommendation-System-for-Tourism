import React, { useState } from "react";
import './Register.css';
import Google from '../Login/google-logo.png';
import Facebook from '../Login/google-logo.png';
//import Login from "./Register";

export default function Register({ onClose }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

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
  const validateConfirmPassword = () => {
    if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleRegister = () => {
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (!emailError && !passwordError) {
      onClose();
    }
  };

  return (
    <div className="register-popup">
      <div className="register-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Create Account</h2>
        <form>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          {emailError && <p className="error">{emailError}</p>}

          <label htmlFor="country">Select Country</label>
          <select
            id="country"
            className="country"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
            <option value="Rusia">Rusia</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
          </select>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={validatePassword}
          />
          {passwordError && <p className="error">{passwordError}</p>}

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onBlur={validateConfirmPassword}
          />
          {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}

          <button className="createAccount-button" type="button" onClick={handleRegister}>Create Account</button>
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
          Already have an account?
          <a className="log" href="/Login"> Log in</a>
        </div>
      </div>
    </div>
  );
}
