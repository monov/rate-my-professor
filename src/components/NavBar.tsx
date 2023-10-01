import "./NavBar.css";
import { useState } from "react";
import "../assets/fonts/GoldleafBoldPersonalUseBold-eZ4dO.ttf";

const NavBar = () => {
  const [isScroll, setIsScroll] = useState(false);

  const change = () => {
    if (window.scrollY >= 1) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  window.addEventListener("scroll", change);

  return (
    <div className={isScroll ? "navbar-wrapper scroll" : "navbar-wrapper"}>
      <a href="">
        <div className="logo"></div>
      </a>

      <div className="reg">
        <a href="" className="login">
          Log In
        </a>
        <a href="" className="signup">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default NavBar;
