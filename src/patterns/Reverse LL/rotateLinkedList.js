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

// Given the head of a Singly LinkedList and a number ‘k’, 
// rotate the LinkedList to the right by ‘k’ nodes.

// author: Vijay
const NO_rotate = function(head, rotations) {
  let i = 0;
  let previous = null;
  let current = head;
  let temp = null;
  let current_head = head;

  while (i < rotations) {
    while (current !== null) {
      temp = current.next;
      previous = current;
      current = current.next;

      if (current.next === null) {
        previous.next = null;
        current.next = current_head;
        current_head = current;
        break;
      }
    }

    i++;
  }

  return current_head;
};

// author: educative
const rotate = function (head, rotations) {
  // checks
  if (head === null || head.next ===null || rotations < 1) {
    return head;
  }

  // declarations
  let list_length = 1;
  let current = head;
  let rotations_needed = 0;
  let skip_length = 0;
  let previous = null;

  // find the length of the linked list
  while (current.next !== null) {
    current = current.next;
    list_length++;
  }

  // make circulate list by connecting last node to head
  current.next = head;

  // get true number of rotations required
  rotations_needed = rotations % list_length;

  // the difference of list length and rotation needed will provide new head and end of list 
  skip_length = list_length - rotations_needed;

  // move to new head and end of list
  for (let i = 0; i <= skip_length; i++) {
    previous = current;
    current = current.next;
  }

  // set new end of list
  previous.next = null;

  // return new head
  return current;
};

head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)
head.next.next.next.next.next = new Node(6)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of rotated LinkedList are: ${rotate(head, 1).get_list()}`)
