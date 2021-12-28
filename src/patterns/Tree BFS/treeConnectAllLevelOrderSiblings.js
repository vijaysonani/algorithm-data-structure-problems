class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
  
  // tree traversal using 'next' pointer
  print_tree() {
    let result = "Traversal using 'next' pointer: ";
    let current = this;
    while (current != null) {
      result += current.value + " ";
      current = current.next;
    }
    console.log(result);
  }
};

const connect_all_siblings = function (root) {
  // input check
  if (!root) return;

  // declaration
  let queue = [root];
  let current_node = null;
  let previous = null;

  // iterate over queue using BFS
  while (queue.length > 0) {
    // pop 1st node from queue
    current_node = queue.shift();

    // add children of current node to queue
    if (current_node.left) queue.push(current_node.left);
    if (current_node.right) queue.push(current_node.right);

    // set previous.next to current node
    if (previous) previous.next = current_node;

    // update previous to current node
    previous = current_node;
  } 
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
connect_all_siblings(root)
root.print_tree()