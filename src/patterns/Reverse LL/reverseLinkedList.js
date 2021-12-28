class Node {
  constructor(value, next=null){
    this.value = value;
    this.next = next;
  }

  get_list() {
    let result = "";
    let  temp = this;
    while (temp !== null) {
      result += temp.value + " ";
      temp = temp.next;
    }
    return result;
  }
};

const reverse = function (head) {
  // Declarations
  let currentNode = head;
  let previous = null;
  let oldNext = null;

  // Wile List is not ended
  // set oldNext value to be current node's next
  // assign current node's next to previous
  // set previous to current node
  // return last node

  while (currentNode) {
    oldNext = currentNode.next;
    currentNode.next = previous;
    previous = currentNode;
    currentNode = oldNext;
  }

  // Return result
  return previous;
};

head = new Node(2);
head.next = new Node(4);
head.next.next = new Node(6);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(10);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse(head).get_list()}`)
