import "./NavBar.css";
import "../assets/fonts/GoldleafBoldPersonalUseBold-eZ4dO.ttf";
import { Link} from "react-router-dom";

const NavBar = () => {


  return (
    <div className="navbar-wrapper">
      <a href="">
        <div className="logo"></div>
      </a>

      <div className="reg">
        <Link to='/signup' className="login">
          Log In
        </Link>
        <Link to='/signup' className="signup">
        Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
