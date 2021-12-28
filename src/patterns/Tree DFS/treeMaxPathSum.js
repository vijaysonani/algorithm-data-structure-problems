// Problem 2: Given a binary tree, find the root-to-leaf path with the maximum sum.
// Input: []
// Output: [12, 2, 10]
// Solution: We need to find the path with the maximum sum. As we traverse all paths, we can keep track of the path with the maximum sum.
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

let max_path_sum = 0;

class Max_Path_Total {
  constructor() {
    this.max_path_total = Number.MIN_VALUE;
  }
}

const find_max_path = function (root) {
  let max_path = [];
  let current_path = []
  let current_path_sum = 0;

  find_max_path_recursively(root, current_path, current_path_sum, max_path, new Max_Path_Total());
  return max_path;
};

const find_max_path_recursively = (current_node, current_path, current_path_sum, max_path, max_path_sum) => {
  if (!current_node) return;

  // declarations
  let right_node = current_node.right;
  let left_node = current_node.left;
  let current_value = current_node.value;

  // add current_node to current_path
  current_path.push(current_value);

  // add current_node value to current_path_sum
  current_path_sum += current_value;

  // if leaf node, update max_path_sum & max_path if current_path_sum is greater
  if (!left_node && !right_node && max_path_sum.max_path_total < current_path_sum) {
    max_path_sum.max_path_total = current_path_sum;
    // max_path = [...current_path] // DOES NOT WORK!!!! as its updating the reference

    // max_path?.pop(); // WORKS but will have array of arrays in max_path
    // max_path.push([...current_path]);

    max_path.splice(0, max_path.length, ...current_path); // WORKS with just 1 array

    // max_path.length = 0; // WORKS  with just 1 array
    // max_path.push(...current_path);
  } else { // else recursively call left and right subtree
    find_max_path_recursively(left_node, current_path, current_path_sum, max_path, max_path_sum);
    find_max_path_recursively(right_node, current_path, current_path_sum, max_path, max_path_sum);
  }

  // pop current_node from current_path for backtracking
  current_path.pop();
  current_path_sum -= current_value;
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(2)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
// root.right.right.left = new TreeNode(5)
result = find_max_path(root);

process.stdout.write(`Tree path with max sum: ${result} `);