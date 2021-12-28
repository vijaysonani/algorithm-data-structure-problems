// Problem: Given an unsorted array of numbers, find the ‘K’ largest numbers in it.

// Output: 
// Here are the top K numbers: 5,12,11
// Here are the top K numbers: 11,12,12

const Heap = require('../../node_modules/collections/heap');

const find_k_largest_numbers = function(nums, k) {
  let result = [];

  const minHeap = new Heap([], null, (a, b) => b - a);

  for (let i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    let current = nums[i];
    if (current > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(current);
    }
  };
  return minHeap.toArray();
};


console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`)
console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`)
