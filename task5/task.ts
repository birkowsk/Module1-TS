//  Masz daną tablicę: const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
//  Napisz funkcję, która zwróci nową tablicę zawierającą tylko parzyste liczby z tablicy numbers.

const numbers: number[] = [2, 5, 7, 10, 34, 16, 879, 1];

function evenNum(input: number[]): number[] {
  return input.filter((n) => !(n % 2));
}

export { evenNum, numbers };
