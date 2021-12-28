// Problem: Given an unsorted array of numbers, find the top ‘K’ frequently occurring numbers in it.

// Output 1: Here are the K frequent numbers: 12,11
// Output 2: Here are the K frequent numbers: 12,11 

const Heap = require('../../node_modules/collections/heap'); 

const find_k_frequent_numbers = function(nums, k) {
  let topNumbers = [];

  // Create a key-value structure to store frequency of elements
  let num_frequency_map = {};

  nums.forEach(num => {
    if (num in num_frequency_map) {
      num_frequency_map[num]++;     // increment value if key for num exists 
    } else {
      num_frequency_map[num] = 1;  // add new key for num and assign value as 1
    }
  });

  // Create Min Heap of length K to store top K frequent elements
  let minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  Object.keys(num_frequency_map).forEach(element => {
    minHeap.push([num_frequency_map[element], element]);
    if (minHeap.length > k) {
      minHeap.pop();
    }
  });

  // Parse Min-Heap to retrieve just the elements into result
  while (minHeap.length > 0) {
    topNumbers.push(minHeap.pop()[1]);
  }

  // Return result
  return topNumbers;
};


console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([1, 3, 5, 12, 11, 12, 11], 2)}`)
// console.log(`Here are the K frequent numbers: ${find_k_frequent_numbers([5, 12, 11, 3, 11], 2)}`)

