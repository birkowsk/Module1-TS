// Wygeneruj tablicę zawierającą X całkowitych liczb losowych z zakresu min
// i max oraz tablicę zawierającą 10 takich tablic
import generateArrayWithRandomNumbers from './helpers';
import { throwsErrorWhenInputsAreNaN, throwsErrorWhenNegativeNumbers } from './utils';
// Array<Array<number>> === number[][]
function generateArrayOfArrays(howManyArrays = NaN): Array<Array<number>> {
  throwsErrorWhenInputsAreNaN(howManyArrays);
  throwsErrorWhenNegativeNumbers(howManyArrays);

  const generatedArrayOfArrays = [...new Array(howManyArrays)].map((_) => generateArrayWithRandomNumbers());
  return generatedArrayOfArrays;
}

export default generateArrayOfArrays;
