// Problem: Given a binary tree, find the length of its diameter. The diameter of a tree is the number of nodes on the longest path between any two leaf nodes. The diameter of a tree may or may not pass through the root.
// Note: You can always assume that there are at least two leaf nodes in the given tree.
// Output 1: 5
// Output 2: 7

class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};


class TreeDiameter {

  constructor() {
    this.treeDiameter = 0;
  }

  find_diameter(root) {
    this.calculate_height_recursively(root);
    return this.treeDiameter;
  }

  calculate_height_recursively(current_node) {
    if (!current_node) return 0;

    let current_max_diameter = 0;
    let left_subtree_sum = 0;
    let right_subtree_sum = 0;

    // get max height of left and right sub-tree
    left_subtree_sum = this.calculate_height_recursively(current_node.left);
    right_subtree_sum = this.calculate_height_recursively(current_node.right);

    // dont need to calculate treeDiameter if its leaf node
    if (left_subtree_sum !== 0 && right_subtree_sum !== 0) {
      current_max_diameter = left_subtree_sum + right_subtree_sum + 1;
      this.treeDiameter = Math.max(current_max_diameter, this.treeDiameter);
    }

    // calculate height of current node, we just need the max height from that node + 1 (for current node)
    return Math.max(left_subtree_sum, right_subtree_sum) + 1;
  }
};


var treeDiameter = new TreeDiameter()
var root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.left.left = new TreeNode(4)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)
root.left.left = null
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)
root.right.right.left = new TreeNode(9)
root.right.left.right.left = new TreeNode(10)
root.right.right.left.left = new TreeNode(11)
console.log(`Tree Diameter: ${treeDiameter.find_diameter(root)}`)