class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


const find_paths = function (root, sum) {
  if (!root) return [];

  let allPaths = [];
  let current_path = [];

  find_paths_recursively(root, sum, current_path, allPaths);

  return allPaths; // return array of subarray
};

const find_paths_recursively = (current_node, sum, current_path, allPaths) => {
  if (!current_node) return;

  let right_node = current_node.right;
  let left_node = current_node.left;
  let current_value = current_node.value;

  // add the current node to the path
  current_path.push(current_value);

  // if root is leaf and sum equal to root node value, then push current_path_array in allPaths
  if (current_value === sum && !left_node && !right_node) {
    allPaths.push([...current_path])
  } else {
    // recursively call left and right side of root
    find_paths_recursively(left_node, sum - current_value, current_path, allPaths);
    find_paths_recursively(right_node, sum - current_value, current_path, allPaths);
  }

  // remove the current node from the path to backtrack,
  // we need to remove the current node while we are going up the recursive call stack.
  current_path.pop();
}

var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)
sum = 23
result = find_paths(root, sum);

process.stdout.write(`Tree paths with sum ${sum}: `);
for (i = 0; i < result.length; i++) {
  process.stdout.write(`[${result[i]}] `);
}