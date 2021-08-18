var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var element = storage[0];
    delete storage[0];

    for (var i = 0; i < someInstance.size(); i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[someInstance.size() - 1];

    return element;
  };

  someInstance.size = function() {
    return Object.values(storage).length;
  };

  return someInstance;
};
