import PriorityQueue from "../lib/PriorityQueue";

describe("Test Priority Queue", () => {
  test("should initialize priority queue with default capacity", () => {
    const queue = new PriorityQueue();
    expect(queue.capacity).toBe(10);
  });

  test("should initialize priority queue with provided size", () => {
    const queue = new PriorityQueue(5);
    expect(queue.capacity).toBe(5);
  });

  test("should insert value to queue", () => {
    const queue = new PriorityQueue(5);
    queue.enqueue(1, "Stack");
    queue.enqueue(2, "Queue");
    queue.enqueue(1, "Circular Queue");
    expect(queue.size()).toBe(3);
  });

  test("should throw error when inserting value to full queue", () => {
    const queue = new PriorityQueue(2);
    expect(() => {
      queue.enqueue(1, "Zomato");
      queue.enqueue(1, "Swiggy");
      queue.enqueue(2, "Big Basket");
    }).toThrow("Queue is Full");
  });

  test("should remove value from the front of the queue", () => {
    const queue = new PriorityQueue(5);
    queue.enqueue(2, "Rust");
    queue.enqueue(1, "Go");
    const value = queue.dequeue();
    expect(value).toBe("Go");
    expect(queue.size()).toBe(1);
  });

  test("should throw error when removing from empty queue", () => {
    const queue = new PriorityQueue(5);
    expect(() => {
      queue.dequeue();
    }).toThrow("Queue is Empty");
  });

  test("should return queue is empty", () => {
    const queue = new PriorityQueue(5);
    queue.enqueue(1, "Dosa");
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("should return the size of queue", () => {
    const queue = new PriorityQueue(5);
    queue.enqueue(1, "Zoho");
    queue.enqueue(2, "Freshworks");
    expect(queue.size()).toBe(2);
  });

  test("should return the front item of the queue", () => {
    const queue = new PriorityQueue(5);

    queue.enqueue(2, "Mahindra Motors");
    queue.enqueue(1, "Tata motors");
    queue.enqueue(2, "Hero Motors");

    expect(queue.front()).toBe("Tata motors");

    queue.dequeue();

    expect(queue.front()).toBe("Mahindra Motors");
  });

  test("should return error when querying front value of empty queue", () => {
    const queue = new PriorityQueue(5);

    expect(() => {
      queue.front();
    }).toThrow("Queue is Empty");
  });
  
  test("should return error when querying rear value of empty queue", () => {
    const queue = new PriorityQueue(1);

    expect(() => {
      queue.rear();
    }).toThrow("Queue is Empty");
  });

  test("should return the rear item of the queue", () => {
    const queue = new PriorityQueue(5);

    queue.enqueue(2, "Boat");
    expect(queue.rear()).toBe("Boat");

    queue.enqueue(1, "Micromax");
    expect(queue.rear()).toBe("Boat");

    queue.enqueue(2, "Zebronics");
    expect(queue.rear()).toBe("Zebronics");
  });
});
