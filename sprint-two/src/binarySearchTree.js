// var BinarySearchTree = function(value) {
//   var newBinarySearchTree = {};
//   newBinarySearchTree.value = value;
//   newBinarySearchTree.values = [];
//   newBinarySearchTree.values.push(value);
//   newBinarySearchTree.left = {};
//   newBinarySearchTree.right = {};

//   _.extend(newBinarySearchTree, BSTMethods);
//   return newBinarySearchTree;
// };

// var BSTMethods = {};

// BSTMethods.insert = function(newValue) {
//   this.values.push(newValue);

//   if (newValue < this.value) {
//     this.left[newValue] = newValue;
//     console.log('left', this.left[newValue]);
//   } else if (newValue > this.value) {
//     this.right[newValue] = newValue;
//     console.log('right', this.right[newValue]);
//   }

// };

// BSTMethods.contains = function(value) {
//   return this.values.includes(value);
// };

// BSTMethods.depthFirstLog = function(cb) {
//   for (var i = 0; i < this.values.length; i++) {
//     cb(this.values[i]);
//   }
// };

var BinarySearchTree = function(value) {
  var newBinarySearchTree = Object.create(BSTMethods);
  newBinarySearchTree.value = value;
  newBinarySearchTree.values = [];
  newBinarySearchTree.values.push(value);
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;


  return newBinarySearchTree;
};

var BSTMethods = {};

BSTMethods.insert = function(newValue) {

  this.values.push(newValue);

  if (newValue < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(newValue);
    } else {
      this.left.insert(newValue);

    }
  } else if (newValue > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(newValue);
    } else {
      this.right.insert(newValue);

    }
  } else {}

};

BSTMethods.contains = function(value) {
  return this.values.includes(value);
};

BSTMethods.depthFirstLog = function(cb) {
  for (var i = 0; i < this.values.length; i++) {
    cb(this.values[i]);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


