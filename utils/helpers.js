// https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
export function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
};
