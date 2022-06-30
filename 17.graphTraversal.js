// Graph Traversal Uses:
//  - Peer to peer networking
//  - Web crawlers
//  - Finding "closest" matches / recommandations
//  - Shortest path problems:
//     - GPS Navigation
//     - Solving mages
//     - AI (shortest path to win the game)

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // adding a vertex
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this.adjacencyList;
  }

  // Adding Edges --> For Undirected Graph
  addEdge(vertex1, vertex2) {
    // checking for valid vertices and then pushing edges to the vertex
    this.adjacencyList[vertex2] && this.adjacencyList[vertex1]?.push(vertex2);
    this.adjacencyList[vertex1] && this.adjacencyList[vertex2]?.push(vertex1);
    return this.adjacencyList;
  }

  // Removing Edges --> For Undirected Graph
  removeEdge(vertex1, vertex2) {
    // checking for valid vertices and then removing edges from the vertex
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
      );
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      );
    }
    return this.adjacencyList;
  }

  // Removing Vertex --> For Undirected Graph
  removeVertex(vertex) {
    this.adjacencyList[vertex]?.forEach(v => this.removeEdge(v, vertex));
    delete this.adjacencyList[vertex];
    return this.adjacencyList;
  }

  // DEPTH FIRST --> Explore as far as possible down on branch before "backtracing"
  depthFirstRecursive(vertex) {
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vtx) {
      if (!vtx) return null;
      visited[vtx] = true;
      results.push(vtx);
      adjacencyList[vtx].forEach(neighbor => {
        if (!visited[neighbor]) return dfs(neighbor);
      });
    })(vertex);

    return results;
  }

  depthFirstIterative(vertex) {
    const stack = [vertex];
    const results = [];
    const visited = {};
    let currentVertex;

    visited[vertex] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }

    return results;
  }

  // BREADTH FIRST --> Explore all nodes at the present depth prior to moving on to the nodes at the next depth level.
  breadthFirst(vertex) {
    const quque = [vertex];
    const results = [];
    const visited = {};
    let currentVertex;

    visited[vertex] = true;
    while (quque.length) {
      currentVertex = quque.shift();
      results.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          quque.push(neighbor);
        }
      });
    }

    return results;
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

//        A
//      /   \
//     B     C
//     |     |
//     D----E
//     \    /
//       F

console.log(graph.depthFirstRecursive('A')); // [ 'A', 'B', 'D', 'E', 'C', 'F' ]
console.log(graph.depthFirstIterative('A')); // [ 'A', 'C', 'E', 'F', 'D', 'B' ]
console.log(graph.breadthFirst('A')); // [ 'A', 'B', 'C', 'D', 'E', 'F' ]

// console.log(graph);
