class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const tree_right_view = function (root) {
  // input check
  if (!root) return [];

  // declarations
  let queue = [root];
  let current_node = null;
  let level_size = 0;
  let result = [];

  while (queue.length > 0) {
    level_size = queue.length;

    for (let i = 0; i < level_size; i++) {
      current_node = queue.shift();

      if (current_node.left) queue.push(current_node.left);
      if (current_node.right) queue.push(current_node.right);
    }

    // current node will have right most node in the level
    result.push(current_node.value);
  }

  return result;
};

const tree_left_view = function (root) {
  // input check
  if (!root) return [];

  // declarations
  let queue = [root];
  let current_node = null;
  let level_size = 0;
  let result = [];

  while (queue.length > 0) {
    level_size = queue.length;

    for (let i = 0; i < level_size; i++) {
      current_node = queue.shift();

      if (current_node.right) queue.push(current_node.right);
      if (current_node.left) queue.push(current_node.left);
    }

    // current node will have left most node in the level
    result.push(current_node.value);
  }

  return result;
};

var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
root.left.left.left = new TreeNode(3);
console.log("Tree right view: " + tree_right_view(root))
console.log("Tree left view: " + tree_left_view(root))
