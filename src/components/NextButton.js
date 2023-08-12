import React from "react";
import { useQuiz } from "../context/QuizContext";

function NextButton() {
  const { answer, dispatch, index, numQuestions } = useQuiz();

  if (answer !== null)
    return (
      <>
        {index < numQuestions - 1 && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button>
        )}

        {index === numQuestions - 1 && (
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "finishQuiz" })}
          >
            Finish
          </button>
        )}
      </>
    );
}

export default NextButton;
