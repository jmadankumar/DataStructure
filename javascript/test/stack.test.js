import Stack from "../src/Stack";

describe("Test stack data structure", () => {
  test("should initialize stack with the default capacity", () => {
    const stack = new Stack();
    expect(stack.capacity).toBe(10);
  });

  test("should initialize stack with the provided capacity", () => {
    const stack = new Stack(20);
    expect(stack.capacity).toBe(20);
  });

  test("should insert new value into the stack", () => {
    const stack = new Stack();
    stack.push("100");
    expect(stack.size).toBe(1);
  });

  test("should throw stack overflow error", () => {
    const stack = new Stack(2);
    stack.push("Javascript");
    stack.push("Java");

    expect(() => stack.push("Rust")).toThrow("Stack overflow");
  });

  test("should remove and return last value from the stack", () => {
    const stack = new Stack();

    stack.push("Hello world");
    expect(stack.size).toBe(1);

    expect(stack.pop()).toBe("Hello world");
    expect(stack.size).toBe(0);
  });

  test("should throw stack underflow error", () => {
    const stack = new Stack(2);
    stack.push("Biryani");
    stack.pop();

    expect(() => stack.pop()).toThrow("Stack underflow");
  });

  test("should return last inserted value from the stack", () => {
    const stack = new Stack();

    stack.push("First value");
    stack.push("Middle value");
    stack.push("Last value");

    const value = stack.peek();
    expect(value).toBe("Last value");
  });

  test("should return empty", () => {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();

    expect(stack.isEmpty()).toBeTruthy();
  });

  test('should return stack is full',()=>{
    const stack = new Stack(5);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    expect(stack.isFull()).toBeTruthy();
  });
});
