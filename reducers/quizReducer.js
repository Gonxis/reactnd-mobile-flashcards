import { actionTypes } from '../actions/quizActions';

const initState = {
  quiz: {
    currentIndex: 0,
    score: 0,
    isDone: false
  }
};

export function quizReducer(state = initState, action) {
  switch(action.type) {
    case actionTypes.QUIZ_CORRECT:
      return {
        quiz: {
          ...state.quiz,
          currentIndex: action.currentIndex,
          score: action.score
        }
      }
    case actionTypes.QUIZ_INCORRECT:
      return {
        quiz: {
          ...state.quiz,
          currentIndex: action.currentIndex
        }
      }
    case actionTypes.IS_QUIZ_DONE:
      return {
        quiz: {
          ...state.quiz,
          isDone: action.isDone
        }
      }
    default:
      return state
  }
};
