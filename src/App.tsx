import "./App.css";
import { Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { useState } from "react";


function App(){
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup isPressed={isPressed} setIsPressed={setIsPressed}/>}></Route>
      <Route path="/login" element={<Signin />}></Route>
    </Routes>
  );
}

export default App;
