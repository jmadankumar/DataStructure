class PriotityItem {
  constructor(priority, value) {
    this.priority = priority;
    this.value = value;
  }
}

export default class PriorityQueue {
  constructor(size = 10) {
    this.capacity = size;
    this.collection = [];
  }

  enqueue(priority, value) {
    if (this.capacity === this.size()) {
      throw new Error("Queue is Full");
    }

    const insertIndex = this.collection.findIndex((item) => {
      return item.priority > priority;
    });


    const newItem = new PriotityItem(priority, value);

    if (insertIndex !== -1) {
      this.collection.splice(insertIndex, 0, newItem);
    } else {
      this.collection.push(newItem);
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    const item = this.collection.shift();
    return item.value;
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    const item = this.collection[0];
    return item.value;
  }

  rear() {
    if (this.isEmpty()) {
      throw new Error("Queue is Empty");
    }
    const item = this.collection[this.collection.length - 1];
    return item.value;
  }

  size() {
    return this.collection.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
}
