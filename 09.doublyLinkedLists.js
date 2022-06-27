class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adding a node to the end of the Doubly Linked List --> O(1)
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  // removing a node from the end of Doubly Linked List --> O(1)
  pop() {
    if (!this.head) return undefined;

    const removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }

    this.length--;

    return removedNode;
  }

  // removing a node from the beginning of the Doubly Linked List --> O(1)
  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  // adding a node to the beginning of the Doubly Linked List --> O(1)
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  // accessing a node in a Doubly Linked List by its position --> O(n)
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let counter, current;

    if (index <= Math.floor(this.length / 2)) {
      counter = 0;
      current = this.head;
      while (counter != index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
    }

    return current;
  }

  // replacing the value of a node in a Doubly Linked List by its position --> O(n)
  set(index, val) {
    const foundNode = this.get(index);

    if (!foundNode) return false;

    foundNode.val = val;
    return true;
  }

  // adding a node in a Doubly Linked List by a certain position --> O(n)
  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);

    if (index === this.length) return !!this.push(val);

    const currentNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    (prevNode.next = currentNode), (currentNode.prev = prevNode);
    (currentNode.next = nextNode), (nextNode.prev = currentNode);

    this.length++;

    return true;
  }

  // removing a node in a Doubly Linked List by a certain position --> O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);

    removedNode.prev.next = removedNode.next;
    removedNode.next.prev = removedNode.prev;
    (removedNode.prev = null), (removedNode.next = null);

    this.length--;

    return removedNode;
  }

  // reversing the Doubly Linked List in place --> O(n)
  reverse() {
    const node = this.head;
    this.head = this.tail;
    this.tail = node;

    var temp = null;
    var current = node;

    // swap next and prev for all nodes of doubly linked list
    while (current != null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }

    return this;
  }
}

const list = new DoublyLinkedList();

list.push('a');
list.push('b');
list.push('c');

console.log(list);
