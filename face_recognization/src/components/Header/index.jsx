import React from "react";
import { Link, useLocation } from "react-router-dom";

import NavLinks from "../NavLinks";
import Logo from "../../assets/logoo.jpeg"
import "./index.scss";


const Header = (props) => {
  const location = useLocation();
  console.log(location);

  const isLogin = location.pathname === "/";

  const navigateToAnotherPage = () => {
    window.location.href = location;
  };

  return (
    <div className="header ">

      <div className="logo-container">
      <img src={Logo}></img>
      <sup className="header__title bold">G-ATTEND</sup>
      
      </div>
    
      {!isLogin && <NavLinks />}

    
    </div>
  );
};

export default Header;
