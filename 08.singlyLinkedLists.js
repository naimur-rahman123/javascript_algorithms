// A singly linked list is a type of linked list that is unidirectional, that is, it can be traversed in only one direction from head to the last node (tail). Each element in a linked list is called a node. A single node contains data and a pointer to the next node which helps in maintaining the structure of the list.

// Motivation: Why Singly Linked List
// Singly linked list is preferred when we need to save memory and searching is not required as pointer of single index is stored. If we need better performance while searching and memory is not a limitation in this case doubly linked list is more preferred.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // adding a node at the end of a linked list --> O(1)
  push(val) {
    // creating a new node with the given value
    const newNode = new Node(val);

    // updating the tail for empty list and non-empty list
    if (!this.tail) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // updating the length
    this.length++;

    // returning the linked list for chaining methods
    return this;
  }

  // removing a node from the end of a linked list --> O(n)
  pop() {
    // handling an empty list
    if (!this.tail) return undefined;

    // handling a non-empty list
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;

    this.length--;

    // handling the last item
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // removing a node from the beginning of a linked list --> O(1)
  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;

    this.head = oldHead.next;

    this.length--;

    // handling the last item
    if (this.length === 0) {
      this.tail = null;
    }

    return oldHead;
  }

  // adding a node at the beginning of a linked list --> O(1)
  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;

    return this;
  }

  // retrieving a node by it's position in the linked list --> O(n)
  get(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    let counter = 0;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  // changing the value of a node based on it's position in the linked list --> O(n)
  set(index, val) {
    const foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  // adding a node to a linked list at a specific position --> O(n)
  insert(index, val) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(val);

    if (index === this.length) return !!this.push(val);

    const prev = this.get(index - 1);

    const newNode = new Node(val);
    newNode.next = prev.next;
    prev.next = newNode;

    this.length++;

    return true;
  }

  // removing a node from the linked list at a specific position --> O(n)
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    const prev = this.get(index - 1);
    const removedNode = prev.next;
    prev.next = removedNode.next;

    this.length--;

    return removedNode;
  }

  // reversing the linked list in place --> O(n)
  reverse() {
    const node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let current = node;

    while (current !== null) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }
}

const list = new SinglyLinkedList();
list.push('a');
list.push('b');
list.push('c');
list.push('d');

console.log(list.reverse());
