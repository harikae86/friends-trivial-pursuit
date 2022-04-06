import {
  QuestionText,
  QuestionWrapper,
  Answers,
  Answer,
} from "./Question.styles";
import { Button } from "./UserForm.styles";

const Question = (props) => {
  return (
    <QuestionWrapper>
      <QuestionText>{props.question}</QuestionText>
      <Answers>
        {props.answers?.map((answer, index) => {
          return props.activeIndex === index ? (
            <Answer
              onClick={() => {
                props.onSelectAnswer(index);
              }}
              style={{ color: "rgb(233, 30, 35)" }}
              key={index}
            >
              {answer}
            </Answer>
          ) : (
            <Answer
              onClick={() => {
                props.onSelectAnswer(index);
              }}
              key={index}
            >
              {answer}
            </Answer>
          );
        })}
      </Answers>
      <Button onClick={props.onSubmitAnswer}>Send</Button>
    </QuestionWrapper>
  );
};

export default Question;
