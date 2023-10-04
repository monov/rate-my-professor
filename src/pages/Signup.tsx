import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="App-signup">
      <NavBar />
      <div className="signup-reg">
        <div className="signup-page-wrapper">
          <div className="s email">
            <input type="email" placeholder="email" />
          </div>
          <div className="s username">
            <input type="text" placeholder="username" />
          </div>
          <div className="s password">
            <input type="password" placeholder="password" />
          </div>
          <div className="s s-button">Sign Up</div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Signup;
