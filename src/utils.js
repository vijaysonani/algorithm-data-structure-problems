/**
 * Compare if 2 Arrays are equal
 * @param {*} a - first array
 * @param {*} b - second array
 * @returns true of both arrays have same length and all elements are equal
 */
const isArraysEqual = (a, b) => {
  if (a.length === b.length) {
   return a.every((value, index) => value === b[index])
  }

  return false;
};


