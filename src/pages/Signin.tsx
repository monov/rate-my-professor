import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

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

    const loginData = {
      username: loginUsername,
      password: loginPassword,
    };

    try {
      const response = await fetch(
        "https://6ead-82-215-127-95.ngrok-free.app/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );

      if (response.status === 200) {
        console.log("success");
      } else if (response.status === 401) {
        alert("Login failed. Please check your credentials.");
      } else {
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
          <div className="s s-button" onClick={login}>
            Sign In
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signin;
