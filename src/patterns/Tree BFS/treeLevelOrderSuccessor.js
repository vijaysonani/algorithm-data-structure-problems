class TreeNode {

  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null; 
  }
};


const find_successor = function (root, key) {
  if (!root) return null;

  let queue = [root];
  let current_node = null;

  // iterate over tree till queue is empty
  while (queue.length > 0) {
    // pop 1st node from queue
    current_node = queue.shift();

    // add children of current node to queue
    if (current_node.left) queue.push(current_node.left);
    if (current_node.right) queue.push(current_node.right);

    // break if key is found
    if (current_node.val === key) {
      break;
    }
  }

  // return 1st element for queue if queue not empty
  if (queue.length > 0) {
    return queue[0];
  }

  // no key found or key is last node in tree traversal
  return null;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = find_successor(root, 12)
if (result != null)
  console.log(result.val)
result = find_successor(root, 9)
if (result != null)
  console.log(result.val)