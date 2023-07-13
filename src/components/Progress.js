import React from "react";

function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
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
