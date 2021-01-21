export default class CiruclarQueue {
  constructor(size = 10) {
    this.capacity = size;
    this.collection = new Array(size).fill(null);
    this.frontIndex = -1;
    this.rearIndex = -1;
  }
  enqueue(value) {
    if ((this.rearIndex + 1) % this.capacity === this.frontIndex) {
      throw new Error("Queue is Full");
    }

    if (this.frontIndex === -1 && this.rearIndex === -1) {
      this.frontIndex = this.rearIndex = 0;
    } else {
      this.rearIndex = (this.rearIndex + 1) % this.capacity;
    }

    this.collection[this.rearIndex] = value;
  }

  dequeue() {
    if (this.frontIndex === -1 && this.rearIndex === -1) {
      throw new Error("Queue is Empty");
    }

    const value = this.collection[this.frontIndex];

    this.collection[this.frontIndex] = null;

    if (this.frontIndex === this.rearIndex) {
      this.frontIndex = this.rearIndex = -1;
    } else {
      this.frontIndex = (this.frontIndex + 1) % this.capacity;
    }

    return value;
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    return this.collection[this.frontIndex];
  }
  rear() {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    return this.collection[this.rearIndex];
  }
  size() {
    if (this.frontIndex === -1 && this.rearIndex === -1) {
      return 0;
    } else if (this.rearIndex >= this.frontIndex) {
      return this.rearIndex - this.frontIndex + 1;
    } else if (this.frontIndex > this.rearIndex) {
      return this.capacity - this.frontIndex + this.rearIndex + 1;
    }
  }

  isEmpty() {
    return this.size() === 0;
  }
}
