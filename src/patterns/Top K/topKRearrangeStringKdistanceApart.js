// Problem: Given a string and a number ‘K’, find if the string can be rearranged such that the same characters are at least ‘K’ distance apart from each other.

// Output: 
// Reorganized string: mpmp
// Reorganized string: rgmorgmaPin
// Reorganized string: aba
// Reorganized string: 

const Heap = require('collections/heap');
const Deque = require('collections/deque');

const reorganize_string = function (str, k) {
  
  // create object to store frequency map of chars in str

  // create max heap and populate with frequency map

  // create queue to stage at most K chars with their frequency

  // iterate while heap is not empty
    // pop item from heap
    // add char to result string
    // decrement its frequency
    // add char, new frequency to queue
    // if queue has length of K
      // remove 1st item from queue
      // if item has frequency > 0, add it back to heap

  
  // input check
  if (!str || k > str.length) return "";

  let queue;  // using FIFO queue to stage the char for K iterations before adding it back to heap
  let result_arr = [];

  // create object to store frequency map of chars in str
  let frequency_map = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char in frequency_map) {
      frequency_map[str[i]]++;
    } else {
      frequency_map[char] = 1;
    }
  }

  // create max heap and populate with frequency map
  let maxHeap = new Heap([], null, (a, b) => a[1] - b[1]);
  Object.keys(frequency_map).forEach((element) => {
    maxHeap.push([element, frequency_map[element]]);
  });  

  // create queue to stage at most K chars with their frequency
  queue = new Deque();

  // iterate while heap is not empty
  while (maxHeap.length > 0) {
    let [char, frequency] = maxHeap.pop();

    result_arr.push(char);
    frequency -= 1;
    queue.push([char, frequency]);

    if (queue.length === k) {
      let [queue_char, queue_frequency] = queue.shift();

      if (queue_frequency > 0) {
        maxHeap.push([queue_char, queue_frequency]);
      }
    }
  }

  // Return result
  if (result_arr.length === str.length)
    return result_arr.join('');

  return "";
};

// console.log(`Reorganized string: ${reorganize_string("Programming", 3)}`)
// console.log(`Reorganized string: ${reorganize_string("mmpp", 2)}`)
// console.log(`Reorganized string: ${reorganize_string("aab", 2)}`)
console.log(`Reorganized string: ${reorganize_string("aapa", 3)}`)
