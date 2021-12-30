// Problem: 
// There are ‘N’ tasks, labeled from ‘0’ to ‘N - 1’. 
// Each task can have some prerequisite tasks which need to be completed before it can be scheduled.
// Given the number of tasks and a list of prerequisite pairs, 
// write a method to find the ordering of tasks we should pick to finish all tasks.

const Deque = require("collections/deque");

// Output:
// Is scheduling possible: 0,1,2
// Is scheduling possible: 
// Is scheduling possible: 0,1,5,4,3,2


const find_order = function(tasks, prerequisites) {
  let sortedOrder = [];

  // Check Input
  if (tasks <= 0) return sortedOrder;

  // 1.Initialize Graph
  const graph = Array(tasks).fill(0).map(() => Array());
  const inDegree = Array(tasks).fill(0);

  // 2. Build Graph
  prerequisites.forEach((edge) => {
    let [parent, child] = edge;

    graph[parent].push(child);
    inDegree[child]++;
  });

  // 3. Find all sources, i.e. vertices whose in-degree is 0
  const sources_queue = new Deque();
  for (let i = 0; i < tasks; i++) {
    if (inDegree[i] === 0) {
      sources_queue.push(i);
    }
  }

  // 4. For each source, add it to sorted_order and decrement all children of source in in-degree by 1
  //    If the in-degree of child becomes 0, add it to source
  while (sources_queue.length > 0) {
    const task = sources_queue.shift();

    sortedOrder.push(task);
    graph[task].forEach((child) => {
      inDegree[child]--;

      if (inDegree[child] === 0) {
        sources_queue.push(child);
      }
    })
  }

  // 5. Check if graph has cycle
  if (sortedOrder.length !== tasks) {
    return [];
  }

  return sortedOrder;
};


console.log(`Is scheduling possible: ${find_order(3, [[0, 1], [1, 2]])}`)
console.log(`Is scheduling possible: ${find_order(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${find_order(6, [[2, 5], [0, 5], [0, 4], [1, 4], [3, 2], [1, 3]])}`)
