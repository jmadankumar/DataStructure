class Stack {
  constructor(size = 10) {
    this.capacity = size;
    this.arr = [];
    this.top = -1;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  push(value) {
    if (this.isFull()) {
      throw new Error("Stack overflow");
    }
    this.top++;
    this.size++;
    this.arr.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }

    this.top--;
    this.size--;
    return this.arr.pop();
  }

  peek() {
    return this.arr[this.top];
  }
}

export default Stack;
