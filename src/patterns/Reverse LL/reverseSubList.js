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

const reverse_sub_list = function (head, p, q) {
  // Assumptions 
  // p and q are both integers and 0 < p < q <= list length

  // declarations
  let index = 1;
  let currentNode = head;
  let previous = null;
  let oldNext = null;
  let rewireStart = null;
  let rewireEnd = null;

  // logic
  // iterate over list till end of list

  // when we reach at 'p'
  //  lock previous node to rewireStart node
  //  lock current node to rewireEnd node

  // do this for nodes between p and q (not including p)
  //  save current's next node temporarily
  //  update current node's next to previous
  //  if index is q
  //    rewireStart.next = currentNode
  //    rewireEnd.next = currentNode.next
  //    if (p === 1) head = currentNode
  //  else
  //    go to node save in temp (if index not q)
  // index++;

  while (index <= q && currentNode !== null) {
    if (index === p) {  // start of sub-list
      rewireStart = previous;
      rewireEnd = currentNode;
      previous = currentNode;
      currentNode = currentNode.next;
    } else if (index === q) { // end of sub-list
      if (p === 1) {
        head = currentNode;
      } else {
        rewireStart.next = currentNode;
      }

      rewireEnd.next = currentNode.next;
      currentNode.next = previous;
    } else if (index > p && index <= q) { // middle of sub-list
      oldNext = currentNode.next;
      currentNode.next = previous;
      previous = currentNode;
      currentNode = oldNext;
    } else { // before sub-list starts
      previous = currentNode;
      currentNode = currentNode.next;
    }
 
    index++;
  }
  
  // return result
  return head;
};


head = new Node(1)
head.next = new Node(2)
head.next.next = new Node(3)
head.next.next.next = new Node(4)
head.next.next.next.next = new Node(5)

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 3).get_list()}`)