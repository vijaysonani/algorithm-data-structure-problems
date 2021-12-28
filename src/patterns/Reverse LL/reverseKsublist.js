class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};

// author: Vijay
const reverse_every_k_elements = function (head, k) {
  // Assumptions
  // k is less than list length

  // Declarations
  let index = 1;
  let currentNode = head;
  let oldNext = null;
  let previous = null;
  let rewireStart = null;
  let rewirePrevStart = head;

  // handle 1st sub-list
  while (currentNode && index < 1 + k) {
    oldNext = currentNode.next;
    currentNode.next = previous;
    previous = currentNode;
    currentNode = oldNext;
    index++;
  }

  head = previous;

  // handle middle
  while (currentNode) {
    if (index % k === 1) { // beginning of sub-list
      rewireStart = currentNode;

      oldNext = currentNode.next;
      // currentNode.next = previous;
      previous = currentNode;
      currentNode = oldNext;
  
    } else {

      if (index % k === 0) { // end of sub-list
        rewirePrevStart.next = currentNode;
        rewirePrevStart = rewireStart;
      }
      oldNext = currentNode.next;
      currentNode.next = previous;
      previous = currentNode;
      currentNode = oldNext;  
    }

    index++;
  }

  // handle last sub-list
  rewirePrevStart.next = previous;
  rewireStart.next = null;

  // Return result
  return head;
}

// author: Educative.io
const reverse_every_k_elements = function (head, k) {
  // edge case
  if (k <= 1 || head === null) {
    return head;
  }

  // declarations                            // 3 -> 2 -> 1 -> null 
  let i = 0;                                 // 3
  let current = head;                        // 4 
  let previous = null;                       // 3
  let temp = null;                           // 4
  let last_node_of_previous_sub_list = null; // 1
  let last_node_of_sub_list = null;          // 4

  // Iterate over entire list
  while (true) {
    // Save last node of previous sub list
    last_node_of_sub_list = current;

    // Iterate over sub list
    i = 0;
    while (current !== null && i < k) { // reverse k nodes
      temp = current.next;
      current.next = previous;
      previous = current;
      current = temp;
      i++;
    }

    // connect with previous part
    if (last_node_of_previous_sub_list === null) {
      head = previous; // set head
    } else {
      last_node_of_previous_sub_list.next = previous;
      previous = null;
    }

    // exit if end of list reached
    if (current === null) {
      break;
    }

    // update variables
    last_node_of_previous_sub_list = last_node_of_sub_list;
  }

  return head;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)
head.next.next.next.next.next.next = new Node(7)
head.next.next.next.next.next.next.next = new Node(8)
// head.next.next.next.next.next.next.next.next = new Node(9)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_every_k_elements(head,3).get_list()}`)