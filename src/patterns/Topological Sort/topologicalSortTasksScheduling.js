// Problem: 
// There are ‘N’ tasks, labeled from ‘0’ to ‘N - 1’.
// Each task can have some prerequisite tasks which need to be completed before it can be scheduled.
// Given the number of tasks and a list of prerequisite pairs, 
// find out if it is possible to schedule all the tasks.

const Deque = require("collections/deque");

// Output: 
// Is scheduling possible: true
// Is scheduling possible: false
// Is scheduling possible: true

const is_scheduling_possible = function (tasks, prerequisites) {
  
  // Check Input 
  if (tasks <= 0) return false;

  // 1. Initialize Graph
  const inDegree = Array(tasks).fill(0);
  const graph = Array(tasks).fill(0).map(() => Array());

  // 2. Build Graph
  prerequisites.forEach((edge) => {
    let [parent, child] = edge;

    graph[parent].push(child);
    inDegree[child]++;
  });

  // 3. Find all sources, i.e all vertices with 0 in-degrees
  const sources_queue = new Deque();
  const sorted_order = [];

  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources_queue.push(i);
    }
  }
  
  // 4. For each source, add it to the sortedOrder and subtract 1 from its children in-degrees
  //    If a child's in-degree becomes 0, add it to the source's queue
  while (sources_queue.length > 0) {
    const task = sources_queue.shift();

    sorted_order.push(task);

    graph[task].forEach((child) => {
      inDegree[child]--;
      if (inDegree[child] === 0) {
        sources_queue.push(child);
      }
    })
  }

  // Check if graph has cycle
  return tasks === sorted_order.length;
};


console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])}`)
console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])}`)