interface DoublyLinkedListNode {
  value: number | string;
  prev: DoublyLinkedListNode | null;
  next: DoublyLinkedListNode | null;
}

class DoublyLinkedList {
  private head: DoublyLinkedListNode | null;
  private tail: DoublyLinkedListNode | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  private prepareNode(elem: string | number): DoublyLinkedListNode {
    return {
      value: elem,
      prev: null,
      next: null,
    };
  }

  // inserting an item at the end of the list is O(1)
  push(elem: string | number) {
    const newNode = this.prepareNode(elem);

    if (this.tail) {
      const current = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.prev = current;
    }

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    this.length++;
  }

  // removing an item from the end of the list is O(1)
  pop() {
    if (!this.head) return "List is empty";

    if (this.tail && this.tail?.prev) {
      const newTail = this.tail.prev;
      newTail.next = null;
      this.tail = newTail;
    }
    this.length--;
  }

  // removing an item from the beginning of the list is O(1)
  shift() {
    if (!this.head) return "List is empty";

    const current = this.head;
    const newHead = current.next;

    this.head = newHead;
    this.length--;
  }

  // adding an element at the beginning of the list is O(1)
  unshift(elem: string | number) {
    if (!this.head) return "List is empty";

    const current = this.head;
    const newNode = this.prepareNode(elem);
    newNode.next = current;

    this.head = newNode;
    this.length++;
  }

  // finding an element at index is O(n)
  findAt(index: number): DoublyLinkedListNode | null {
    if (!this.head) return null;
    if (index < 0 || index > this.length) return null;

    let current = this.head;
    let iteration = 0;

    while (iteration !== index) {
      if (current.next) {
        current = current.next;
      }
      iteration++;
    }

    return current;
  }

  // inserting an element at index is O(n)
  insertAt(index: number, elem: string | number) {
    if (!this.head) return "List is empty";
    if (index < 0 || index > this.length)
      return "Cannot insert at unbound index";

    const newNode = this.prepareNode(elem);
    const prev = this.findAt(index - 1);

    if (prev !== null) {
      const temp = prev.next;
      prev.next = newNode;
      if (temp) {
        newNode.next = temp;
      }
    }
    this.length++;
  }

  getList() {
    if (this.length === 0) return "List is empty";

    let current: DoublyLinkedListNode | null = this.head;
    let list: string = "";

    while (current) {
      list += `${current.value} `;
      current = current.next;
    }

    return list;
  }

  getLength() {
    return this.length;
  }
}
