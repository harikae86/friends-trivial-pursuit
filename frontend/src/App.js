import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./components/Auth/UserContext";
import Home from "./Home";
import Login from "./components/Auth/Login";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Game from "./components/Game";

import "./index.css";

function App() {
  return (
    <UserContext>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext>
  );
}

export default App;
