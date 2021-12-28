class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const can_attend_all_appointments = function (intervals) {
  let result = true;
  let i = 1;
  let previousEnd;

  // 1. Sort the appointments
  intervals.sort((a, b) => a.start - b.start);
  previousEnd = intervals[0].end;

  // 2. Find overlapping appointments
  while (i < intervals.length) {
    if (intervals[i].start < previousEnd) {
      result = false;
      break;
    }
    previousEnd = intervals[i].end;
    i++;
  }
  
  // 3. Return result
  return result;
};


console.log(`Can attend all appointments: ${can_attend_all_appointments([
  new Interval(1, 4),
  new Interval(2, 5),
  new Interval(7, 9),
])}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments([
  new Interval(6, 7),
  new Interval(2, 4),
  new Interval(8, 12),
])}`);

console.log(`Can attend all appointments: ${can_attend_all_appointments([
  new Interval(4, 5),
  new Interval(2, 3),
  new Interval(3, 4),
])}`);