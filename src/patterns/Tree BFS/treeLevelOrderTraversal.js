class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

// author: educative
const traverse = function (root) {
  // checks
  if (root === null) {
    return [];
  }

  // declarations
  let result = [];
  let levelSize = 0;
  let queue = [root];
  let current = null;
  let current_level_array = [];

  // logic
  // start with root node
  while (queue?.length > 0) {
    // reset values
    current_level_array = [];

    // get length of queue and set it as levelSize
    levelSize = queue.length;
    
    // iterate over next 'levelSize' elements in queue as they are at same level
    for (let i = 0; i < levelSize; i++) {
      // pop 1st element in queue and add it to current_level array
      current = queue.shift();

      // find its children and push queue
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }

      current_level_array.push(current.value);
    }

    // add current_level_array in result
    result.push(current_level_array);
  }

  return result;
};



var root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);


// author: Vijay
    // process the current elements in queue as they are at same level
    // keep separate track of child nodes of elements in queue

      // pop 1st element in queue and add it to current_level array
      // find its children and push to next_level_nodes array
    
    // once queue is processed, add next_level_nodes to queue
    // add current_level_array in result
    // reset values    
