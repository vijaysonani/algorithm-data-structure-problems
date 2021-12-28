// Problem: 
// Find the path with the maximum sum in a given binary tree.
// Write a function that returns the maximum sum.
// A path can be defined as a sequence of nodes between any two nodes and doesn’t necessarily pass through the root. The path must contain at least one node.

// Output 1: 6
// Output 2: 31
// Output 3: -1


class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_maximum_path_sum = function (root) {
  let tree_max_sum = Number.NEGATIVE_INFINITY;

  const find_max_sum_recursively = (current_node) => {
    if (!current_node) return 0;

    let current_path_max_sum = 0
  
    // find max path sum of left & right sub tree
    let max_left_tree_sum = find_max_sum_recursively(current_node.left);
    let max_right_tree_sum = find_max_sum_recursively(current_node.right);

    // ignore paths with negative sums, since we need to find the maximum sum we should 
    // ignore any path which has an overall negative sum.
    max_left_tree_sum = Math.max(max_left_tree_sum, 0);
    max_right_tree_sum = Math.max(max_right_tree_sum, 0);
    
    // maximum path sum at the current node will be equal to the sum from the left subtree +
    // the sum from right subtree + val of current node
    current_path_max_sum = max_left_tree_sum + max_right_tree_sum + current_node.value;

    // update the global maximum sum
    tree_max_sum = Math.max(current_path_max_sum, tree_max_sum);

    // return max path sum for current_node
    return Math.max(max_left_tree_sum, max_right_tree_sum) + current_node.value;
  };

  // maximum sum of any path from the current node will be equal to the maximum of
  // the sums from left OR right subtrees plus the value of the current node
  find_max_sum_recursively(root);

  return tree_max_sum;
};


var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`) // 6

root.left.left = new TreeNode(1)
root.left.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`) // 31

root = new TreeNode(-1)
root.left = new TreeNode(-3)
console.log(`Maximum Path Sum: ${find_maximum_path_sum(root)}`) // -1