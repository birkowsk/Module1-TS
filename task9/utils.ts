function validateParameters<T>(array: T[], callback: any) {
  if (!Array.isArray(array) && typeof callback !== 'function') {
    throw new Error('Input is not an Array and Callback is not a function');
  }

  if (!array.length) {
    throw new Error('array is empty');
  }
}

export default validateParameters;
