import getMyAge from './task1';

function main() {
  const result1 = getMyAge(new Date(1990, 1, 1));
  const result2 = getMyAge('1994');
  const result3 = getMyAge('1990');

  console.log(result1, result2, result3);
}

export default main;
