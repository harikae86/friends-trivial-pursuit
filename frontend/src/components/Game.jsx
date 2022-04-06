import { useCallback, useEffect, useState } from "react";
import loginGuard from "./Auth/loginGuard";
import Question from "./Question";

const fetchQuestion = async () => {
  const response = await fetch("/api/game");
  const data = await response.json();
  console.log(data);
  return data;
};

const postAnswer = (answerIndex) => {
  return fetch("/api/game", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ answerIndex }),
  }).then((res) => {
    return res.ok;
  });
};

const Game = () => {
  const [question, setQuestion] = useState({
    question: "loading",
    answers: ["loading", "loading", "loading", "loading"],
  });
  const [result, setResult] = useState(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  const getCurrentQuestion = useCallback(() => {
    fetchQuestion().then((data) => {
      if (data.good) {
        setResult(data.good);
      } else {
        setQuestion({ question: data.text, answers: data.answers });
      }
    });
  }, []);

  useEffect(() => {
    getCurrentQuestion();
  }, [getCurrentQuestion]);

  const onSelectAnswer = (index) => {
    setActiveIndex(index);
  };

  const onSubmitAnswer = () => {
    if (activeIndex === -1) {
      return;
    }
    postAnswer(activeIndex).then(() => {
      setActiveIndex(-1);
      getCurrentQuestion();
    });
  };
  if (result !== null) {
    return (
      <>
        <h1>Good answers: {result}</h1>
      </>
    );
  }

  return (
    <Question
      {...question}
      activeIndex={activeIndex}
      onSelectAnswer={onSelectAnswer}
      onSubmitAnswer={onSubmitAnswer}
    />
  );
};

export default loginGuard(Game);
