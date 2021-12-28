// Problem: Given a binary tree, return all root-to-leaf paths.
// Output: [[12,7,4], [12,1,10], [12,1,5]]

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_all_paths_approach1 = function (root) {
  if (!root) return [];

  let node_stack = [];     // stack to traverse tree
  let current_path = [];   // keep track of current path from leaf to root 
  let all_paths = [];      // array of sub-arrays that will save all paths for the tree
  let previous_node = null;
  let current_node = root;
  

  // iterate while stack is not empty
  while (current_node || node_stack.length > 0) {
    // drill down all the way to left leaf node add all the left nodes to the stack
    while (current_node) {
      node_stack.unshift(current_node);       // add current node to stack
      current_path.push(current_node.value);  // record the current path
      current_node = current_node.left;       // go to next left child
    }

    // get 1st node from stack
    current_node = node_stack[0];

    // check node's right sub-tree (at this point we know left sub-tree is null)
    if (current_node?.right && current_node.right !== previous_node) {
      current_node = current_node.right;
      continue;
    }

    // check if leaf, then add the current path to result
    if (!current_node?.left && !current_node?.right) {
      all_paths.push([...current_path]);
    }

    // pop node from stack
    node_stack.shift();

    // remove last entry from current path
    current_path.pop();

    // save current node as previous to avoid revisiting right child
    previous_node = current_node;

    // reset current node as it is already processed
    current_node = null;
  }

  // NOTE: 
  // to avoid revisiting left sub-tree, current_node is set to null
  // to avoid revisiting right sub-tree, we set previous to already visited right child

  return all_paths;
};

// Approach 2
const find_all_paths_approach2 = function (root) {
  if (!root) return [];
  
  // stack to keep track for node traversal
  let node_stack = [];
  // stack to keep track of all path -> path indexes corresponds to respective node indexes in node_stack
  // path_stack and node_stack run in parallel, every time we update node_stack, we should update path_stack as well at same index
  // path_stack keep track of the path from root till the corresponding node in node_stack
  let path_stack = [];

  let current_node = null;
  let current_path = [];
  let left_node = null;
  let right_node = null;
  let all_paths = [];

  // initialize node_stack and path_stack with root
  node_stack.push(root);
  path_stack.push([root.value]);

  // iterate till node_stack is not empty
  while (node_stack.length > 0) {
    // pop 1st element from node_stack and path_stack
    current_node = node_stack.shift();
    current_path = path_stack.shift();

    left_node = current_node.left;
    right_node = current_node.right;

    // if current_node is leaf node
    if (!left_node && !right_node) {
      // save current path in results
      all_paths.push(current_path);
    } else { // if current node has children
      if (left_node) {
        node_stack.push(left_node);                           // push them in stack
        path_stack.push([...current_path, left_node.value]);  // create new path array by copying current_path and append left child to it 
      }
      if (right_node) {
        node_stack.push(right_node);                          // push them in node stack
        path_stack.push([...current_path, right_node.value]); // create new path array by copying current_path and append right child to it 
      }
    }
  }

  return all_paths;
};

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result_approach1 = find_all_paths_approach1(root);
result_approach2 = find_all_paths_approach2(root);

process.stdout.write(`Tree paths with approach 1: `);
for (i = 0; i < result_approach1.length; i++) {
  process.stdout.write(`[${result_approach1[i]}] `);
}

process.stdout.write(`Tree paths with approach 2: `);
for (i = 0; i < result_approach2.length; i++) {
  process.stdout.write(`[${result_approach2[i]}] `);
}