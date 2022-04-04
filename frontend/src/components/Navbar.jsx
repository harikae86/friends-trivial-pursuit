import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
      <Link to="/game">Let's play</Link>
    </div>
  );
};

export default Navbar;
