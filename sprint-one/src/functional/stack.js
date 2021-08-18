var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.pop = function() {
    // O - last element of stack      I - none    C - can't use t his/vanilla     E = none

    var element = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];



    return element;
  };

  someInstance.size = function() {
    return Object.values(storage).length;
  };

  return someInstance;

};
