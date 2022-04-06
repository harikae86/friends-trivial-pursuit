import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "./Auth/UserContext";
import { Nav, StyledLink } from "./Navbar.styles";

const Navbar = () => {
  const { user, setUser } = useContext(userContext);

  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      {user && (
        <>
          <StyledLink
            to="/"
            onClick={() =>
              fetch("/api/logout")
                .then((res) => res.json())
                .then(() => {
                  setUser();
                  window.alert("Logged out");
                })
                .catch((error) => console.log(error))
            }
          >
            Log out{" "}
          </StyledLink>

          <StyledLink to="/game">Let's play</StyledLink>
        </>
      )}
      {!user && (
        <>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/registration">Registration</StyledLink>
        </>
      )}
    </Nav>
  );
};

export default Navbar;
