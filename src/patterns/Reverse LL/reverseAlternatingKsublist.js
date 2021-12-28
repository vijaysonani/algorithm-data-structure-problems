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


const reverse_alternate_k_elements = function (head, k) {
// edge case
if (k <= 1 || head === null) {
  return head;
}

// declarations                            // 2 -> 1 -> 3 -> 4
let i = 0;                                 // 1
let current = head;                        // 5
let previous = null;                       // 4
let temp = null;                           // 3
let last_node_of_previous_sub_list = null; // 1
let last_node_of_sub_list = null;          // 5

// Iterate over entire list
while (current !== null) {
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

  // connect with next part
  last_node_of_sub_list.next = current;

  // skip 'k' nodes
  i = 0;
  while (current !== null && i < k) {
    previous = current;
    current = current.next;
    i += 1;
  }

  // update variables
  last_node_of_previous_sub_list = previous;
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

// console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_alternate_k_elements(head, 2).get_list()}`)