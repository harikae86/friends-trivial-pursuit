const Question = (props) => {
  return (
    <>
      <h1>{props.question}</h1>
      <ul>
        {props.answers?.map((answer, index) => {
          return props.activeIndex === index ? (
            <li
              onClick={() => {
                props.onSelectAnswer(index);
              }}
              style={{ color: "blue" }}
              key={index}
            >
              {answer}
            </li>
          ) : (
            <li
              onClick={() => {
                props.onSelectAnswer(index);
              }}
              key={index}
            >
              {answer}
            </li>
          );
        })}
      </ul>
      <button onClick={props.onSubmitAnswer}>Send</button>
    </>
  );
};

export default Question;
