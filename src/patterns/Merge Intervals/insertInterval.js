class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const insert = function (intervals, new_interval) {
  // declarations
  let merged = [];
  let i = 0;

  // logic
  // 1. Skip intervals that does not overlap with new interval
  while (i < intervals.length && intervals[i].end < new_interval.start) {
    merged.push(intervals[i]);
    i++;
  }

  // 2. Merge/Insert new interval when overlap occurs
  while (i < intervals.length && intervals[i].start <= new_interval.end) {
    new_interval.start = Math.min(intervals[i].start, new_interval.start);
    new_interval.end = Math.max(intervals[i].end, new_interval.end);
    i++;
  }

  // 2.1 Insert new interval
  merged.push(new Interval(new_interval.start, new_interval.end));

  // 3. Skips remaining intervals if theres no overlap
  while (i < intervals.length) {
    merged.push(intervals[i]);
    i++;
  }

  // return result
  return merged;
}

// process.stdout.write('Intervals after inserting the new interval: ');
// let result = insert([
//   new Interval(1, 3),
//   new Interval(5, 7),
//   new Interval(8, 12),
// ], new Interval(4, 6));
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();

// process.stdout.write('Intervals after inserting the new interval: ');
// result = insert([
//   new Interval(1, 3),
//   new Interval(5, 7),
//   new Interval(8, 12),
// ], new Interval(4, 10));
// for (i = 0; i < result.length; i++) {
//   result[i].print_interval();
// }
// console.log();

process.stdout.write('Intervals after inserting the new interval: ');
result = insert([new Interval(2, 3),
  new Interval(5, 7),
], new Interval(1, 4));
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();