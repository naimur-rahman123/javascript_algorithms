// A graph is a common data structure that consists of a finite set of nodes (or vertices) and a set of edges connecting them.

// Graph Terminology
//   Vertex: A node
//   Edge: Connection between Nodes / Vertices
//   Weighted / Unweighted: Values assigned to distances between vertices (Value of Edges -> have / don't have)
//   Directed / Undirected: Directions assigned to distanced between vertices (Directions / Polarity)
//   Adjacency: A vertex is said to be adjacent to another vertex if there is an edge connecting them. Vertices 2 and 3 are not adjacent because there is no edge between them.
//   Path: A sequence of edges that allows you to go from vertex A to vertex B is called a path. 0-1, 1-2 and 0-2 are paths from vertex 0 to vertex 2.
//   Directed Graph: A graph in which an edge (u,v) doesn't necessarily mean that there is an edge (v, u) as well. The edges in such a graph are represented by arrows to show the direction of the edge.

// Graph Representation
//  1. Adjacency Matrix
//    - Takes up more space (in sparse graphs)
//    - Slower to iterate over all edges
//    - Faster to lookup specific edge
//  2. Adjacency List
//    - Can take up less space (in sparse graphs)
//    - Faster to iterate over all edges
//    - Can be slower to lookup specific edge

// Differences & Big O
// |V| = Number of vertices
// |E| = number of edges

// Operation         Adjacency-List     Adjacency-Matrix
//-------------------------------------------------------
// Add Vertex             O(1)              O(|V^2|)
// Add Edge               O(1)                O(1)
// Remove Vertex      O(|V| + |E|)          O(|V^2|)
// Remove Edge            O(E)                O(1)
// Query              O(|V| + |E|)            O(1)
// Storage            O(|V| + |E|)          O(|V^2|)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Graph implementation using Adjacency-List
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
}

const graph = new Graph();

graph.addVertex('Tokyo');
graph.addVertex('Dallas');
graph.addVertex('Aspen');
graph.addVertex('Hong Kong');
graph.addVertex('Los Angeles');

graph.addEdge('Tokyo', 'Dallas');
graph.addEdge('Tokyo', 'Hong Kong');
graph.addEdge('Dallas', 'Aspen');
graph.addEdge('Dallas', 'Hong Kong');
graph.addEdge('Dallas', 'Los Angeles');
graph.addEdge('Hong Kong', 'Los Angeles');

graph.removeEdge('Tokyo', 'Dallas');

graph.removeVertex('Hong Kong');

console.log(graph);
