import CircularLinkedList from "../lib/CircularLinkedList";

describe("Test Circular Linked List", () => {
  test("should initialize list with head pointing to null", () => {
    const list = new CircularLinkedList();
    expect(list.head).toBe(null);
  });

  test("should add element to the front of the list", () => {
    const list = new CircularLinkedList();

    list.addFirst("Buffer");
    expect(list.print()).toBe("Buffer");

    list.addFirst("Shared Buffer");
    expect(list.print()).toBe("Shared Buffer Buffer");
  });

  test("should add element to the end of the list", () => {
    const list = new CircularLinkedList();

    list.add("String");
    expect(list.print()).toBe("String");

    list.add("Null");
    expect(list.print()).toBe("String Null");

    list.add("Number");
    expect(list.print()).toBe("String Null Number");
  });

  test("should remove element from the front of the list", () => {
    const list = new CircularLinkedList();

    expect(() => list.removeFirst()).toThrow("List is Empty");

    list.add("Interface");
    list.add("Type");

    expect(list.removeFirst()).toBe("Interface");
    expect(list.removeFirst()).toBe("Type");
  });

  test("should remove element from the end of the list", () => {
    const list = new CircularLinkedList();

    expect(() => list.removeLast()).toThrow("List is Empty");

    list.add("Dart");
    list.add("Flutter");
    list.add("Android");

    expect(list.removeLast()).toBe("Android");
    expect(list.removeLast()).toBe("Flutter");
    expect(list.removeLast()).toBe("Dart");
  });

  test("should print the list",()=>{
      const list = new CircularLinkedList();

      expect(list.print()).toBe("List is Empty");
      list.add("Macro");
      list.add("Crate");

      expect(list.print()).toBe("Macro Crate");
  })
});
