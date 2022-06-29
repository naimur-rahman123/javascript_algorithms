// Priority Queue: A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities.

// Priority Queue using a Min Binary Heap:

class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

// Implementation of Priority Queue using Min Binary Heap:
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);

    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index].priority >= this.values[parentIndex].priority)
        break;
      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];
      index = parentIndex;
    }

    return this;
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) this.values[0] = end;

    let parentIdx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;
      let leftChild, rightChild;
      let swap = false;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === false && rightChild.priority < element.priority) ||
          (swap !== false && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIdx;
      }

      if (swap === false) break;

      this.values[parentIdx] = this.values[swap];
      this.values[swap] = element;

      parentIdx = swap;
    }

    return min;
  }
}

const priorityQueue = new PriorityQueue();

priorityQueue
  .enqueue('common cold', 5)
  .enqueue('gunshot wound', 1)
  .enqueue('high fever', 4)
  .enqueue('broken arm', 2)
  .enqueue('glass in foot', 3);

console.log(priorityQueue.dequeue()); // Node { value: 'gunshot wound', priority: 1 }
console.log(priorityQueue.dequeue()); // Node { value: 'broken arm', priority: 2 }
console.log(priorityQueue.dequeue()); // Node { value: 'glass in foot', priority: 3 }

console.log(priorityQueue);
// PriorityQueue {
//   values: [
//     Node { value: 'high fever', priority: 4 },
//     Node { value: 'common cold', priority: 5 }
//   ]
// }
