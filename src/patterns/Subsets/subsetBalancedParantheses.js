// Problem : For a given number ‘N’, write a function to generate all combination of ‘N’ pairs of balanced parentheses.

// Input 2; Output 1 : All combinations of balanced parentheses are: (()),()()
// Input 3; Output 2 : All combinations of balanced parentheses are: ((())),(()()),(())(),()(()),()()()

class Parantheses {
  constructor(str, openCount = 0, closeCount = 0) {
    this.str = str;
    this.openCount = openCount;
    this.closeCount = closeCount;
  }
}

// const generate_valid_parentheses = function (num) {
//   let result = [];
//   let parantheses = [];   // queue to process parantheses strings

//   // add initial empty string in parantheses array
//   parantheses.push(new Parantheses('', 0, 0));

//   while (parantheses.length > 0) {
//     const current_parantheses = parantheses.shift();

//     // if parantheses has target number of open and closed parantheses, add to result 
//     if (current_parantheses.openCount === num && current_parantheses.closeCount === num) {
//       result.push(current_parantheses.str);
//     } else {
//       // if we can add an open parantheses, add it
//       if (current_parantheses.openCount < num) {
//         parantheses.push(new Parantheses(`${current_parantheses.str}(`, current_parantheses.openCount + 1, current_parantheses.closeCount));
//       }
//        // if we can add close parantheses, add it
//       if (current_parantheses.openCount > current_parantheses.closeCount) {
//         parantheses.push(new Parantheses(`${current_parantheses.str})`, current_parantheses.openCount, current_parantheses.closeCount + 1));
//       }
//     }
//   }

//   return result;
// };

// --------------------- RECURSIVE ------------------------- 
// function generate_valid_parentheses(num) {
//   result = [];
//   const parenthesesString = Array(2 * num);
//   generate_valid_parentheses_rec(num, 0, 0, parenthesesString, 0, result);
//   return result;
// }

// function generate_valid_parentheses_rec(num, openCount, closeCount, parenthesesString, index, result) {
//   // if we've reached the maximum number of open and close parentheses, add to the result
//   if (openCount === num && closeCount === num) {
//     result.push(parenthesesString.join(''));
//   } else {
//     if (openCount < num) { // if we can add an open parentheses, add it
//       parenthesesString[index] = '(';
//       generate_valid_parentheses_rec(num, openCount + 1, closeCount, parenthesesString, index + 1, result);
//     }
//     if (openCount > closeCount) { // if we can add a close parentheses, add it
//       parenthesesString[index] = ')';
//       generate_valid_parentheses_rec(num, openCount, closeCount + 1, parenthesesString, index + 1, result);
//     }
//   }
// }

console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(2)}`)
console.log(`All combinations of balanced parentheses are: ${generate_valid_parentheses(3)}`)
