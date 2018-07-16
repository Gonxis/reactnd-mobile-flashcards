// Action Type Constants
export const actionTypes = {
  QUIZ_CORRECT: 'QUIZ_CORRECT',
  QUIZ_INCORRECT: 'QUIZ_INCORRECT',
  IS_QUIZ_DONE: 'IS_QUIZ_DONE',
  QUIZ_RESET: 'QUIZ_RESET',
  UPDATE_SCORE: 'UPDATE_SCORE'
};

// Action Creators
export function quizCorrect(currentIndex, score) {
  return {
    type: actionTypes.QUIZ_CORRECT,
    currentIndex,
    score
  }
};

export function quizIncorrect(currentIndex) {
  return {
    type: actionTypes.QUIZ_INCORRECT,
    currentIndex
  }
};

export function isQuizDone(isDone) {
  return {
    type: actionTypes.IS_QUIZ_DONE,
    isDone
  }
};

export function quizReset(currentIndex, score, isDone) {
  return {
    type: actionTypes.QUIZ_RESET,
    currentIndex,
    score,
    isDone
  }
};

export function updateScore(score) {
  return {
    type: actionTypes.UPDATE_SCORE,
    score
  }
};
