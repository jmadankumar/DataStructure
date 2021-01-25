class Node {
  next = null;
  constructor(data) {
    this.data = data;
  }
}

export default class CircularLinkedList {
  head = null;

  getLastNode() {
    let currentNode = this.head;
    while (currentNode.next != this.head) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  addFirst(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
      node.next = this.head;
    } else {
      const lastNode = this.getLastNode();

      node.next = this.head;
      lastNode.next = node;
      this.head = node;
    }
  }

  add(data) {
    if (this.head === null) {
      return this.addFirst(data);
    }
    const lastNode = this.getLastNode();
    let node = new Node(data);

    lastNode.next = node;
    node.next = this.head;
  }

  removeFirst() {
    if (this.head === null) {
      throw new Error("List is Empty");
    }
    const lastNode = this.getLastNode();

    if (this.head === lastNode) {
      this.head = null;
      return lastNode.data;
    }

    const node = this.head;

    this.head = this.head.next;
    lastNode.next = this.head;
    return node.data;
  }

  removeLast() {
    if (this.head === null) {
      throw new Error("List is Empty");
    }

    const lastNode = this.getLastNode();
    if (this.head === lastNode) {
      this.head = null;
      return lastNode.data;
    }

    let currentNode = this.head;

    while (currentNode.next !== lastNode) {
      currentNode = currentNode.next;
    }

    currentNode.next = this.head;
    return lastNode.data;
  }

  print() {
    if (this.head === null) {
      return "List is Empty";
    }

    let result = "";
    let currentNode = this.head;
    do {
      result += `${currentNode.data} `;
      currentNode = currentNode.next;
    } while (currentNode !== this.head);
    return result.trim();
  }
}
