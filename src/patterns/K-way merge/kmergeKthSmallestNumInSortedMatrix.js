// Problem: Given an N * NN∗N matrix where each row and column is sorted in ascending order, 
// find the Kth smallest element in the matrix.

// Output: Kth smallest number is: 7

const Heap = require('collections/heap');

const find_Kth_smallest = function(matrix, k) {
  let number = -1;

  // create heap
  let minHeap = new Heap([], null, (a,b) => b[0] - a[0]);

  // initialize heap
  for (let i = 0; i < matrix.length; i++) {
    minHeap.push([matrix[i][0], 0, matrix[i]]);
  }

  // iterate over lists && keep track of how many items are popped
  let count = 0;
  while (minHeap.length > 0) {
    const [num, index, list] = minHeap.pop();
    count++;

    if (count === k) {
      number = num;
      break;
    }

    const new_index = index + 1;
    if (list.length > new_index) {
      minHeap.push([list[new_index], new_index, list]);
    }
  }

  return number;
};


console.log(`Kth smallest number is: ${find_Kth_smallest([[2, 6, 8], [3, 7, 10], [5, 8, 11]], 5)}`)
