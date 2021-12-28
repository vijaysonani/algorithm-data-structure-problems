class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  print_interval() {
    process.stdout.write(`[${this.start}, ${this.end}]`);
  }
}

const merge = function(intervals_a, intervals_b) {
  let result = [];
  let i = 0;
  let j = 0;
  let a_overlaps_b;
  let b_overlaps_a;

  while (i < intervals_a.length && j < intervals_b.length) {
    // check if b overlaps a
    a_overlaps_b = intervals_b[j].start <= intervals_a[i].end && intervals_a[i].start <= intervals_b[j].start;
    // check if a overlaps b
    b_overlaps_a = intervals_a[i].start <= intervals_b[j].end && intervals_b[j].start <= intervals_a[i].start;

    // store intersection points
    if (a_overlaps_b || b_overlaps_a) {
      result.push(new Interval(Math.max(intervals_a[i].start, intervals_b[j].start), Math.min(intervals_a[i].end, intervals_b[j].end)));
    }

    // move interval which ends first
    if (intervals_a[i].end < intervals_b[j].end) i++;
    else j++;
  }
  return result;
};

process.stdout.write('Intervals Intersection: ');
let result = merge([new Interval(1, 3), new Interval(5, 6), new Interval(7, 9)], [new Interval(2, 3), new Interval(5, 7)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();

process.stdout.write('Intervals Intersection: ');
result = merge([new Interval(1, 3), new Interval(5, 7), new Interval(9, 12)], [new Interval(5, 10)]);
for (i = 0; i < result.length; i++) {
  result[i].print_interval();
}
console.log();