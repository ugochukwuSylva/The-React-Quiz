import React, { createContext, useContext } from "react";
import { useReducer } from "react";
const QuizProvider = createContext();

const SEC_PER_QUESTION = 30;

function QuizContext({ children }) {
  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return { ...state, questions: action.payload, status: "ready" };
      case "dataFailed":
        return { ...state, status: "error" };
      case "start":
        return {
          ...state,
          status: "active",
          counter: state.questions.length * SEC_PER_QUESTION,
        };
      case "newAnswer":
        const question = state.questions[state.index];
        return {
          ...state,
          answer: action.payload,
          points:
            question.correctOption === action.payload
              ? state.points + question.points
              : state.points,
        };
      case "nextQuestion":
        return { ...state, index: state.index + 1, answer: null };
      case "finishQuiz":
        return {
          ...state,
          status: "finish",
          highscore:
            state.highscore > state.points ? state.highscore : state.points,
        };
      case "restartGame":
        return {
          ...initialState,
          status: "ready",
          questions: state.questions,
        };
      case "countDown":
        return {
          ...state,
          counter: state.counter - 1,
          status: state.counter === 0 ? "finish" : state.status,
        };

      default:
        return "Unknown action";
    }
  }

  const initialState = {
    questions: [],
    // 'loading', 'error', 'ready', 'active', 'finished'
    status: "loading",
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    counter: null,
  };

  const [
    { status, questions, index, answer, points, highscore, counter },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  return (
    <QuizProvider.Provider
      value={{
        status,
        questions,
        index,
        answer,
        points,
        highscore,
        counter,
        dispatch,
        maxPossiblePoints,
        numQuestions,
      }}
    >
      {children}
    </QuizProvider.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizProvider);
  if (context === undefined)
    throw new Error("useQuiz was used outside the context");
  return context;
}

export { QuizContext, useQuiz };
