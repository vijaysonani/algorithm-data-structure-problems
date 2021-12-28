// Problem: Given a string, find all of its permutations preserving the character sequence but changing case.
// Output1 : String permutations are: ad52,Ad52,aD52,AD52
// Output2 : String permutations are: ab7c,Ab7c,aB7c,AB7c,ab7C,Ab7C,aB7C,AB7C

const find_letter_case_string_permutations = function(str) {
  let permutations = [];

  // iterate over the string
    // for each subarray in permutations array
      // remove first element in permutations array
      // clone this sub-array in new array
      // if str value is num, add num to new array and push to permutations array
      // else
        // push lower case str value to this sub-array and push to permutations array
        // push upper case str value to this sub-array and push to permutations array

  permutations.push([]);

  for (let i = 0; i < str.length; i++) {
    let current_char = str[i];
    let current_permutations = permutations.length;

    for (let j = 0; j < current_permutations; j++) {
      const previous_permuation = permutations.shift();

      if (isNaN(current_char)) {
        let new_permutation_lower_case = previous_permuation.slice(0);
        new_permutation_lower_case += current_char.toLowerCase();       
        permutations.push(new_permutation_lower_case);
        
        let new_permutation_upper_case = previous_permuation.slice(0);
        new_permutation_upper_case += current_char.toUpperCase();
        permutations.push(new_permutation_upper_case);
        
      } else {
        let new_permutation = previous_permuation.slice(0);
        new_permutation += current_char;        
        permutations.push(new_permutation);
      }
    }
  } 
  return permutations;
};


console.log(`String permutations are: ${find_letter_case_string_permutations("ad52")}`)
console.log(`String permutations are: ${find_letter_case_string_permutations("ab7c")}`)