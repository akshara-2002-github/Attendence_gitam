import React, { useState } from "react";
import { Link, useNavigation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import validator from "validator";

export default function SignUp() {
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/home");
  };
  const handleSignIn = () => {
    navigate("/signin");
  };

  console.log(name, emailId, password);

  const [user, domain] = emailId.split("@");
  console.log(user, domain);

  const isUserNameValid =
    validator.isEmail(emailId) &&
    (domain === "gitam.in" || domain === "gitam.edu");
  console.log(isUserNameValid);

  const isPasswordValid = password.length >= 8;
  console.log(isPasswordValid);

  const isName = name.length >= 8;
  console.log(isName);

  return (
    <div className="login">
      <div className="login-left"></div>
      <div className="login-right">
        <div className="login-content">
          <h5 className="title">ATTENDENCE PORTAL </h5>
          <h6 className="sign-in">Sign Up</h6>

          <p className="dont-have bold">
            Already have an account?{" "}
            <button onClick={handleSignIn}>Sign In</button>
          </p>

          <TextInput placeholder="Your name" value={name} onChange={setName} />

          <TextInput
            placeholder="Emaild or Username"
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
