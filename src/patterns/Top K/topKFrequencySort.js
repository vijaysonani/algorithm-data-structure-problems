// Problem: Given a string, sort it based on the decreasing frequency of its characters.

// Output1: String after sorting characters by frequency: rrggmmoaPin
// Output2: String after sorting characters by frequency: bbbaac

const Heap = require('../../node_modules/collections/heap');

const sort_character_by_frequency = function (str) {
  let result_string = ""

  // Create a key-value object to store the frequency for characters
  let frequent_chars = {};
  [...str].forEach((char) => {
    if (char in frequent_chars) {
      frequent_chars[char]++;
    } else {
      frequent_chars[char] = 1;
    }
  });

  // Create Max-Heap to sort the characters based on frequency
  let maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  Object.keys(frequent_chars).forEach((element) => {
    maxHeap.push([frequent_chars[element], element]);
  })

  // Create result string based on most frequent characters
  while (maxHeap.length > 0) {
    [frequency, char] = maxHeap.pop();
    for (let i = 0; i < frequency; i++) {
      result_string += char;
    }
  }

  // Return result string
  return result_string;
};


console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("Programming")}`)
console.log(`String after sorting characters by frequency: ${sort_character_by_frequency("abcbab")}`)
