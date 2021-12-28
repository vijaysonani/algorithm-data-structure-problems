// Problem:
// You are given a list of tasks that need to be run, in any order, on a server.
// Each task will take one CPU interval to execute 
// but once a task has finished, it has a cooling period during which it can’t be run again.
// If the cooling period for all tasks is ‘K’ intervals, 
// find the minimum number of CPU intervals that the server needs to finish all tasks.

// If at any time the server can’t execute any task then it must stay idle.

// Output:
// Minimum intervals needed to execute all tasks: 7
// Minimum intervals needed to execute all tasks: 5

const Heap = require('collections/heap');

const schedule_tasks = function(tasks, k) {
  let intervalCount = 0;    // keep track of overall intervals accounted for -> actual intervals + idle

  // create frequency map for tasks

  // create max heap for frequency map

  // create waiting list to capture tasks that have already been accounted for in the given K itervals

  // create counter 'n' to store unfilled intervals in current K intervals group

  // iterate till max heap is empty


  if (!tasks || k > tasks.length) return intervalCount;

  // create frequency map for tasks
  let frequency_map = {};
  tasks.forEach((task) => {
    if (task in frequency_map) {
      frequency_map[task]++;
    } else {
      frequency_map[task] = 1;
    }
  });

  // create max heap for frequency map
  const maxHeap = new Heap([], null, (a, b) => a[1] - b[1]);
  Object.keys(frequency_map).forEach((task) => {
    maxHeap.push([task, frequency_map[task]]);
  });

  // create waiting list to capture tasks that have already been accounted for in the given K itervals
  let waiting_list = [];

  // create counter 'n' to store unfilled intervals in current K intervals group
  let n = k + 1;

  // iterate till max heap is empty
  while (maxHeap.length > 0) {
    // set n to K+1 to iterate only for give K+1 intervals
    n = k + 1;

    // reset waiting_list
    waiting_list = [];

    // iterate for K+1 times and calculate intervalCounts and idle count
    while (n > 0 && maxHeap.length > 0) {
      intervalCount++; 

      const [task, frequency] = maxHeap.pop();

      if (frequency > 1) {
        waiting_list.push([task, frequency - 1]);
      }

      n -= 1;
    }

    // If waiting_list has items, push it to maxHeap to process next K+1 intervals
    waiting_list.forEach((item) => {
      maxHeap.push(item);
    });

    // If maxHeap is not empty, that mean we need to account for idle counts store in 'n' from previous K+1 interval
    if (maxHeap.length > 0) {
      intervalCount += n;
    }
  }

  return intervalCount;
};


// console.log(`Minimum intervals needed to execute all tasks: ${schedule_tasks(['a', 'a', 'a', 'b', 'c', 'c'], 2)}`)
// console.log(`Minimum intervals needed to execute all tasks: ${schedule_tasks(['a', 'b', 'a'], 3)}`)
console.log(`Minimum intervals needed to execute all tasks: ${schedule_tasks(['a', 'b', 'c', 'd', 'e'], 1)}`)
