// Stwórz tablicę zawierającą 15 wyrazów. Utwórz funkcję która jako argument przyjmuje wyraz.
// Funkcja ma sprawdzić czy fraza występuje w tablicy. Jeśli tak ma zwrócić informacje
// o tym elemencie (pozycja, wartość).
// Jeśli nie, zwraca powiadomienie że szukanej frazy brak w tablicy."

const inputData = [
  'Marian',
  'Adam',
  'Paweł',
  'Jan',
  'Karol',
  'Ula',
  'Tomek',
  'Majonez',
  'Pizza',
  'Mutant',
  'Klamka',
  'Yeti',
  'Klatka',
  'Basen',
  'Lama'
];

type foundTuple = [string, number];

function findPhraseInArray(array: string[], phrase: string) {
  if (phrase.length < 1) {
    throw new Error('Input value is too short, please enter min 2 letters');
  }

  const lowerArray = array.map((x) => x.toLowerCase());

  const lowerPhrase = phrase.toLowerCase();

  const initial: foundTuple[] = [];

  const result = lowerArray.reduce((accumulator, currentValue, index) => {
    if (currentValue.includes(lowerPhrase)) {
      accumulator.push([currentValue, index]);
    }
    return accumulator;
  }, initial);

  return result;
}

export { findPhraseInArray, inputData };
