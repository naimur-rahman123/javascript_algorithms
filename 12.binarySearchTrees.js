// Tree Terminology:
//  - Root --> The top node in a tree.
//  - Child --> A node directly connected to another node when moving away from the Root.
//  - Parent --> The converse notion of a child.
//  - Siblings --> A group of nodes with the same parent.
//  - Leaf --> A node with no children.
//  - Edge --> The connection between one node and another.

// Tree Applications:
//  - HTML DOM
//  - Network Routing
//  - Abstract Syntax Tree
//  - Artificial Intelligence
//  - Folders in Operating System
//  - JSON

// Kinds of Trees:
// Binary Search tree => can be applied for searching an element in a set of elements.
// Heap trees => are used for heap sort.
// Modern routers use a type of tree called Tries => for storing routing information.
// The B-Trees and the T-Trees => are mostly used by popular databases to store their data.

// Binary Search Tree ==> is a node-based binary tree data structure which has the following properties: The left subtree of a node contains only nodes with keys lesser than the node's key. The right subtree of a node contains only nodes with keys greater than the node's key.

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
}

const tree = new BinarySearchTree();

//            10
//      5          13
//   2    7     11     16

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(7);
tree.insert(16);
tree.insert(2);
tree.insert(11);

console.log(tree.find(5)); // Node { value: 5, left: Node, right: Node }
console.log(tree.find(6)); // undefined

console.log(tree);
