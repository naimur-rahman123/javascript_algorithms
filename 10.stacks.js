// Stack --> LIFO --> Last In First Out
// Use Cases:
//  - Managing function invocation
//  - Undo / Redo
//  - Routing (the history object) is treated like a stack

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.size = 0;
  }

  // adding from the beginning of a list --> stack push method --> O(1)
  push(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  // removing from the beginning of a list --> stack pop method --> O(1)
  pop() {
    if (!this.first) return null;

    const temp = this.first;
    this.first = temp.next;

    this.size--;

    return temp.val;
  }
}

const stack = new Stack();

console.log(stack.push('first')); // 1 (size)
console.log(stack.push('second')); // 2 (size)

console.log(stack.pop()); // 'second'
console.log(stack.pop()); // 'first'
console.log(stack.pop()); // null

console.log(stack);
