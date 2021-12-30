// Problem: Given a directed graph, find the topological ordering of its vertices.

// Output: 
// Topological sort: 3,2,0,1
// Topological sort: 4,2,3,0,1
// Topological sort: 5,6,3,4,0,2,1

const Deque = require('collections/deque');

const topological_sort = function(vertices, edges) {
  const sortedOrder = [];

  // Check Input
  if (vertices <= 0) {
    return sortedOrder;
  }

  // 1. Initialize the graph
  const inDegree = Array(vertices).fill(0);
  const graph = Array(vertices).fill(0).map(() => Array());

  // 2. Build the graph
  edges.forEach((edge) => {
    let [parent, child] = edge;

    graph[parent].push(child);
    inDegree[child]++;
  });

  // 3. Find all sources i.e. all vertices with 0 in-degrees
  const sources = new Deque();
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      sources.push(i);
    }
  }

  // 4. For each source, add it to sortOrder and subtract 1 from all its children's in-degrees
  //    If a child's in-degree becomes 0, add it to source's queue
  while (sources.length > 0) {
    const source_vertex = sources.shift();
    sortedOrder.push(source_vertex);

    graph[source_vertex].forEach((child) => {
      inDegree[child]--;
      if (inDegree[child] === 0) {
        sources.push(child);
      }
    });
  }

  // Check if graph has cycle
  if (sortedOrder.length !== vertices) {
    return [];
  }

  return sortedOrder;
};


console.log(`Topological sort: ${topological_sort(4, [[3, 2], [3, 0], [2, 0], [2, 1]])}`)
console.log(`Topological sort: ${topological_sort(5, [[4, 2], [4, 3], [2, 0], [2, 1], [3, 1]])}`)
console.log(`Topological sort: ${topological_sort(7, [[6, 4], [6, 2], [5, 3], [5, 4], [3, 0], [3, 1], [3, 2], [4, 1]])}`)