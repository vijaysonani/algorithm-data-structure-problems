// Problem: Given ‘M’ sorted arrays,
// find the smallest range that includes at least one number from each of the ‘M’ lists.

// Output: Smallest range is: 4,7
// Output: Smallest range is: 9,12

const Heap = require('collections/heap');

const find_smallest_range = function (lists) {
  let minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  let rangeStart = 0;
  let rangeEnd = Infinity;
  let currentMax = -Infinity;

  // put the 1st element of each array in the max heap
  lists.forEach((list) => {
    minHeap.push([list[0], 0, list]);
    currentMax = Math.max(currentMax, list[0]);
  });

  // take smallest(top) element from min heap, if it gives us smaller range, update the ranges
  // if the array of the top element has more elements, insert the next element in heap
  while (minHeap.length === lists.length) {
    const [current_num, current_index, current_list] = minHeap.pop();

    if (rangeEnd - rangeStart > currentMax - current_num) {
      rangeStart = current_num;
      rangeEnd = currentMax;
    }

    const new_index = current_index + 1;
    if (current_list.length > new_index) {
      // insert the next element in the heap
      minHeap.push([current_list[new_index], new_index, current_list]);
      currentMax = Math.max(currentMax, current_list[new_index]);
    }
  }

  return [rangeStart, rangeEnd];
};


console.log(`Smallest range is: ${find_smallest_range([[1, 5, 8], [4, 12], [7, 8, 10]])}`)
console.log(`Smallest range is: ${find_smallest_range([[1, 9], [4, 12], [7, 10, 16]])}`)