class TreeNode {

  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null; 
  }
};

const find_level_averages = function(root) {
  // Edge cases
  if (!root) return [];

  // Declarations
  let result = [];
  let queue = [root];
  let current_node = null;
  let current_level_total_sum = 0;
  let levelSize = 0;
  
  
  // iterate over all nodes in tree using BFS
  while (queue.length > 0) {
    // set levelSize based on length of queue
    levelSize = queue.length;
    current_level_total_sum = 0;

    // iterate over the queue `levelSize` times
    for (let i = 0; i < levelSize; i++){
      // pop the 1st element in the queue and save it to the current_level_total_sum
      current_node = queue.shift()
      current_level_total_sum += current_node.value;
      
      // check if element has children and add it to the queue
      if (current_node.left) {
        queue.push(current_node.left)
      }
      if (current_node.right) {
        queue.push(current_node.right)
      }
    }
    
    // push current_level_total_sum / levelSize in the result
    result.push(current_level_total_sum / levelSize);
  }


  return result;
};


var root = new TreeNode(12)
root.left = new TreeNode(7)
root.right = new TreeNode(1)
root.left.left = new TreeNode(9)
root.left.right = new TreeNode(2)
root.right.left = new TreeNode(10)
root.right.right = new TreeNode(5)

console.log(`Level averages are: ${find_level_averages(root)}`)