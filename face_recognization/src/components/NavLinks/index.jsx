import React from "react";
import {Link} from "react-router-dom";

import "./index.scss";
const NavLinks = (props) => {
  const links = [
    
    {name1:"G-ATTEND"},
    { path: "/home", name: "Home" },
    { path: "/overall", name: "Modify Attendance" },
    { path: "/history", name: "Dashboard " },
    { path: "/schedule", name: "Course Schedule" },
    { path: "/calender", name: "Calender" },
  ];
  return (
    <nav className="nav-links ">
      {links.map((el) => (
        <Link className={`${props.isFooter ? "nav-links__link--white" : "nav-links__link"}`} to={el.path}>
          {el.name}
        </Link>

        
      ))}
    </nav>
  );
};

export default NavLinks;
