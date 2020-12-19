class Queue {
  constructor(size = 10) {
    this.capacity = size;
    this.head = 0;
    this.tail = -1;
    this.size = 0;
    this.arr = [];
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  enqueue(value) {
    if (this.isFull()) {
      throw new Error("Queue reached max capacity");
    }

    this.tail++;
    this.size++;
    this.arr.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }

    this.tail--;
    this.size--;
    return this.arr.shift();
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.arr[this.head];
  }

  rear() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.arr[this.tail];
  }
}

export default Queue;
