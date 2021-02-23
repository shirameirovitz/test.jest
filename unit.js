
// TASK
// Pre - work:
// - Init a new repo with npm init -y
// - Run `npm i jest --save-dev`
// - Add this line to your package.json under 'scripts'= "test": "jest --verbose",
// - create mySlice.test.js file
//
// In mySlice.test.js write a test for every functionality and edge case you find.
/**
 * mySlice should return a *new* array which contains items from the input array.
 * startIndex should be smaller than endIndex.
 * Negative indices should be counted from the end of the array.
 * startIndex should default to 0.
 * endIndex should default to array size
 *
 * @param {Array<T>} inputArr
 * @param {number} [startIndex = 0]
 * @param {number} [endIndex = inputArr.length]
 *
 * @returns {Array<T>}
 *
 */
const mySlice = (inputArr, startIndex = 0, endIndex = inputArr.length) => {
    throw { name: "Unimplemented function", message: "TDD me" };
  };const mySlice = (inputArr, startIndex = 0, endIndex = inputArr.length) => {
    const sliced = [];
    const fixedStartIndex =
      startIndex < 0 ? inputArr.length + startIndex : startIndex;
  
    const fixedEndIndex = endIndex < 0 ? inputArr.length + endIndex : endIndex;
  
    for (let i = fixedStartIndex; i < fixedEndIndex; i++) {
      sliced.push(inputArr[i]);
    }
    return sliced;
    //   throw { name: "Unimplemented function", message: "TDD me" };
  };
  
  module.exports = { mySlice };
  