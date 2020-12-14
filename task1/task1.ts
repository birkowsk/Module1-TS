// Utwórz funkcję, która jako argument przyjmuje Twój rok urodzenia. Funkcja powinna zwrócić
// Twój aktualny wiek niezależnie od typu inputa, który weźmie

type AllowedTypes = Date | number | string;

function throwErrorIfNaN(input: string | number) {
  const isNan = isNaN(Number(input));

  if (isNan) {
    throw new Error('input cannot be NaN');
  }
}

function getMyAge(input: AllowedTypes): number {
  let parsedYear = 0;

  if (input instanceof Date) {
    const inputYear = input.getUTCFullYear();
    throwErrorIfNaN(inputYear);
    parsedYear = inputYear;
  }

  if (typeof input === 'string') {
    const parsedInput = parseInt(input);
    throwErrorIfNaN(parsedInput);
    parsedYear = parsedInput;
  }

  if (typeof input === 'number') {
    throwErrorIfNaN(input);
    parsedYear = input;
  }

  const actualYear = new Date().getUTCFullYear();

  if (parsedYear < 1900) {
    throw new Error('Please enter your correct age - you are cannot be that old');
  }

  if (parsedYear > actualYear) {
    throw new Error('Please enter your correct age - you are cannot be from future');
  }

  return actualYear - parsedYear;
}

export default getMyAge;
