import React, { useState } from "react";
import "./Login.css";
import Google from "./google-logo.png";
import Facebook from "./facebook-logo.png";
import { toast } from 'react-toastify';
import AxiosInstance from "../../utils/AxiosInstance.js";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
// import app from "./pages/Homepage";
//import Register from "../../../../pages/Register/Register";

export default function Login({ onClose }) {

  const navigate=useNavigate()
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);
  const [error,setError] = useState("")
  const [logindata, setLogindata]=useState({
    email:"",
    password:""
   })

   const {email,password} = logindata

  
  const handleOnchange=(e)=>{
    setLogindata({...logindata, [e.target.name]:e.target.value})
  }


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

  const handleSubmit = async(e)=>{
    e.preventDefault()
   
    if(!email || !password)
    {
      setError("all credentials are required.")
    }else{
      try{
        const res = await axios.post('http://localhost:8000/api/user/login/', logindata)
        const response= res.data
        console.log(res)
        if (res.status === 200) {
          localStorage.setItem('access', JSON.stringify(response.token.access))
          localStorage.setItem('refresh', JSON.stringify(response.token.refresh))
          localStorage.setItem('user', JSON.stringify(response.user))
          navigate('/')
          toast.success('login successful')
          onClose()
        }
      }catch(error){
        console.error("An error occurred:", error);

        
        if (error.response) {
          console.error("Response error:", error.response.data);
          const errorResponse = error.response.data;
          // toast.error("Email or Password is not Valid");
          toast.error(errorResponse.errors.non_field_errors[0]);
        }
      }
      
    }

   
 }

  return (
    <>
      {/* <Homepage /> */}
      {showOverlay && (
        <div className="overlay" onClick={handleCloseClick}></div>
      )}
      <div className={`login-popup ${showOverlay ? "visible" : ""}`}>
        <div className="login-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h2>Login</h2>
          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>
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

            <button
              className="logIn-button"
              type="submit"
            >
              Log in
            </button>
            <p className="or">or</p>
            <div>
              <>
                <button className="google-button">
                  <img src={Google} alt="Logo" className="google-image" />
                  Signup with Google
                </button>
              </>
              <>
                <button className="facebook-button">
                  <img src={Facebook} alt="Logo" className="facebook-image" />
                  Signup with Facebook
                </button>
              </>
            </div>
          </form>

          <div className="bottom">

            <div className="fogot-password">
              <a href="/fogotpassword">Forgot your password?</a>
            </div>

            Still not registered?
            <a className="reg" href="/register">
              {" "}
              Register
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
