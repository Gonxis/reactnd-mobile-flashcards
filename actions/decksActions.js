import { getDecks, submitDeck, deleteDeck, addCard } from '../utils/api';

// Action Type Constants
export const actionTypes = {
  GET_DECKS: 'GET_DECKS',
  ADD_DECK: 'ADD_DECK',
  REMOVE_DECK: 'REMOVE_DECK',
  ADD_CARD: 'ADD_CARD'
};

// Action Creators
export function getDecksFromStorage(decks) {
  return {
    type: actionTypes.GET_DECKS,
    decks
  }
};

export function addDeckToStorage(deck) {
  return {
    type: actionTypes.ADD_DECK,
    deck
  }
};

export function removeDeckFromStorage(decks) {
  return {
    type: actionTypes.REMOVE_DECK,
    decks
  }
};

export function addCardToStorage(decks) {
  return {
    type: actionTypes.ADD_CARD,
    decks
  }
};

// Thunks
export function getDecksFromAPI() {
  return dispatch => {
    getDecks()
      .then(decks => {
        dispatch(getDecksFromStorage(decks));
      });
  }
};

export function addDeckToAPI(deck, key) {
  return (dispatch, getState) => {
    const { decksReducer } = getState();
    submitDeck(decksReducer.decks, deck, key)
      .then(newDeck => {
        dispatch(addDeckToStorage(newDeck));
      });
  }
};

export function removeDeckFromAPI(key) {
  return (dispatch, getState) => {
    const { decksReducer } = getState();
    deleteDeck(decksReducer.decks, key)
    .then(updatedDecks => {
        dispatch(removeDeckFromStorage(updatedDecks));
      });
  }
};

export function addCardToAPI(key, question, answer) {
  return (dispatch, getState) => {
    const { decksReducer } = getState();
    addCard(decksReducer.decks, key, question, answer)
      .then(updatedDecks => {
        dispatch(addCardToStorage(updatedDecks));
      });
  }
};
