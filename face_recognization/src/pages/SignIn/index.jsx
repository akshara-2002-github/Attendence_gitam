
import React, { useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.scss";

import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import validator from "validator";


export default function SignIn() {
    const [emailId, setEmailId] = useState("");

    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = () => { 
      const [user, domain] = emailId.split("@");
      if (domain === "gitam.in") {
        // Navigate to gitam.in page
        navigate("/calender");
      } else if (domain === "gitam.edu") {
        // Navigate to gitam.edu page
        navigate("/home");
      } else {
        // Handle invalid domain
        alert("Invalid email domain");
      }
    };
  
    console.log(emailId, password);
  
  
    const handleSignUp = () => {
      navigate("/signUp");
    };
   
  
    const [user, domain] = emailId.split("@");
    console.log(user, domain);
  
    const isUserNameValid =
      validator.isEmail(emailId) &&
      (domain === "gitam.in" || domain === "gitam.edu");
    console.log(isUserNameValid);
  
    const isPasswordValid = password.length >= 8;
    console.log(isPasswordValid);
    return (
      <div className="login">
        <div className="login-left" >
   
         
          
          </div>
        <div className="login-right">
          <div className="login-content">
            <h4 className="sign-in">Sign In</h4>
  
            <p className="dont-have bold">
              Don't have a account yet? <button onClick={handleSignUp}>Sign Up</button>
            </p>
  
            <TextInput
              placeholder="Enter your Emaild or Username"
              value={emailId}
              onChange={setEmailId}
            />
  
            <TextInput
              placeholder="password"
              isPassword
              value={password}
              onChange={setPassword}
            />
  
         
              <Link className="forgot"> forgot password?</Link>
  
              <Button
              
                onClick={handleLogin}
                isDisabled={!isPasswordValid || !isUserNameValid}
              />
          </div>
        </div>
      </div>
    );
  }
  