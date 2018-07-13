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

// export function getDecksFromAPI(cb = () => {} ) {
//   return dispatch => {
//     getDecks()
//     .then(decks => {
//         dispatch(getDecksFromStorage(decks));
//         cb({ success: true });
//         debugger;
//       })
//       .catch(err => cb({ error: err }));
//     }
// };

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

export function addCardToAPI(key, question, answer) {
  return (dispatch, getState) => {
    const { decks } = getState();
    addCard(decks, key, question, answer)
      .then(updatedDecks => {
        dispatch(addCardToStorage(updatedDecks));
      });
  }
};
