import isRectangularTriangle from './task';

function main() {
  const cond2 = isRectangularTriangle(3, 4, 5);
  const cond3 = isRectangularTriangle(4, 3, 5);
  const cond4 = isRectangularTriangle(4, 4, 4);
  console.log(cond2, cond3, cond4);
}

export default main;
