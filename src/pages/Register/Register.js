import React, { useState,useEffect } from "react";
import './Register.css';
import Google from '../Login/google-logo.png';
import Facebook from '../Login/facebook-logo.png';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios"
import 'react-toastify/dist/ReactToastify.css';
//import Login from "./Register";

export default function Register({ onClose }) {
  const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  // const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userNameError, setuserNameError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [userTypeError,setUserTypeError]=useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [error, setError]=useState('')

  const handleRegisterClick = () => {
    setShowOverlay(true);
  };
  const handleCloseClick = () => {
    setShowOverlay(false);
    onClose();
  };


 const navigate=useNavigate()
 const [formdata, setFormdata]=useState({
        email:"",
        userName:"",
        user_type:"",
        password:"",
        password2:"",
        country:""
    })
  
  const {email,userName,user_type,password,password2,country}=formdata  



  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required.");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email address.");
    } else {
      setEmailError("");
    }
  };

  const validateUserName = () => {
    if (!userName) {
      setuserNameError("UserName is required.");
    } else {
      setuserNameError("");
    }
  };

  const validateUserType = () => {
    if (!user_type) {
      setUserTypeError("User type is required.");
    } else {
      setUserTypeError("");
    }
  };

  const validateCountry = () => {
    if (!country) {
      setCountryError("country is required.");
    } else {
      setCountryError("");
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
    if (password !== password2) {
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


  const handleOnchange = (e)=>{
    setFormdata({...formdata, [e.target.name]:e.target.value})
}

const handleSubmit =async (e)=>{
  e.preventDefault()
  if(!email|| !userName || !password || !password2 || !country)
  {
    setError("all fields are required.")
  }
  else{
    const response = await axios.post('http://localhost:8000/api/user/register/',formdata)
    console.log(response.data)
    const result=response.data
    if (response.status === 201) {
       navigate("/otp/verify")
       toast.success(result.msg)
       onClose()
    }
  }
}

  return (
    <div className="body">
    {showOverlay && <div className="overlay" onClick={handleCloseClick}></div>}
    <div className={`register-popup ${showOverlay ? "visible" : ""}`}>
      <div className="register-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Create Account</h2>
        <form action="" onSubmit={handleSubmit}>
        {error && <p className="error">{error}</p>}
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="userName"
            value={userName}
            onChange={handleOnchange}
            onBlur={validateUserName}
          />
          {userNameError && <p className="error">{userNameError}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleOnchange}
            onBlur={validateEmail}
          />
          {emailError && <p className="error">{emailError}</p>}

          <label htmlFor="country">Select Country</label>
          <select
            id="country"
            className="country"
            name="country"
            value={country}
            onChange={handleOnchange}
            onBlur={validateCountry}
          >
            <option value=" ">None</option>
            <option value="Australia">Australia</option>
            <option value="Canada">Canada</option>
            <option value="India">India</option>
            <option value="Rusia">Rusia</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
          </select>
          {countryError && <p className="error">{countryError}</p>}

          <label htmlFor="user_type">Select User Type</label>
            <select
              id="user_type"
              className="user_type"
              name="user_type"
              value={user_type}
              onChange={handleOnchange}
              onBlur={validateUserType}
            >
              
              <option value="traveler">Traveler</option>
              <option value="hotelOwner">Hotel Owner</option>
            </select>
            {userTypeError && <p className="error">{userTypeError}</p>}



          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleOnchange}
            onBlur={validatePassword}
          />
          {passwordError && <p className="error">{passwordError}</p>}

          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="password2"
            value={password2}
            onChange={handleOnchange}
            onBlur={validateConfirmPassword}
          />
          {confirmPasswordError && <p className="error">{confirmPasswordError}</p>}

          <button className="createAccount-button" type="submit" >Create Account</button>
          <p className="or">or</p>
          <div>
            <button className="google-button" >
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

    </div>

  );
}
