import React from "react";
import "./NavBar.css";
import '../assets/fonts/GoldleafBoldPersonalUseBold-eZ4dO.ttf'

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <a href="" className="logo">UniHub</a>

      <div className="reg">
        <a href="" className="login">Log In</a>
        <a href="" className="signup">Sign Up</a>
      </div>
    </div>
  );
};

export default NavBar;
