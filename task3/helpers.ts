import { throwsErrorWhenInputsAreNaN, throwsErrorWhenMaxLowerThanMax, throwsErrorWhenNegativeNumbers } from './utils';

function generateArrayWithRandomNumbers(howManyNumbers = 10, min = 1, max = 10): number[] {
  throwsErrorWhenInputsAreNaN(howManyNumbers, min, max);
  throwsErrorWhenNegativeNumbers(howManyNumbers, min, max);
  throwsErrorWhenMaxLowerThanMax(min, max);

  const arrayOfTen: number[] = new Array(howManyNumbers);
  const randomArray = arrayOfTen.fill(0).map((_) => Math.floor(Math.random() * max) + min);
  return randomArray;
}

export default generateArrayWithRandomNumbers;
