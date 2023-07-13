import React from "react";

function FinishedScreen({ highscore, maxPossiblePoints, points, dispatch }) {
  const percentage = Math.trunc((points / maxPossiblePoints) * 100);

  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 70 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 70) emoji = "🥰";
  if (percentage >= 20 && percentage < 50) emoji = "🙂";
  if (percentage >= 5 && percentage < 20) emoji = "☹";
  if (percentage === 0) emoji = "😭";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored {points} <strong>points</strong> out of{" "}
        {maxPossiblePoints} points ({percentage})%
      </p>
      <p className="highscore">(Highscore: {highscore}) points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restartGame" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishedScreen;
