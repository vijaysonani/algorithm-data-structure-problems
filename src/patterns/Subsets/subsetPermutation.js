// Problem: Given a set of distinct numbers, find all of its permutations.

// Output: 
// Here are all the permutations:
// [ 5, 3, 1 ]
// [ 3, 5, 1 ]
// [ 3, 1, 5 ]
// [ 5, 1, 3 ]
// [ 1, 5, 3 ]
// [ 1, 3, 5 ]

const find_permutations = function(nums) {
  let nums_length = nums.length;
  let current_permutations = [];        // object to keep track of permutations at each index in nums array

  // start with appending empty array
  current_permutations.push([]);

  // iterate over the nums array
  for (let i = 0; i < nums_length; i++) {
    const current_num = nums[i];
    const permutation_length = current_permutations.length;       // record the current length of permuations array

    // iterate over permutations array
    for (let j = 0; j < permutation_length; j++) {
      const previous_permuation = current_permutations.shift();   // remove the first sub-array in permutations array

      // iterate over each sub-array in previous permutation array
      for (let k = 0; k <= previous_permuation.length; k++) {    // iterate for sub-array length + 1 to account for the new num 
        let new_permutation = previous_permuation.slice(0);      // clone the sub-array into new array
        new_permutation.splice(k, 0, current_num);               // place the new num in appropriate location in sub-array
        
        current_permutations.push(new_permutation);      }
    }
  }

  return current_permutations;
};


console.log('Here are all the permutations:');
const result = find_permutations([1, 3, 5]);
result.forEach((permutation) => {
  console.log(permutation);
});