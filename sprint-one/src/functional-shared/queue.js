var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.size()] = value;
  },

  dequeue: function () {
    var element = this.storage[0];
    delete this.storage[0];
    for (var i = 0; i < this.size(); i++) {
      this.storage[i] = this.storage[i + 1];
    }
    delete this.storage[this.size() - 1];

    return element;
  },

  size: function () {
    return Object.values(this.storage).length;
  }
};


