// Problem: 
// Design a class to efficiently find the Kth largest element in a stream of numbers.

// The class should have the following two things:

// The constructor of the class should accept an integer array containing initial numbers from the stream and an integer ‘K’.
// The class should expose a function add(int num) which will store the given number and return the Kth largest number.

// Output: 
// 4th largest number is: 5
// 4th largest number is: 6
// 4th largest number is: 6

const Heap = require('../../node_modules/collections/heap');

class KthLargestNumberInStream {
  constructor(nums, k) {
    this.minHeap = new Heap([], null, (a, b) => b - a);
    this.k = k;

    // Reuse the add() method to initialize the Min-Heap
    nums.forEach((num) => {
      this.add(num);
    });

  }

  add(num) {
    // add the new number in the min heap
    this.minHeap.push(num);

    // if heap has more than 'K' numbers, remove number with lowest value
    if (this.minHeap.length > this.k) {
      this.minHeap.pop();
    }

    // return the Kth largest number
    return this.minHeap.peek();
  }
};


kthLargestNumber = new KthLargestNumberInStream([3, 1, 5, 12, 2, 11], 4);
console.log(`4th largest number is: ${kthLargestNumber.add(6)}`)
console.log(`4th largest number is: ${kthLargestNumber.add(13)}`)
console.log(`4th largest number is: ${kthLargestNumber.add(4)}`)
