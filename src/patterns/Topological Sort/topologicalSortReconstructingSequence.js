// Problem: 
// Given a sequence originalSeq and an array of sequences, 
// write a method to find if originalSeq can be uniquely reconstructed from the array of sequences.

// Unique reconstruction means that we need to find if originalSeq is the only sequence such that 
// all sequences in the array are subsequences of it.

// Output:
// Can construct: true
// Can construct: false
// Can construct: true

const Deque = require('collections/deque');

const can_construct = function (originalSeq, sequences) {
  // 1. Iniitalize graph
  let graph = {};
  let inDegree = {};

  sequences.forEach((sequence) => {
    for (let i = 0; i < sequence.length; i++) {
      graph[sequence[i]] = [];
      inDegree[sequence[i]] = 0;
    };
  });

  // 2. Build graph
  sequences.forEach((sequence) => {
    for (let i = 1; i < sequence.length; i++) {
      const parent = sequence[i-1];
      const child = sequence[i];

      graph[parent].push(child);
      inDegree[child]++;
    };
  });

  // Check input
  // If we dont have ordering rules for all the numbers, we won't we able to uniquely construct the squence
  // Similar to leaf-to-root comparison in trees
  const vertices = Object.keys(inDegree);
  if (vertices.length !== originalSeq.length) {
    return false;
  }

  // 3. Add sources to sources
  let sources = new Deque();
  let sortedOrder = [];

  vertices.forEach((vertex) => {
    if (inDegree[vertex] === 0) {
      sources.push(Number.parseInt(vertex));
    }
  })

  // 4. Pop items from sources, decrement the childrem of the popped source from in-degree
  //    If the child's value is 0, add it to source
  while (sources.length > 0) {
    if (sources.length > 1) {
      return false;  // more than 1 sources mean there is more than 1 way to reconstruct the sequence
    }

    const vertex = sources.shift();

    if (originalSeq[sortedOrder.length] !== vertex) {
      return false;  // the next source is different from the original sequence
    }

    sortedOrder.push(vertex);
    graph[vertex].forEach((child) => {
      inDegree[child]--;
      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  return sortedOrder.length === originalSeq.length;
};

console.log(`Can construct: ${can_construct([1, 2, 3, 4], [[1, 2], [2, 3], [3, 4]])}`)
console.log(`Can construct: ${can_construct([1, 2, 3, 4], [[1, 2], [2, 3], [2, 4]])}`)
console.log(`Can construct: ${can_construct([3, 1, 4, 2, 5], [[3, 1, 5], [1, 4, 2, 5]])}`)
