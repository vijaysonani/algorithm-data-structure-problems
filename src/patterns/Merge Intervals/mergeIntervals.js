class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return "[" + this.start + ", " + this.end + "]";
  }
}


const merge = function(intervals) {
  merged = [];
  let interval;
  let start;
  let end;
  // sort the intervals on start time to ensure a.start <= b.start
  intervals.sort((a, b) => a.start - b.start)
  // console.log(`intervals: ${JSON.stringify(intervals)}`);

  start = intervals[0].start;
  end = intervals[0].end;

  // if 'a' overlaps 'b' (b.start < a.end)
  // then merge them into a NEW interval 'c' => c.start = a.start; c.end = max(a.end, b.end)
  for (let i = 1; i < intervals.length; i++) {
    interval = intervals[i];
    // console.log('-------------------------');
    // console.log(`start: ${start}`);
    // console.log(`end: ${end}`);
    // console.log(`interval: ${JSON.stringify(interval)}`);

    if (end > interval.start) { // overlap true
      end = Math.max(interval.end, end);
      // console.log('overlap true');
    } else {
      // console.log('overlap false');
      c = new Interval(start, end);
      merged.push(c);
      start = interval.start;
      end = interval.end;
    }
  }

  // console.log(`last start: ${start}`);
  // console.log(`last end: ${end}`);
  merged.push(new Interval(start, end));

  return merged;
};

// merged_intervals = merge([new Interval(1, 4), new Interval(2, 5), new Interval(7, 9)]);
// result = "";
// for(i=0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`)


// merged_intervals = merge([new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)]);
// result = "";
// for(i=0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`)


// merged_intervals = merge([new Interval(1, 4), new Interval(2, 6), new Interval(3, 5)]);
// result = "";
// for(i=0; i < merged_intervals.length; i++) {
//   result += merged_intervals[i].get_interval() + " ";
// }
// console.log(`Merged intervals: ${result}`)
