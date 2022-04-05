import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserContext from "./components/Auth/UserContext";
import Home from "./Home";
import Login from "./components/Auth/Login";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Game from "./components/Game";

function App() {
  return (
    <UserContext>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
