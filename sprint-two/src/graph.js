

// Instantiate a new graph
var Graph = function() {
  this.storage = {};
  this.nodes = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = node;
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return Object.values(this.storage).includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.storage) {
    if (this.storage[key] === node) {
      delete this.storage[key];
    }
  }

  for (var i = 0; i < this.nodes.length; i++) {
    this.removeEdge(node, this.nodes[i]);
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var args = [fromNode, toNode];
  var argsReverse = [toNode, fromNode];

  if (this.storage[JSON.stringify(args)] === undefined
  && this.storage[JSON.stringify(argsReverse)] === undefined) {
    return false;
  }
  return true;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var edge = [fromNode, toNode];
  this.storage[JSON.stringify(edge)] = edge;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  var args = [fromNode, toNode];
  var argsReverse = [toNode, fromNode];

  delete this.storage[JSON.stringify(args)];
  delete this.storage[JSON.stringify(argsReverse)];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // console.log(this.storage);
  // console.log(Object.values(this.storage));
  // cb.apply(this.storage, Object.values(this.storage));

  // for (var node of this.nodes) {
  //   console.log('node', node);
  //   cb(node);

  // }

  for (var i = 0; i < this.nodes.length; i++) {
    cb(this.nodes[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


