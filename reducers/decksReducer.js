import { actionTypes } from '../actions/decksActions';

const initState = {
  decks: {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces',
          remember: 'not long'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event',
          remember: 'a while'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.',
          remember: 'a lot of time'
        }
      ]
    }
  }
};

export function decksReducer(state = { decks: {} }, action) {
  switch(action.type) {
    case actionTypes.GET_DECKS:
      return {
        ...state,
        decks: action.decks
      }
    case actionTypes.ADD_DECK:
      return {
        decks: {
          ...state.decks, 
          [action.deck.title]: action.deck
        }
      }
    case actionTypes.REMOVE_DECK:
      return {
        ...state,
        decks: action.decks
      }
    case actionTypes.ADD_CARD:
      return {
        ...state,
        decks: action.decks
      }
    default:
      return state
  }
};
