import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const api: any = import.meta.env.VITE_API_BASE_URL;

  const handleChangeU = (value: string) => {
    setUser(value);
  };

  const handleChangeP = (value: string) => {
    setPassword(value);
  };

  async function login() {
    const loginUsername = user;
    const loginPassword = password;

    const loginData = {
      username: loginUsername,
      password: loginPassword,
    };

    try {
      const response = await fetch(`${api}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "123",
        },
        body: JSON.stringify(loginData),
      });

      if (response.status === 200) {
        let path = `/`;
        navigate(path);
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
