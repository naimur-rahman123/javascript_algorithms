// Dijkstras Algorithm finds the shortest path on an weighted graph from one Vertex to Another Vertex
// Why Dijkstras Algorithm?
//  - GPS (finding fastest route)
//  - Network Routing (finds open shortest path for data)
//  - Biology (used to model the spread of viruses among humans)
//  - Airline Tickets (finding cheapest route to your destination) etc...

// Implementation of Priority Queue using Min Binary Heap:
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
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

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  // adding a vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }

  // Adding Edges --> For Undirected Graph
  addEdge(vertex1, vertex2, weight) {
    // checking for valid vertices and then pushing edges to the vertex
    this.adjacencyList[vertex2] &&
      this.adjacencyList[vertex1]?.push({ node: vertex2, weight });
    this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex2]?.push({ node: vertex1, weight });
    return this.adjacencyList;
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = []; // to return at end
    let smallest;

    // Build up initial State
    for (let vertex in this.adjacencyList) {
      if (vertex === start) distances[vertex] = 0;
      else distances[vertex] = Infinity;

      nodes.enqueue(vertex, distances[vertex]);
      previous[vertex] = null;
    }

    // As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        // We are done --> Build up path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          let nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous -> How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

console.log(graph.Dijkstra('A', 'E')); // [ 'A', 'C', 'D', 'F', 'E' ]
console.log(graph.Dijkstra('A', 'C')); // [ 'A', 'C' ]
console.log(graph.Dijkstra('A', 'F')); // [ 'A', 'C', 'D', 'F' ]
console.log(graph.Dijkstra('A', 'A')); // [ 'A' ]

// console.log(graph);
