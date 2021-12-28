class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const has_path = function (root, sum) {
  // check
  if (!root) return false;

  // declaration
  let current_node = root;
  let left_node = root.left;
  let right_node = root.right;

  // if current_node value is equal to sum and current_node has no children; return true
  if (current_node.value === sum && !left_node && !right_node) {
    return true;
  } 

  // call has_path with current_node.left and sum - current_node.value
  // call has_path with current_node.right and sum - current_node.value
  // return result of above operation
  return (has_path(left_node, sum - current_node.value) || has_path(right_node, sum - current_node.value));
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree has path: ${has_path(root, 23)}`)
console.log(`Tree has path: ${has_path(root, 16)}`)