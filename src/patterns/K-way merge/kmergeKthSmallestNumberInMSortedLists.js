// Problem: Given ‘M’ sorted arrays, find the K’th smallest number among all the arrays.

// Output: Kth smallest number is: 4

const Heap = require('collections/heap');

const find_Kth_smallest = function(lists, k) {
  let number = -1;
  let count = 1;

  // check input
  if (lists.length === 0 || k <= 0) {
    return number;
  }

  // create min heap
  let minHeap = new Heap([], null, (a, b) => b[0] - a[0]);

  // put the 1st element of each list in the min heap
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].length > 0) {
      minHeap.push([lists[i][0], 0, lists[i]]);
    }
  }

  // take the smallest(i.e., top) element form the min heap, if the running count is equal to k return the number
  while (minHeap.length > 0) {
    const [current_number, current_index, current_list] = minHeap.pop();

    if (count === k) {
      number = current_number;
      break;
    }

    // if the array of the top element has more elements, add the next element to the heap
    const new_index = current_index + 1;
    if (current_list.length > new_index) {
      minHeap.push([current_list[new_index], new_index, current_list]);
    }

    count++;
  }

  return number;
};


console.log(`Kth smallest number is: ${find_Kth_smallest([[2, 6, 8], [3, 6, 7], [1, 3, 4]], 5)}`)
