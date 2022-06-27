// Queue --> FIFO --> First In First Out
// Use Cases:
//  - Online Game Joining
//  - Background Task
//  - Uploading / Downloading Resources (if other facts are ignored)
//  - Print / Task Processing

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // adding at the end of a list --> Queue enqueue method --> O(1)
  enqueue(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  // removing from the beginning of a list --> Queue dequeue method --> O(1)
  dequeue() {
    if (this.size === 0) return null;

    const temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;

    this.size--;

    return temp.val;
  }
}

const queue = new Queue();

console.log(queue.enqueue('first')); // 1 (size)
console.log(queue.enqueue('second')); // 2 (size)

console.log(queue.dequeue()); // 'first'
console.log(queue.dequeue()); // 'second'
console.log(queue.dequeue()); // null

console.log(queue);
