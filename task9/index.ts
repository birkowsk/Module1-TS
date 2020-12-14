import { everyFn, filterFn, mapFn, someFn, test } from './task';

function main() {
  // mapFn(test, (element, index, array) => {
  //   console.log(element);
  // });
  // filterFn(test, (element, index, array) => {
  //   console.log(element > 3);
  //   return element > 3;
  // });

  someFn(test, (element, index, array) => {
    console.log(element > 3);
    return element > 3;
  });
  // everyFn(test, (element, index, array) => {
  //   console.log(element > 3);
  //   return element > 3;
  // });
}

export default main;
