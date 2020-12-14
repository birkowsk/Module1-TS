function throwsErrorWhenInputsAreNaN(...inputs: number[]) {
  inputs.forEach((el) => {
    if (Number.isNaN(el)) {
      throw new Error('input cannot be NaN');
    }
  });
}

function throwsErrorWhenMaxLowerThanMax(min: number, max: number) {
  if (min >= max) {
    throw new Error('min must be lower than max');
  }
}

function throwsErrorWhenNegativeNumbers(...inputs: number[]) {
  inputs.forEach((el) => {
    if (el <= 0) {
      throw new Error('input must be positive numbers');
    }
  });
}

export { throwsErrorWhenInputsAreNaN, throwsErrorWhenMaxLowerThanMax, throwsErrorWhenNegativeNumbers };
