class Node {
  prev = null;
  next = null;

  constructor(data) {
    this.data = data;
  }
}

export default class DoublyLinkedList {
  head = null;
  tail = null;

  addToFront(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    return data;
  }

  append(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  removeFirst() {
    if (this.head === null) {
      throw new Error("List is empty");
    }

    const node = this.head;
    if (this.head.next === null) {
      this.head = this.tail = null;
      return node.data;
    }

    this.head = this.head.next;
    this.head.prev = null;
    return node.data;
  }

  removeLast() {
    if (this.tail === null) {
      throw new Error("List is empty");
    }

    const node = this.tail;

    if (this.tail.prev === null) {
      this.head = this.tail = null;
      return node.data;
    }

    this.tail = this.tail.prev;
    this.tail.next = null;

    return node.data;
  }

  clear() {
    this.head = this.tail = null;
  }

  size() {
    let count = 0;
    let temp = this.head;
    while (temp != null) {
      count++;
      temp = temp.next;
    }
    return count;
  }
}
