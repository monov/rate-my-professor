import "./NavBar.css";
import "../assets/fonts/GoldleafBoldPersonalUseBold-eZ4dO.ttf";
import { Link} from "react-router-dom";

const NavBar = () => {


  return (
    <div className="navbar-wrapper">
      <Link to="/">
        <div className="logo"></div>
      </Link>

      <div className="reg">
        <Link to='/signin' className="login">
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
