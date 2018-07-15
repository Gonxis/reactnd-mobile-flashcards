// Action Type Constants
export const actionTypes = {
  QUIZ_CORRECT: 'QUIZ_CORRECT',
  QUIZ_INCORRECT: 'QUIZ_INCORRECT',
  IS_QUIZ_DONE: 'IS_QUIZ_DONE'
};

// Action Creators
export function quizCorrect(currentIndex, score) {
  return {
    type: actionTypes.QUIZ_CORRECT,
    currentIndex: currentIndex,
    score: score
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
