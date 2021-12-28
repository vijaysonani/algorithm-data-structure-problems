// Problem: Given a binary tree and a number sequence, find if the sequence is present as a root-to-leaf path in the given tree.
// Input: [1, 9, 9] ; Output: true
// Input: [1, 0, 7] ; Output: false
// Input: [1, 1, 6] ; Output: true 

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const find_path = function(root, sequence) {

  return find_path_recursively(root, sequence, 0);
};

const find_path_recursively = (current_node, sequence, sequenceIndex) => {
  // input check
  if (!current_node || sequence?.length < 1) return false;

  // declarations
  let current_value = current_node.value;
  let left_node = current_node.left;
  let right_node = current_node.right;

  // compare if value of current_node is equal to the element in sequence at same index
  if (current_value !== sequence[sequenceIndex]) {
    return false;
  }

  // check if leaf node and we are at last item in sequence 
  if (!left_node && !right_node && sequenceIndex === sequence.length - 1) {
    return true;
  }

  // recursively call to traverse left and right subtree
  // return true if any of 2 recursive call return true
  return find_path_recursively(left_node, sequence, sequenceIndex + 1)
    || find_path_recursively(right_node, sequence, sequenceIndex + 1);
};

var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)
root.left.left = new TreeNode(1)
root.right.left = new TreeNode(6)
root.right.right = new TreeNode(5)

console.log(`Tree has path sequence: ${find_path(root, [1, 0, 7])}`)
console.log(`Tree has path sequence: ${find_path(root, [1, 1, 6])}`)