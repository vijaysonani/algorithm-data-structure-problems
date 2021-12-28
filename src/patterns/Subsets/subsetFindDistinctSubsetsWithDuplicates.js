// Problem: Given a set of numbers that might contain duplicates, find all of its distinct subsets.

// Output: 
// Here is the list of subsets: 
// []
// [ 1 ]
// [ 3 ]
// [ 1, 3 ]
// [ 3, 3 ]
// [ 1, 3, 3 ]
// Here is the list of subsets: 
// []
// [ 1 ]
// [ 3 ]
// [ 1, 3 ]
// [ 3, 3 ]
// [ 1, 3, 3 ]
// [ 5 ]
// [ 1, 5 ]
// [ 3, 5 ]
// [ 1, 3, 5 ]
// [ 3, 3, 5 ]
// [ 1, 3, 3, 5 ]

const find_subsets = function(nums) {
  let subsets = [];

  // start with appending empty array
  subsets.push([]);

  // sort the numbers to handle duplicates
  nums.sort((a,b) => a - b);

  let start_index;
  let end_index;
  for (let i = 0; i < nums.length; i++) {
    start_index = 0;

    // check if current num and prev num are same, if so, create new subset only from subset added in prev iteration 
    if (i > 0 && nums[i] === nums[i - 1]) {
      start_index = end_index;
    }

    // set limit to iterate only over exisiting sets at this point
    end_index = subsets.length;

    for (let j = start_index; j < end_index; j++) {
      const temp = subsets[j].slice(0);  // slice will create new array for each array in subsets
      temp.push(nums[i]);                // add new num to newly cloned array
      subsets.push(temp);                // append new combination to subsets
    }
  }
  
  return subsets;
};

console.log('Here is the list of subsets: ');
let result = find_subsets([3, 1, 3]);
result.forEach((subset) => {
  console.log(subset);
});

// console.log('Here is the list of subsets: ');
// result = find_subsets([1, 5, 3, 3]);
// result.forEach((subset) => {
//   console.log(subset);
// });