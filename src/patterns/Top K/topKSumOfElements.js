// Problem: Given an array, find the sum of all numbers between the K1’th and K2’th smallest elements of that array.

// Output: 
// Sum of all numbers between k1 and k2 smallest numbers: 23
// Sum of all numbers between k1 and k2 smallest numbers: 12

const Heap = require('collections/heap');

const find_sum_of_elements = function (nums, k1, k2) {
  if (nums.length < k1 || nums.length < k2) return -1;
  let result_sum = 0;

  // create min heap to save nums in increasing order
  let minHeap = new Heap([], null, (a, b) => b - a);
  nums.forEach((num) => {
    minHeap.push(num);
  });
  
  // pop from min heap till K1
  for (let i = 0; i < k1; i++) {
    minHeap.pop();
  }

  // pop from min heap and add it to result_sum till k2
  for (let i = k1 + 1; i < k2; i++) {
    result_sum += minHeap.pop();
  }

  // return result
  return result_sum;
};


console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([1, 3, 12, 5, 15, 11], 3, 6)}`)
console.log(`Sum of all numbers between k1 and k2 smallest numbers: ${find_sum_of_elements([3, 5, 8, 7], 1, 4)}`)
