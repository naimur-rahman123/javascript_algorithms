// Binary Heaps: Very similar to Binary Search Trees, but with some different rules.
//  - Max Binary Heaps: In a Max Binary Heap, Parent Nodes are always larger than child Nodes.
//  - Min Binary Heaps: In a Min Binary Heap, Parent Nodes are always smaller than Child Nodes.

// Use Cases:
//  - Binary Heaps are used to implement Priority Queues, which are very commonly used data structures.
//  - They are also used quite a bit, with Graph Traversal algorithms.

// Representing a Heap with an array:

// 100
//      19 36
//             17 12 25 5
//                         9 15 6 11 13  8  1  4
// 100  19 36  17 12 25 5  9 15 6 11 13  8  1  4
//   |  |  |   |  |  |  |  | |  | |   |  |  |  |
//   0  1  2   3  4  5  6  7 8  9 10 11 12 13 14 (Array indexes)

// For Each Parent Node  'n' -->    Left child Index  Right Child Index
//                                       2n + 1            2n + 2

// For any children Node at index 'n' --> It's parent is at index => Math.floor((n - 1) / 2)

// Implementation of Max Binary Heap:
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // Adding to a MaxBinaryHeap --> Add to the end --> Bubble up
  // Time Complexity: O(log n)
  insert(value) {
    this.values.push(value);

    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0) {
      if (this.values[index] <= this.values[parentIndex]) break;
      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }

    return this;
  }

  // Removing from a MaxBinaryHeap --> Remove the root --> Replace with the most recently added --> Bubble down
  // Time Complexity: O(log n)
  extractMax() {
    const max = this.values[0];
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
        if (leftChild > element) swap = leftChildIdx;
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === false && rightChild > element) ||
          (swap !== false && rightChild > leftChild)
        )
          swap = rightChildIdx;
      }

      if (swap === false) break;

      this.values[parentIdx] = this.values[swap];
      this.values[swap] = element;

      parentIdx = swap;
    }

    return max;
  }
}

const heap = new MaxBinaryHeap();
heap
  .insert(41)
  .insert(39)
  .insert(33)
  .insert(18)
  .insert(27)
  .insert(12)
  .insert(55)
  .insert(1)
  .insert(45)
  .insert(100);

console.log(heap.extractMax());
console.log(heap.extractMax());

console.log(heap);
