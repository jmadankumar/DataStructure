import CiruclarQueue from "../lib/CircularQueue";

describe("Test Circular Queue", () => {
  test("should initialize circular queue with default size", () => {
    const queue = new CiruclarQueue();
    expect(queue.capacity).toBe(10);
  });
  test("should initialize circular queue with the provided size", () => {
    const queue = new CiruclarQueue(5);
    expect(queue.capacity).toBe(5);
  });

  test("should insert new value to the queue", () => {
    const queue = new CiruclarQueue(3);
    queue.enqueue("VueJS");
    queue.enqueue("ReactJS");
    queue.enqueue("Anagular");

    expect(queue.size()).toBe(3);
  });

  test("should throw error when trying to enqueue new value on full queue", () => {
    const queue = new CiruclarQueue(2);
    queue.enqueue("Rasmalai");
    queue.enqueue("Kaju kathli");

    expect(() => {
      queue.enqueue("Rasagula");
    }).toThrow("Queue is Full");
  });

  test("should delete the value from the queue", () => {
    const queue = new CiruclarQueue(2);
    queue.enqueue(5);
    queue.enqueue(20);
    expect(queue.dequeue()).toBe(5);
    expect(queue.size()).toBe(1);


    queue.enqueue(300);
    expect(queue.size()).toBe(2);
    expect(queue.dequeue()).toBe(20);

    expect(queue.size()).toBe(1);
    expect(queue.dequeue()).toBe(300);

    
  });

  test("should throw error when dequeue on empty queue", () => {
    const queue = new CiruclarQueue(3);

    expect(() => {
      queue.dequeue();
    }).toThrow("Queue is Empty");

    queue.enqueue("VS code");
    queue.dequeue();

    expect(() => {
      queue.dequeue();
    }).toThrow("Queue is Empty");
  });

  test("Should return Queue is empty", () => {
    const queue = new CiruclarQueue(5);

    expect(queue.isEmpty()).toBe(true);

    queue.enqueue("Coconut");
    expect(queue.isEmpty()).toBe(false);

    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  test("should return front value", () => {
    const queue = new CiruclarQueue(5);

    expect(() => {
      queue.front();
    }).toThrow("Queue is Empty");

    queue.enqueue("Mumbai");
    expect(queue.front()).toBe("Mumbai");

    queue.enqueue("Chennai");
    queue.enqueue("Banglore");
    queue.dequeue();
    queue.dequeue();
    expect(queue.front()).toBe("Banglore");
  });

  test("should return rear value", () => {
    const queue = new CiruclarQueue(5);

    expect(() => {
      queue.rear();
    }).toThrow("Queue is Empty");

    queue.enqueue('Dosa');
    expect(queue.rear()).toBe("Dosa");
  });
});
