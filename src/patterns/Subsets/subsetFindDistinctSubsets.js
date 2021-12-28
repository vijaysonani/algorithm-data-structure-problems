// Problem: Given a set with distinct elements, find all of its distinct subsets.
// Output: 
// Here is the list of subsets: 
// []
// [ 1 ]
// [ 3 ]
// [ 1, 3 ]
// Here is the list of subsets: 
// []
// [ 1 ]
// [ 5 ]
// [ 1, 5 ]
// [ 3 ]
// [ 1, 3 ]
// [ 5, 3 ]
// [ 1, 5, 3 ]


const find_subsets = function(nums) {
  let subsets = [[]];  // start by adding the empty subset

  let i = 0
  // for each element in nums
  for (num of nums) {
    i = subsets.length - 1;

    // append new element to all items in subsets array
    while (i >= 0) {
      const temp = subsets[i].slice(0); // slice will create new array for each array in subsets
      temp.push(num);                   // add new num to newly cloned array
      subsets.push(temp);               // append new combination to subsets
      i--;
    }
  }

  return subsets;
};


console.log('Here is the list of subsets: ');
let result = find_subsets([1, 3]);
result.forEach((subset) => {
  console.log(subset);
});

console.log('Here is the list of subsets: ');
result = find_subsets([1, 5, 3]);
result.forEach((subset) => {
  console.log(subset);
});