import React from "react";

function NextButton({ answer, dispatch, index, numQuestions }) {
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
