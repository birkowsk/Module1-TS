// stwórz funkcję agregującą array aggregateIntoChunks w losowej długości chunki
// każdy chunk powienien mieć od 4 do 7 elementów
// ostatni chunk też powinien być długości od 4 do 7
const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// gdy ustawimy typ accumulator: string[] wyrzuci bład na test "Argument of type 'string[]'
//  is not assignable to parameter of type 'string'."

type chunk<T> = Array<T>;

function aggregateIntoChunks<T>(inputArray: T[]): Array<chunk<T>> {
  if (inputArray.length < 4) {
    throw new Error('input does not contain enough elements');
  }

  const clone = [...inputArray];

  const initial: chunk<T>[] = [];

  const result = clone.reduce((accumulator, currentValue, index, array) => {
    const generateRandomNumber = Math.floor(Math.random() * (7 - 4) + 4);
    const test = array.splice(0, generateRandomNumber);
    accumulator.push(test);
    return accumulator;
  }, initial);

  if (clone.length > 0) {
    return aggregateIntoChunks(inputArray);
  }

  return result;
}
export { aggregateIntoChunks, alphabet };
