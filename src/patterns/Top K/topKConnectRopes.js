// Problem: Given ‘N’ ropes with different lengths, we need to connect these ropes into one big rope with minimum cost. The cost of connecting two ropes is equal to the sum of their lengths.

// Output: 
// Minimum cost to connect ropes: 33
// Minimum cost to connect ropes: 36
// Minimum cost to connect ropes: 42

const Heap = require('../../node_modules/collections/heap');

const minimum_cost_to_connect_ropes = function(ropeLengths) {
  let result = 0;
  let minHeap = new Heap(ropeLengths, null, (a, b) => b - a);

  while (minHeap.length > 1) {
    let temp = minHeap.pop() + minHeap.pop();
    result += temp;
    minHeap.push(temp);
  }
  

  return result;
};


console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5])}`)
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([3, 4, 5, 6])}`);
console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5, 2])}`)