function throwsErrorWhenInputsAreNaN(...inputs: number[]) {
  inputs.forEach((el) => {
    if (Number.isNaN(el)) {
      throw new Error('input cannot be NaN');
    }
  });
}
export default throwsErrorWhenInputsAreNaN;
