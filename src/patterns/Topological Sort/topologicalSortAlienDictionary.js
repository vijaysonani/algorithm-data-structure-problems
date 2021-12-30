// Problem: 
// There is a dictionary containing words from an alien language for which we don’t know the ordering of the alphabets.
// Write a method to find the correct order of the alphabets in the alien language.
// It is given that the input is a valid dictionary and there exists an ordering among its alphabets.

// Output: 
// Character order: bac
// Character order: cab
// Character order: ywxz

const Deque = require('collections/deque');

const find_order = function(words) {  

  // 1. Iniitalize graph
  let graph = {};
  let inDegree = {};

  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      graph[word[i]] = Array();
      inDegree[word[i]] = 0;
    }
  })

  // 2. Build graph
  for (let i = 0; i < words.length - 1; i++) {
    let w1 = words[i];
    let w2 = words[i + 1];

    for (let j = 0; j < Math.min(w1.length, w2.length); j++) {
      const parent = w1[j];
      const child = w2[j];

      if (parent !== child) {
        graph[parent].push(child);
        inDegree[child]++;
        break;
      }
    }
  }
  
  // 3. Find sources, i.e. all veritices with 0 in-degrees
  const sortedOrder = [];
  const queue = new Deque();

  Object.keys(inDegree).forEach((char) => {
    if (inDegree[char] === 0) {
      queue.push(char);
    }
  })

  // 4. For each source, add it to sorted order and subtract one from all its children's in-degree
  //    if child's in-degree becomes 0, add it to sources
  while (queue.length > 0) {
    const temp = queue.shift();

    sortedOrder.push(temp);
    graph[temp].forEach((child) => {
      inDegree[child]--;
      if (inDegree[child] === 0) {
        queue.push(child);
      }
    })
  }

  // Check if graph has cycle
  if (sortedOrder.length !==  Object.keys(inDegree).length) {
    return "";
  }  
  return sortedOrder;
};


console.log(`Character order: ${find_order(["ba", "bc", "ac", "cab"])}`)
console.log(`Character order: ${find_order(["cab", "aaa", "aab"])}`)
console.log(`Character order: ${find_order(["ywx", "wz", "xww", "xz", "zyy", "zwz"])}`)
