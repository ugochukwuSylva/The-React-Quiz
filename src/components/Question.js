import React from "react";
import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

function Question() {
  const { questions, answer, index, dispatch } = useQuiz();

  return (
    <div>
      <h4>{questions[index].question}</h4>
      <Options
        questions={questions[index]}
        answer={answer}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Question;
