import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 15%;
  width: 100vw;
  background-color: rgb(2, 178, 231);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.3rem;
  @media screen and (min-width: 600px) {
    flex-direction: row;
    font-size: 2rem;
    height: 10%;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 0.5rem;
  :hover {
    background-color: rgb(233, 30, 35);
    border-radius: 10px;
  }
`;
