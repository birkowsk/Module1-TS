// za pomocą metody .reduce wbudowanej w array
// odtwórz działanie innych metod:
import validateParameters from './utils';

const test: number[] = [1, 2, 3, 4, 5];

type mapFnCallback<T, U> = (element: T, index: number, array: T[]) => U;

function mapFn<T, U>(array: T[], callback: mapFnCallback<T, U>): U[] {
  validateParameters(array, callback);
  const initial: U[] = [];

  return array.reduce((accumulator, currentValue, index, array) => {
    const result = callback(currentValue, index, array);
    accumulator.push(result);
    return accumulator;
  }, initial);
}

type filterFnCallback<T> = (element: T, index: number, array: T[]) => boolean;

function filterFn<T>(array: T[], callback: filterFnCallback<T>): T[] {
  validateParameters(array, callback);

  const initial: T[] = [];

  return array.reduce((accumulator, currentValue, index, refArray) => {
    const condition = callback(currentValue, index, refArray);
    if (condition) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, initial);
}

type everyFnCallback<T> = (element: T, index: number, array: T[]) => boolean;

function everyFn<T>(array: T[], callback: everyFnCallback<T>) {
  validateParameters(array, callback);
  const clone = [...array];

  return clone.reduce((acc, cr, index, refArray) => {
    if (!callback(cr, index, array)) {
      refArray.splice(index, 1);
      return false;
    }
    return acc;
  }, true);
}

type someFnCallback<T> = (element: T, index: number, array: T[]) => boolean;

function someFn<T>(array: T[], callback: someFnCallback<T>) {
  validateParameters(array, callback);
  const clone = [...array];

  return clone.reduce((acc, cr, index, refArray) => {
    if (callback(cr, index, array)) {
      refArray.splice(index, 1);
      return true;
    }
    return acc;
  }, false);
}

export { mapFn, test, someFn, everyFn, filterFn };
