// Problem: 
// Given a sorted number array and two integers ‘K’ and ‘X’, find ‘K’ closest numbers to ‘X’ in the array.
// Return the numbers in the sorted order. ‘X’ is not necessarily present in the array.

// Output: 
// 'K' closest numbers to 'X' are: 6,7,8
// 'K' closest numbers to 'X' are: 4,5,6
// 'K' closest numbers to 'X' are: 5,6,9

const Heap = require('../../node_modules/collections/heap');

const find_closest_elements = function (arr, K, X) {
  let result = [];

  // NOTE: Since the arr is sorted, use Binary Search to find the index of X in arr.
  // Add and Subtract K index from this and only use these 2 * K elements to form Heap
  
  // create a key-value structure to store num and its distance from X
  let closest_map = {};
  arr.forEach((num) => {
    closest_map[num] = Math.abs(num - X);
  });

  // create Max-Heap of length K to store K closest numbers to X
  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  Object.keys(closest_map).forEach((num) => {
    maxHeap.push([closest_map[num], num])
    if (maxHeap.length > K) {
      maxHeap.pop();
    } 
  });

  // create a result array to retrieve nums thats are K closest to X
  while (maxHeap.length > 0) {
    result.push(maxHeap.pop()[1]);
  }
  
  // sort result array
  result.sort();

  // return result
  return result;
};


console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([5, 6, 7, 8, 9], 3, 7)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 6)}`)
console.log(`'K' closest numbers to 'X' are: ${find_closest_elements([2, 4, 5, 6, 9], 3, 10)}`)