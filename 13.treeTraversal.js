class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // inserting a node in a BST based on their values --> O(log n) [Not guaranteed]
  insert(value) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return this;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return this;
        }
        current = current.right;
      }
    }
  }

  // finding a node in a BST based on their values --> O(log n) [Not guaranteed]
  find(value) {
    let current = this.root;

    while (current) {
      if (current.value === value) {
        return current;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return undefined;
  }

  // Breadth First Search --> Uses a queue to track all "SIBLINGS" from left to right --> O(n)
  // If its a wide tree --> BFS will take a lot more spaces because of the queue
  BFS() {
    const nodes = [];
    const queue = []; // Using Array as Queue for simplicity
    let node = this.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      nodes.push(node);
      // nodes.push(node.value); // for testing purpose
    }

    return nodes;
  }

  // Depeth first Search --> Uses recursion to gr from to to bottom --> O(n)
  // If its a wide tree --> DFS will take a lot more spaces because of the call stack

  // Visit the Node --> First push the Node first -> Then traverse left side -> Then traverse right side
  DFSPreOrder() {
    const nodes = [];

    (function traverse(node) {
      nodes.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    })(this.root);

    return nodes;
  }

  // Visit the Node -> First traverse left side -> Then traverse right side -> & Lastly push the node
  DFSPostOrder() {
    const nodes = [];

    (function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      nodes.push(node.value);
    })(this.root);

    return nodes;
  }

  // Visit the Node -> First traverse left side -> Then push the node -> & Then traverse right side
  DFSInOrder() {
    const nodes = [];

    (function traverse(node) {
      node.left && traverse(node.left);
      nodes.push(node.value);
      node.right && traverse(node.right);
    })(this.root);

    return nodes;
  }
}

const tree = new BinarySearchTree();

//            10
//      5          13
//   2    7     11     16

tree.insert(10).insert(5).insert(13).insert(7).insert(16).insert(2).insert(11);

console.log(tree.DFSPreOrder()); // [ 10, 5, 2, 7, 13, 11, 16 ]
console.log(tree.DFSPostOrder()); // [ 2, 7, 5, 11, 16, 13, 10 ]
console.log(tree.DFSInOrder()); // [ 2, 5, 7, 10, 11, 13, 16 ]

// console.log(tree);
