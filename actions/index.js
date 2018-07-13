import { getDecks, submitDeck, deleteDeck } from '../utils/api';

// Action Type Constants
export const actionTypes = {
  GET_DECKS: 'GET_DECKS',
  ADD_DECK: 'ADD_DECK',
  REMOVE_DECK: 'REMOVE_DECK'
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
    const { decks } = getState();
    submitDeck(decks, deck, key)
      .then(newDeck => {
        dispatch(addDeckToStorage(newDeck));
      });
  }
};

export function removeDeckFromAPI(key) {
  return (dispatch, getState) => {
    const { decks } = getState();
    deleteDeck(decks, key)
    .then(updatedDecks => {
        dispatch(removeDeckFromStorage(updatedDecks));
      });
  }
};
