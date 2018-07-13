import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'DECKS';

export function getDecks() {
  const promise = new Promise(async (resolve, reject) => {
    try {
      const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
      if (decks !== null) {
        resolve(JSON.parse(decks));
      } else {
        await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify({}));
        resolve({});
      }
    } catch (err) {
      reject(err);
    }
  });
  return promise;
};

export function submitDeck(decks, deck, key) {
  const promise = new Promise(async (resolve, reject) => {
    try {
      decks[key] = deck;
      const error = await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
      if (!error) {
        resolve(deck);
      } else {
        reject({});
      }
    } catch (err) {
      reject(err);
    }
  });
  return promise;
};

export function deleteDeck(decks, key) {
  const promise = new Promise(async (resolve, reject) => {
    try {
      delete decks[key];
      const error = await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
      if(!error) {
        decks !== {}
        ? resolve(decks)
        : resolve({})
      } else {
        reject({});
      }
    } catch (err) {
      reject(err);
    }
  });
  return promise;
};

export function addCard(decks, key, question, answer) {
  const promise = new Promise(async (resolve, reject) => {
    try {
      const newQuestion = {
        question,
        answer,
        remember: 'not long'
      };

      const newQuestions = decks[key].questions.concat(newQuestion);

      decks[key] = {
        ...decks[key],
        questions: newQuestions
      };

      const error = await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));

      if (!error) {
        resolve(decks);
      } else {
        reject({});
      }
    } catch (err) {
      reject(err);
    }
  });
  return promise;
};
