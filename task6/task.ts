// Stwórz funkcję generateHuman() która będzie tworzyć obiekt o podanej niżej strukturze ale o losowych wartościach
// {name, surname, email:(w oparciu o name i surname),
// age:(przedział 18-85), phoneNr:random 9 numbers ,country:oneOf([PL,UK,USA])}
// oraz _id = objectId() - wykorzystać bibliotekę  https://www.npmjs.com/package/uuid

import { v4 as uuidv4 } from 'uuid';

const arrayOfHumans = require('./generated.json');

const countries = ['PL', 'UK', 'USA'];

interface Humansprops {
  name: string;
  email: string;
  age: number;
  phone: string;
}

interface Human {
  id: string;
  name: string;
  email: string;
  age: number;
  phone: string;
  country: string;
}

function getRandomNumber(arrayLength: number) {
  return Math.floor(Math.random() * arrayLength);
}

function generateHuman(inputHumansData: Humansprops[]): Human {
  const id = uuidv4();

  const selectedRandomHumanData = inputHumansData[getRandomNumber(inputHumansData.length)];
  const country = countries[getRandomNumber(countries.length)];

  const human: Human = {
    id,
    ...selectedRandomHumanData,
    country
  };
  return human;
}

export { generateHuman, arrayOfHumans };
