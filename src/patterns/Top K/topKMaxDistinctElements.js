// Problem: Given an array of numbers and a number ‘K’, 
// we need to remove ‘K’ numbers from the array such that we are left with maximum distinct numbers.

// Output: 
// Maximum distinct numbers after removing K numbers: 3
// Maximum distinct numbers after removing K numbers: 2
// Maximum distinct numbers after removing K numbers: 3

const Heap = require('../../node_modules/collections/heap');

const find_maximum_distinct_elements = function (nums, k) {
  if (nums.length <= k) {
    return 0;
  }

  // create a key-value object to store nums with their frequency
  let frequency_map = {};
  nums.forEach((num) => {
    if (num in frequency_map) {
      frequency_map[num]++;
    } else {
      frequency_map[num] = 1;
    }
  });

  // create min-heap based on frequency and distinct array for unique nums 
  let minHeap = new Heap([], null, (a, b) => b[1] - a[1]);
  let distinct_nums = [];
  Object.keys(frequency_map).forEach((element) => {
    if (frequency_map[element] === 1) {
      distinct_nums.push(element);
     } else {
      minHeap.push([element, frequency_map[element]]);
    }
  });

  // pop the heap and decrement the frequency
  // If new frequency equal to 0, push to distinct_array, else push it to heap
  // for K times, pop the max-heap, decrement the frequency and push it back again

  let count = 0;
  while (minHeap.length > 0 && count <= k) {
    count++; 
    [num, frequency] = minHeap.pop();
    let temp = frequency - 1;
    if (temp === 0) {
      distinct_nums.push(num);
    } else {
      minHeap.push([num, temp]);
    }
  }

  // remove from distinct_array if count still not equal to K
  while (count <= k) {
    count++;
    distinct_nums.pop();
  }

  // return count
  return distinct_nums.length;
};

console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([7, 3, 5, 8, 5, 3, 3], 2)}`)
console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([3, 5, 12, 11, 12], 3)}`)
console.log(`Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements([1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5], 2)}`)
