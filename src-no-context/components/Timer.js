import React, { useEffect } from "react";

function Timer({ dispatch, counter }) {
  const mins = Math.floor(counter / 60);
  const sec = counter % 60;

  useEffect(() => {
    const tick = setInterval(() => {
      dispatch({
        type: "countDown",
      });
    }, 1000);

    return () => clearInterval(tick);
  }, [dispatch]);

  return (
    <div className="timer">
      {mins < 10 && "0"}
      {mins}: {sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;
