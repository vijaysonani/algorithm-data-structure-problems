// Problem: 
// Design a class that simulates a Stack data structure, implementing the following two operations:

// push(int num): Pushes the number ‘num’ on the stack.
// pop(): Returns the most frequent number in the stack. If there is a tie, return the number which was pushed later.

// Output:
// 2
// 1
// 2

const Heap = require('collections/heap');

class Element {
  constructor(number, frequency, sequence_number) {
    this.number = number;
    this.frequency = frequency;
    this.sequence_number = this.sequence_number;
  }

  compare(other) {
    // default max heap check for higher frequency => a[frequency] - b[frequency]
    if (this.frequency !== other.frequency) {
      return this.frequency - other.frequency;
    }

    // if frequency is same, then check for sequence  => a[sequence] - b[sequence]
    return this.sequence_number - other.sequence_number;
  }
}

class FrequencyStack {
  constructor() {
    this.sequence_number = 0; // global sequence tracker
    this.frequency_map = {};  // to keep track for frequency for num in Heap
    this.maxHeap = new Heap([], null, (a, b) => a.compare(b));
  }

  push(num) {
    if (num in this.frequency_map) {
      this.frequency_map[num]++;
    } else {
      this.frequency_map[num] = 1;
    }

    this.maxHeap.push(new Element(num, this.frequency_map[num], this.sequence_number));
    this.sequence_number++;
  }

  pop() {
    const num = this.maxHeap.pop().number;

    if (this.frequency_map[num] > 1) {
      this.frequency_map[num]--;
    } else {
      delete this.frequency_map[num];
    }
    return num;
  }
};


var frequencyStack = new FrequencyStack()
frequencyStack.push(1)
frequencyStack.push(2)
frequencyStack.push(3)
frequencyStack.push(2)
frequencyStack.push(1)
frequencyStack.push(2)
frequencyStack.push(5)
console.log(frequencyStack.pop())
console.log(frequencyStack.pop())
console.log(frequencyStack.pop())

