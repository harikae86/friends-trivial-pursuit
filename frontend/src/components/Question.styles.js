import styled from "styled-components";

export const QuestionWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
`;

export const QuestionText = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 0.3rem;
  padding-bottom: 1.5rem;

  @media screen and (min-width: 600px) {
    font-size: 2.5rem;
  }
`;

export const Answers = styled.ul`
  padding: 0;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-evenly;
    padding-bottom: 2rem;
  }
`;

export const Answer = styled.li`
  padding: 0.5rem;
  transition: ease all 0.2s;
  font-size: 1.2rem;

  :hover {
    background-color: rgb(2, 178, 231);
    border-radius: 10px;
    cursor: pointer;
  }
`;
