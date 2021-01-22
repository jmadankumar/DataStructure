import LinkedList from "../lib/LinkedList";

describe("Test Linked List", () => {
  test("Should initialize linked list", () => {
    const list = new LinkedList();
    expect(list.head).toBe(null);
  });

  test("should add data to the front of the linked list", () => {
    const list = new LinkedList();

    list.addToFront(10);

    expect(list.head.data).toBe(10);

    list.addToFront(20);
    expect(list.head.data).toBe(20);
  });

  test("should add data to the end of the linked list", () => {
    const list = new LinkedList();
    list.append(10);

    expect(list.head.data).toBe(10);

    list.append(20);

    expect(list.head.next.data).toBe(20);

    list.append(30);

    expect(list.head.next.next.data).toBe(30);
  });

  test("should add data at a specific position", () => {
    const list = new LinkedList();

    list.insertAt(0, 10);
    expect(list.head.data).toBe(10);

    list.insertAt(0, 20);
    expect(list.head.data).toBe(20);

    list.insertAt(1, 30);

    expect(list.head.next.data).toBe(30);

    expect(() => list.insertAt(-1, 40)).toThrow("Position should be greather than or equal to 0");

    expect(() => list.insertAt(5, 60)).toThrow("Position not found");

    list.insertAt(2, 40);

    expect(list.head.next.next.data).toBe(40);
  });

  test("Should remove element from the front", () => {
    const list = new LinkedList();

    expect(() => list.removeFront()).toThrow("Cannot remove front element");

    list.append("Guava");
    list.append("Papaya");

    expect(list.head.data).toBe("Guava");
    expect(list.head.next.data).toBe("Papaya");

    list.removeFront();
    expect(list.head.data).toBe("Papaya");

    list.removeFront();
    expect(list.head).toBe(null);
  });

  test("should remove the last value from the linked list", () => {
    const list = new LinkedList();

    list.append(10);
    list.append(20);
    list.append(30);

    expect(list.removeLast()).toBe(30);
    expect(list.removeLast()).toBe(20);
    expect(list.removeLast()).toBe(10);

    expect(() => list.removeLast()).toThrow("Cannot remove front element");
  });

  test("should remove the element from the specific position", () => {
      const list = new LinkedList();
      list.append("Jest");
      list.append("Chai");
      list.append("Mocha");

      expect(()=>list.remove(-2)).toThrow("Position should be greather than or equal to 0");
      expect(list.remove(2)).toBe("Mocha");
      expect(list.remove(1)).toBe("Chai");
      expect(list.remove(0)).toBe("Jest");
      expect(()=>list.remove(3)).toThrow("Position not found");
  });

  test("should clear linked list", () => {
    const list = new LinkedList();

    list.append("MacOS");
    list.append("Windows");
    list.append("Linux");

    list.clear();

    expect(list.head).toBe(null);
  });
});
