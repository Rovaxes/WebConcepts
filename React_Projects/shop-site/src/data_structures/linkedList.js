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
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
