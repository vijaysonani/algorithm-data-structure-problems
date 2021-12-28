// Problem: Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).
// Output: 2
// Explanation: We have 2 paths with sum '12':  7 -> 4, and 1 -> 10


class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const count_paths = function (root, S) {
  let current_path = [];
  return count_paths_recursively(root, S, current_path);
};

const count_paths_recursively = (current_node, S, current_path) => {
  // check input
  if (!current_node) return 0;

  // declarations
  let count_in_current_path = 0;
  let path_sum = 0;

  // add current_node in current_path
  current_path.push(current_node.value);

  // find sums of all sub-paths in current_path list
  for (let i = current_path.length - 1; i >= 0; i--) {
    path_sum += current_path[i];

    // increment count if path_sum matches target sum
    if (path_sum === S) {
      count_in_current_path++;
    }
  }

  // traverse left sub tree
  count_in_current_path += count_paths_recursively(current_node.left, S, current_path);

  // traverse right sub tree
  count_in_current_path += count_paths_recursively(current_node.right, S, current_path);

  // remove current_node from current_path for backtracking
  current_path.pop();

  // return count back 
  return count_in_current_path;
};

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has paths: ${count_paths(root, 11)}`)