class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const traverse = function (root) {
  // checks
  if (!root) {
    return [];
  }

  // declarations
  let result = [];
  let queue = [root];
  let current_node = null;
  let current_level_array = [];
  let current_level = 0;
  let level_size = 0;

  // iterate till queue is not empty
  while (queue.length > 0) {
    // set the levelSize to be length of queue
    level_size = queue.length;
    current_level_array = [];

    // iterate over queue for 'levelSize' times
    for (let i = 0; i < level_size; i++) {
      // pop 1st element and add it to current_level array
      current_node = queue.shift();

      // find its children and add it to queue
      if (current_node.left) {
        queue.push(current_node.left);
      } 
      if (current_node.right) {
        queue.push(current_node.right);
      }

      // if current_level % 2 === 0 -> flip current level array
      if (current_level % 2 == 0) {
        current_level_array.unshift(current_node.value);
      } else {
        current_level_array.push(current_node.value);
      }
    }

    // update current level
    current_level++;

    // push current_level value in results array
    result.push(current_level_array);
  }

  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
root.right.left.left = new TreeNode(20)
root.right.left.right = new TreeNode(17)
console.log(`Zigzag traversal: ${traverse(root)}`)