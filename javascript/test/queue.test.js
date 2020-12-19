import Queue from "../lib/Queue";

describe("Test queue data structure", () => {
  test("should initialize with the default capacity", () => {
    const queue = new Queue();
    expect(queue.capacity).toBe(10);
  });

  test("should initialize with the provided capacity", () => {
    const queue = new Queue(5);
    expect(queue.capacity).toBe(5);
  });

  test("should insert new value to the end of the queue", () => {
    const queue = new Queue(5);
    queue.enqueue("Rust");
    queue.enqueue("Go");
    expect(queue.size).toBe(2);
  });

  test("should return error when inserting new value to the fully occupied Queue", () => {
    const queue = new Queue(2);

    queue.enqueue("2002");
    queue.enqueue("1994");

    expect(() => queue.enqueue("2000")).toThrow("Queue reached max capacity");
  });

  test("should remove value from the starting position of the queue", () => {
    const queue = new Queue(5);

    queue.enqueue("Martian");
    queue.enqueue("Gravity");

    const value = queue.dequeue();
    expect(value).toBe("Martian");
    expect(queue.size).toBe(1);
  });

  test("should return error when dequeue on the empty Queue", () => {
    const queue = new Queue(6);

    queue.enqueue("Dog");
    queue.dequeue();

    expect(() => queue.dequeue()).toThrow("Queue is empty");
  });

  test("should return first inserted into the queue", () => {
    const queue = new Queue(6);

    queue.enqueue("Stack");
    queue.enqueue("Priority queue");

    expect(queue.front()).toBe("Stack");
  });

  test("should throw error when querying first inserted on the empty queue", () => {
    const queue = new Queue(6);
    expect(() => queue.front()).toThrow("Queue is empty");
  });

  test("should return last inserted into the queue", () => {
    const queue = new Queue(6);

    queue.enqueue("Stack");
    queue.enqueue("Priority queue");

    expect(queue.rear()).toBe("Priority queue");
  });

  test("should throw error when querying last inserted value on the empty queue", () => {
    const queue = new Queue(6);
    expect(() => queue.rear()).toThrow("Queue is empty");
  });
});
