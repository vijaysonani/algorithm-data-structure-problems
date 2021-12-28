class Meeting {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
};

// Without heap implementation
const min_meeting_rooms = function (meetings) {
  // declarations
  let current_meeting;
  let total_meeting_rooms = 0;
  let active_meeting_rooms = 0;
  let end_times = [];
  let i = 0;

  // sort meetings [(2,3), (2,4), (3,5), (4,5)]
  meetings.sort((a, b) => a.start - b.start);
  
  // Iterate over meetings
  while (i < meetings.length) {
    current_meeting = meetings[i];

    // 1. Check if end_times has any values <= meeting.start >> if so, remove these from end_times and decrement in active_meeting_rooms accordingly 
    end_times.map((x) => {
      if (x <= current_meeting.start) {
        active_meeting_rooms--;
      } else return;
    });

    // 2. inactive meeting rooms available ? decrement active rooms : increment total meeting, increment active
    if (total_meeting_rooms - active_meeting_rooms > 0) {
      active_meeting_rooms--;
    } else {
      total_meeting_rooms++;
      active_meeting_rooms++;
    }

    end_times.push(current_meeting.end);
    i++;
  }

  // return result
  return total_meeting_rooms;
};


console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
    [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)
// console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
//     [new Meeting(1, 4), new Meeting(2, 5), new Meeting(7, 9)])}`)
// console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
//     [new Meeting(6, 7), new Meeting(2, 4), new Meeting(8, 12)])}`)
// console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
//     [new Meeting(1, 4), new Meeting(2, 3), new Meeting(3, 6)])}`)
// console.log(`Minimum meeting rooms required: ${min_meeting_rooms(
//     [new Meeting(4, 5), new Meeting(2, 3), new Meeting(2, 4), new Meeting(3, 5)])}`)