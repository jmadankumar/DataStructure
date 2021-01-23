import DoublyLinkedList from "../lib/DoublyLinkedList";

describe("Test Doubly Linked List", () => {
  test("should initialize Doubly Linked list with head and tail", () => {
    const list = new DoublyLinkedList();

    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });

  test("should add element to the front of the list", () => {
    const list = new DoublyLinkedList();

    list.addToFront(10);
    expect(list.head.data).toBe(10);
    expect(list.tail.data).toBe(10);

    list.addToFront(20);
    expect(list.head.data).toBe(20);
    expect(list.tail.data).toBe(10);
    expect(list.head.next.data).toBe(10);
    expect(list.head.next.prev.data).toBe(20);

    list.addToFront(30);
    expect(list.head.data).toBe(30);
    expect(list.tail.data).toBe(10);
    expect(list.head.next.data).toBe(20);
    expect(list.tail.prev.data).toBe(20);
    expect(list.head.next.next.data).toBe(10);
    expect(list.tail.prev.prev.data).toBe(30);
  });

  test("should add element to the end of the list", () => {
    const list = new DoublyLinkedList();

    expect(list.tail).toBe(null);

    list.append("List");
    expect(list.tail.data).toBe("List");

    list.append("Map");
    expect(list.tail.data).toBe("Map");

    list.append("String");
    expect(list.tail.data).toBe("String");
  });

  test("should remove element from the front of the list", () => {
    const list = new DoublyLinkedList();

    list.append("Asus");
    list.append("Lenovo");
    list.append("Dell");

    expect(list.removeFirst()).toBe("Asus");
    expect(list.tail.data).toBe("Dell");
    expect(list.head.data).toBe("Lenovo");

    expect(list.removeFirst()).toBe("Lenovo");
    expect(list.tail.data).toBe("Dell");
    expect(list.head.data).toBe("Dell");

    expect(list.removeFirst()).toBe("Dell");
    expect(list.tail).toBe(null);
    expect(list.head).toBe(null);

    expect(() => list.removeFirst()).toThrow("List is empty");
  });

  test("should remove element from the last of the list", () => {
    const list = new DoublyLinkedList();

    list.append("Boat");
    list.append("JBL");
    list.append("IBall");

    expect(list.removeLast()).toBe("IBall");
    expect(list.tail.data).toBe("JBL");

    expect(list.removeLast()).toBe("JBL");
    expect(list.tail.data).toBe("Boat");

    expect(list.removeLast()).toBe("Boat");
    expect(list.tail).toBe(null);

    expect(() => list.removeLast()).toThrow("List is empty");
  });

  test("should return the size of the list", () => {
    const list = new DoublyLinkedList();

    list.append("Info");
    list.append("Warn");
    list.append("Error");

    expect(list.size()).toBe(3);
  });

  test("should clear the list", () => {
    const list = new DoublyLinkedList();

    list.append("Photoshop");
    expect(list.head.data).toBe("Photoshop");
    expect(list.tail.data).toBe("Photoshop");

    list.append("Gimp");
    expect(list.head.data).toBe("Photoshop");
    expect(list.tail.data).toBe("Gimp");

    list.clear();
    expect(list.head).toBe(null);
    expect(list.tail).toBe(null);
  });
});
