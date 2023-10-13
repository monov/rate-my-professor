import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import "./Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  const api: any = import.meta.env.VITE_API_BASE_URL;
  const handleChangeU = (value: string) => {
    setUser(value);
  };

  const handleChangeE = (value: string) => {
    setEmail(value);
  };

  const handleChangeP = (value: string) => {
    setPassword(value);
  };

  function signup() {
    const signupEmail = email;
    const signupUsername = user;
    const signupPassword = password;

    const signupData = {
      username: signupUsername,
      email: signupEmail,
      password: signupPassword,
    };

    fetch(`${api}signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "123",
      },
      body: JSON.stringify(signupData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Signup successful");
          let path = `/signin`;
          navigate(path);
        } else {
          alert("Signup failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div className="App-signup">
      <NavBar />
      <div className="signup-reg">
        <div className="signup-page-wrapper">
          <div className="s email">
            <input
              type="email"
              placeholder="email"
              onChange={(e) => handleChangeE(e.target.value)}
            />
          </div>
          <div className="s username">
            <input
              type="text"
              placeholder="username"
              onChange={(e) => handleChangeU(e.target.value)}
            />
          </div>
          <div className="s password">
            <input
              type="password"
              placeholder="password"
              onChange={(e) => handleChangeP(e.target.value)}
            />
          </div>
          <div className="s s-button" onClick={signup}>
            Sign Up
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
