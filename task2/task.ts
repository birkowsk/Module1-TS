// Utwórz funkcję, która jako argumenty przyjmie trzy liczby. Funkcja powinna zwrócić true
// jeśli z odcinków o długości przekazanych w argumentach
// można zbudować trójkąt prostokątny, lub informację że z podanych długości
// nie można utworzyć trójkąta prostokątnego

import inputsIsNaN from './utils';

function isRectangularTriangle(x1: number, x2: number, x3: number): boolean {
  inputsIsNaN(x1, x2, x3);

  const [a, b, c] = [x1, x2, x3].sort();
  const areAllPositiveNumbers = a > 0;

  if (!areAllPositiveNumbers) {
    throw new Error('Enter three positive numeric values');
  }

  const canTriangleBeBuild = a + b > c;
  if (!canTriangleBeBuild) {
    throw new Error("You can't built triangle with these sides");
  }

  const result = a ** 2 + b ** 2 === c ** 2;

  return result;
}

export default isRectangularTriangle;
