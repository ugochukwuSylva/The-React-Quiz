import React from "react";
import { useQuiz } from "../context/QuizContext";

function Progress() {
  const { index, numQuestions, points, answer, maxPossiblePoints } = useQuiz();

  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        {points} / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
