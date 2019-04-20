export default class LinkedList {
  constructor() {
    this.head = null;
  }

  addToStart(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  getHead() {
    return this.head;
  }

  removeNode(data) {
    var current = this.head;
    while (current !== null) {}
    if (current.next.data === data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
