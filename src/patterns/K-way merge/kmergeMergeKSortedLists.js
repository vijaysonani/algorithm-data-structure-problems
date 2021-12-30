// Problem:
// Given an array of ‘K’ sorted LinkedLists, merge them into one sorted list.

// Output:
// Here are the elements form the merged list: 1 2 3 3 4 6 6 7 8 

class ListNode {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }
}

const Heap = require('collections/heap');
  
const merge_lists = function(lists) {
  const minHeap = new Heap([], null, (a, b) => b.value - a.value);

  // put the root of each list in the min heap
  lists.forEach((a) => {
    if (a !== null) {
      minHeap.push(a);
    }
  });

  // take smallest (top) element from the min heap and add it to the result
  // if the top element has a next element, add it to heap
  let resultHead = null;
  let resultTail = null;

  while (minHeap.length > 0) {
    const node = minHeap.pop();

    if (resultHead === null) {
      resultHead = node;
      resultTail = node;
    } else {
      resultTail.next = node;
      resultTail = resultTail.next;
    }

    if (node.next !== null) {
      minHeap.push(node.next);
    }
  }


  return resultHead;
};



  l1 = new ListNode(2)
  l1.next = new ListNode(6)
  l1.next.next = new ListNode(8)

  l2 = new ListNode(3)
  l2.next = new ListNode(6)
  l2.next.next = new ListNode(7)

  l3 = new ListNode(1)
  l3.next = new ListNode(3)
  l3.next.next = new ListNode(4)

  result = merge_lists([l1, l2, l3])
  process.stdout.write('Here are the elements form the merged list: ');
  while (result !== null) {
    process.stdout.write(`${result.value} `);
    result = result.next;
  }