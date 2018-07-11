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
        console.log('no new deck');
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
      const error = AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
      if(!error) {
        resolve(decks);
      } else {
        reject({});
      }
    } catch (err) {
      reject(err);
      throw new Error('Error saving new deck in AsyncStorage: ', err);
    }
  });
  return promise;
};
