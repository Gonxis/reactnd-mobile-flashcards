import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'DECKS';

export async function getDecks() {
  const promise = new Promise(async (resolve, reject) => {
    try {
      const decks = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

      if (decks !== null) {
        resolve(JSON.parse(decks))
      } else {
        resolve({});
      }
 
    } catch (err) {
      reject(err);
    }
  });
  return promise;
};

export function submitDeck(deck, key) {
  const promise = new Promise(async (resolve, reject) => {
    try {
      const newDeck = await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [key]: deck
      }));

      if (newDeck !== null) {
        resolve(newDeck);
      }

    } catch (err) {
      reject(err);
    }
  })
  return promise;
};

export async function deleteDeck(key) {
  try {
    const decksUpdated = await AsyncStorage.getItem(DECKS_STORAGE_KEY)
      .then(results => {
        const data = JSON.parse(results);
        data[key] = undefined;
        delete data[key];
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(data));
      });

    if (decksUpdated !== null) {
      console.log(decksUpdated);
      return decksUpdated;
    }
  } catch (err) {
    throw new Error('Error saving new deck in AsyncStorage: ', err);
  }
};
