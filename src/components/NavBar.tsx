import "./NavBar.css";
import "../assets/fonts/GoldleafBoldPersonalUseBold-eZ4dO.ttf";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <Link to="/" className="color1">
        <div className="logo">LOGO</div>
      </Link>

      <div className="reg">
        <Link to="/login" className="login">
          Log In
        </Link>
        <Link to="/signup" className="signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
