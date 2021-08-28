var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (list.head === null) {
      list.tail = newNode;
      list.head = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var head = list.head.value;
    delete list.head.value;
    list.head = list.head.next;
    return head;
  };

  list.contains = function(target) {
    var array = [];
    for (var i = 0; i < Object.values(list).length; i++) {
      array.push(Object.values(list)[i].value);
    }
    if (array.includes(target)) {
      return true;
    }
    return false;

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
