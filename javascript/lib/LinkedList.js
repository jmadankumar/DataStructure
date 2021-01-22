class Node {
  next = null;
  constructor(data) {
    this.data = data;
  }
}

export default class LinkedList {
  head = null;
  constructor() {}

  addToFront(data) {
    const node = new Node(data);

    if (this.head !== null) {
      node.next = this.head;
    }

    this.head = node;
    return node;
  }

  append(data) {
    const node = new Node(data);

    if (this.head !== null) {
      let temp = this.head;

      while (temp.next !== null) {
        temp = temp.next;
      }

      temp.next = node;
    } else {
      this.head = node;
    }
    return node;
  }

  insertAt(position, data) {
    if (position < 0) {
      throw new Error("Position should be greather than or equal to 0");
    }

    if (position === 0) {
      return this.addToFront(data);
    }

    const node = new Node(data);

    let prevNode = this.head;
    let index = 0;
    let found = false;

    while (prevNode !== null && prevNode.next !== null) {
      index++;

      if (index === position) {
        node.next = prevNode.next;
        prevNode.next = node;
        found = true;
        break;
      }

      prevNode = prevNode.next;
    }

    if (!found) {
      throw new Error("Position not found");
    }

    return node;
  }

  remove(position) {
    if (position < 0) {
      throw new Error("Position should be greather than or equal to 0");
    }
    if (position === 0) {
      return this.removeFront();
    }

    let index = 0;
    let found = false;
    let prevNode = this.head;
    let node;
    while (prevNode != null && prevNode.next !== null) {
      index++;
      if (index === position) {
        node = prevNode.next;
        prevNode.next = prevNode.next.next;
        found = true;
        break;
      }
      prevNode = prevNode.next;
    }

    if (!found) {
      throw new Error("Position not found");
    }
    return node.data;
  }

  removeFront() {
    if (this.head === null) {
      throw new Error(`Cannot remove front element `);
    }
    const node = this.head;
    this.head = this.head.next;
    return node.data;
  }

  removeLast() {
    if (this.head === null) {
      throw new Error(`Cannot remove front element `);
    }

    let node = null;
    
    if (this.head.next === null) {
      node = this.head;
      this.head = null;
      return node.data;
    }

    let prevNode = this.head;
    let found = false;

    while (prevNode != null && prevNode.next !== null) {
      if (prevNode.next.next === null) {
        found = true;
        break;
      }
      prevNode = prevNode.next;
    }

    if (found) {
      node = prevNode.next;
      prevNode.next = null;
    }

    return node.data;
  }

  clear() {
    this.head = null;
  }
}
