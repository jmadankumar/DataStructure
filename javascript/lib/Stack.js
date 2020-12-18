class Stack {
  capacity = 10;
  top = -1;
  arr = [];

  constructor(size) {
    if (typeof size === "number") {
      this.capacity = size;
    }
  }

  push(value) {
    if (this.top === this.capacity - 1) {
      throw new Error("Stack overflow");
    }
    this.top++;
    this.arr.push(value);
  }

  pop() {
    if (this.top === -1) {
      throw new Error("Stack underflow");
    }

    this.top--;
    return this.arr.pop();
  }

  peek() {
    return this.arr[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }

  get size() {
    return this.arr.length;
  }
}

export default Stack;
