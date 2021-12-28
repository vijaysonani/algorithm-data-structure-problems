// Problem: Given a string, find if its letters can be rearranged in such a way that
// no two same characters come next to each other.

// Output: 
// Rearranged string:  papap
// Rearranged string:  rgmrgmoaPin
// Rearranged string:  

const Heap = require('collections/heap');

const rearrange_string = function (str) {
  let result = "";
  let prev = "";

  // create object to store frequency of all chars in string
  let frequency_map = {};
  [...str].forEach((char) => { 
    if (char in frequency_map) {
      frequency_map[char]++;
    } else {
      frequency_map[char] = 1;
    }
  });

  // create max heap to sort chars based on frequency
  let maxHeap = new Heap([], null, (a, b) => a[1] - b[1]);
  Object.keys(frequency_map).forEach((element) => {
    maxHeap.push([element, frequency_map[element]]);
  })

  // pop from heap
  // compare with prev char -> if its same as prev char, break and return ""
  // decrement frequency and add it back to heap
  // add the popped char to result string
  while (maxHeap.length > 0) {
    const[char, frequency] = maxHeap.pop();
    if (char === prev) return "";
    prev = char;
    result += char;

    let new_frequency = frequency - 1;

    if (new_frequency > 0) {
      maxHeap.push([char, new_frequency]);
    }
  }

  return result;
};


console.log(`Rearranged string: ${rearrange_string("aappp")}`)
console.log(`Rearranged string: ${rearrange_string("Programming")}`)
console.log(`Rearranged string: ${rearrange_string("aapa")}`)
