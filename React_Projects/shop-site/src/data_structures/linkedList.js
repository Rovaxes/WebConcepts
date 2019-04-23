import React, { Component } from "react";

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

  size() {
    var current = this.head;
    var count;
    if (current === null) {
      count = 0;
    } else {
      count = 1;
    }
    while (current !== null && current.next !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  displayList() {
    var current = this.head;
    const items = [];
    while (current !== null) {
      items.push(<li key={current.data}> {current.data} </li>);
      current = current.next;
    }
    return <div>{items}</div>;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
