class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }

  // level order traversal using 'next' pointer
  print_level_order() {
    console.log("Level order traversal using 'next' pointer: ");
    let nextLevelRoot = this;
    while (nextLevelRoot !== null) {
      let current = nextLevelRoot;
      nextLevelRoot = null;
      while (current != null) {
        process.stdout.write(`${current.val} `);
        if (nextLevelRoot === null) {
          if (current.left !== null) {
            nextLevelRoot = current.left;
          } else if (current.right !== null) {
            nextLevelRoot = current.right;
          }
        }
        current = current.next;
      }
      console.log();
    }
  }
};

const connect_level_order_siblings = function(root) {
  if(!root) return

  let queue = [root];
  let current_node = null;
  let level_size = 0;

  while(queue.length > 0) {
    level_size = queue.length;
    let previous = null; // declaring it in while saves us to reset its value after each iteration

    for (let i=0; i<level_size; i++){
      current_node = queue.shift();

      if(current_node.left) queue.push(current_node.left);
      if (current_node.right) queue.push(current_node.right);

      if(previous) previous.next = current_node;
      previous = current_node;
    }
  }
};


var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
connect_level_order_siblings(root);

root.print_level_order()