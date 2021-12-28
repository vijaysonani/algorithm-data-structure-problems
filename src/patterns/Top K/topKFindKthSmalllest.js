// Problem:
// Given an unsorted array of numbers, find Kth smallest number in it.

// Please note that it is the Kth smallest number in the sorted order, not the Kth distinct element.

// Note: For a detailed discussion about different approaches to solve this problem, take a look at Kth Smallest Number.

// Output:
// Kth smallest number is: 5
// Kth smallest number is: 5
// Kth smallest number is: 11

const Heap = require('../../node_modules/collections/heap');

const find_Kth_smallest_number = function (nums, k) {
  let maxHeap = new Heap([], null, (a, b) => a - b);

  for (let i = 0; i < k; i++) {
    maxHeap.push(nums[i]);
  }

  for (let i = k; i < nums.length; i++) {
    let current = nums[i];
    if (current < maxHeap.peek()) {
      maxHeap.pop();
      maxHeap.push(current);
    }
  }

  return maxHeap.peek();
};


console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`)
// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`)
console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`)
