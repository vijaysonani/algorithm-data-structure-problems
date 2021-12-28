// Problem: Given a binary tree where each node can only have a digit(0 - 9) value, each root - to - leaf path will represent a number.Find the total sum of all the numbers represented by all paths.
// Output: 332
// Explanation: The sum of all path numbers : 101 + 116 + 115

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const find_sum_of_path_numbers = function (root) {
  if (!root) return -1;

  let all_paths_numbers = [];
  let current_path = [];
  let result = 0;

  find_sum_of_path_numbers_recursively(root, current_path, all_paths_numbers)

  // add all paths
  for (item of all_paths_numbers) {
    result += item;
  }
  return result;
};

const find_sum_of_path_numbers_recursively = (current_node, current_path, all_paths_numbers) => {
  if (!current_node) return 0;

  // declarations
  let right_node = current_node.right;
  let left_node = current_node.left;
  let current_value = current_node.value;

  // add current_node to current_path
  current_path.push(current_node.value);

  // if leaf node, add current_path numbers to all_paths_numbers
  if (!left_node && !right_node) {
    all_paths_numbers.push(arrToNum(current_path));
  } else {
    // else recursively call left and right sub tree
    find_sum_of_path_numbers_recursively(left_node, current_path, all_paths_numbers);
    find_sum_of_path_numbers_recursively(right_node, current_path, all_paths_numbers);
  }

  // remove current_node from current path for backtracking node
  current_path.pop();
}

const arrToNum = (arr) => {
  let result = '';
  arr.map((item) => result += item)
  return parseInt(result);
} 

var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)
console.log(`Total Sum of Path Numbers: ${find_sum_of_path_numbers(root)}`)