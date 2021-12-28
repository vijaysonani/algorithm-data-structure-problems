// Problem: Given a binary tree, return all root-to-leaf paths.
// Output: [[12,7,4], [12,1,10], [12,1,5]]
// Solution: We can follow a similar approach. We just need to remove the “check for the path sum.”

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_all_paths = function (root) {
  let all_paths = [];
  let current_path = [];

  find_all_paths_recursively(root, current_path, all_paths);

  return all_paths;
};

const find_all_paths_recursively = (current_node, current_path, all_paths) => {
  // checks
  if (!current_node) return;

  // declarations
  let right_node = current_node.right;
  let left_node = current_node.left;
  let current_value = current_node.value;

  // add current_node to current_path
  current_path.push(current_value);

  if (!left_node && !right_node) { // if leaf node, add current_path to all_paths
    all_paths.push([...current_path]);
  } else { // else recursively call this fn for left and right subtrees
    find_all_paths_recursively(left_node, current_path, all_paths);
    find_all_paths_recursively(right_node, current_path, all_paths);
  }

  // pop the current node from current_path when backtracking recursive fn
  current_path.pop();
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
result = find_all_paths(root);

process.stdout.write(`Tree paths: `);
for (i = 0; i < result.length; i++) {
  process.stdout.write(`[${result[i]}] `);
}