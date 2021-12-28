class Job {
  constructor(start, end, cpu_load) {
    this.start = start;
    this.end = end;
    this.cpu_load = cpu_load;
  }
};

// Non heap solution
const find_max_cpu_load = function (jobs) {
  // Assumptions
  // CPU load is positive

  // Declarations
  let result = -1;

  // Sort jobs based on start time - [1,4,3] [2,5,4] [7,9,6]
  jobs.sort((a, b) => a.start - b.start)

  // Loop through the jobs
  for (let i = 1; i < jobs.length; i++) {
    jobs[i].start <= jobs[i-1].end
  }


  // Find intersection between jobs and

  // Return result
  return result;
};


console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
      [new Job(1, 4, 3), new Job(2, 5, 4), new Job(7, 9, 6)])}`)
// console.log(`Maximum CPU load at any time: ${find_max_cpu_load(
      // [new Job(6, 7, 10), new Job(2, 4, 11), new Job(8, 12, 15)])}`)
// console.log(`"Maximum CPU load at any time: ${find_max_cpu_load(
//       [new Job(1, 4, 2), new Job(2, 4, 1), new Job(3, 6, 5)])}`)
