class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_minimum_depth = function (root) {
  // iterate over the queue till its empty
  // set levelSize as the length of queue
  // iterate the queue 'levelSize' times
    // pop the first element in the queue
    // check if the current node has children and add it to queue
    // if current node does not have any children, return current_level
  // increment current_level

  // check
  if (!root) {
    return -1;
  }

  // declarations
  let current_node = null;
  let current_level = 1;
  let level_size = 0;
  let queue = [root];
  let left_child = null;
  let right_child = null;

  while (queue.length > 0) {
    level_size = queue.length;
    left_child = null;
    right_child = null;
      
    for (let i = 0; i < level_size; i++) {
      current_node = queue.shift();
      let left_child = current_node.left;
      let right_child = current_node.right;
    
      if (!left_child && !right_child) {
        return current_level;
      }

      if (left_child) {
        queue.push(left_child);
      }
      if (right_child) {
        queue.push(right_child);
      }
    }
    current_level++;
  }

  return current_level;
};



var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)
// root.left.left = new TreeNode(9)
// root.right.left.left = new TreeNode(11)
// console.log(`Tree Minimum Depth: ${find_minimum_depth(root)}`)