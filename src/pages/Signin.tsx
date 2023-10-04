import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Signin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeU = (value: string) => {
    setUser(value);
    console.log(value);
  };

  const handleChangeP = (value: string) => {
    setPassword(value);
    console.log(value);
  };

  async function login() {
    const loginUsername = user;
    const loginPassword = password;

    // Create an object to send as the request body
    const loginData = {
      username: loginUsername,
      password: loginPassword,
    };

    try {
      const response = await fetch("https://6ead-82-215-127-95.ngrok-free.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.status === 200) {
        // Redirect to '/profile' if authentication succeeds
        console.log("success")
      } else if (response.status === 401) {
        // Display an error message if authentication fails
        alert("Login failed. Please check your credentials.");
      } else {
        // Handle other status codes or errors
        console.error("Login error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div className="App-signup">
      <NavBar />
      <div className="signup-reg">
        <div className="signup-page-wrapper">
          <div className="s username">
            <input
              type="text"
              value={user}
              onChange={(e) => handleChangeU(e.target.value)}
              placeholder="username"
            />
          </div>
          <div className="s password">
            <input
              type="password"
              value={password}
              onChange={(e) => handleChangeP(e.target.value)}
              placeholder="password"
            />
          </div>
          <Link to={'/'} className="s s-button" onClick={login}>
            Sign In
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
