import styled from "styled-components";

export const Form = styled.form`
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: space-evenly;
`;

export const Input = styled.input`
  padding: 0.5rem 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 10px;
`;

export const Button = styled.button`
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  background-color: rgb(2, 178, 231);
  border: none;
  border-radius: 10px;
  transition: ease all 0.2s;

  :hover {
    background-color: rgb(233, 30, 35);
    cursor: pointer;
  }
`;
