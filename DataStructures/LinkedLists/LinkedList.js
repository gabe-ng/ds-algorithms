let Node = function(data, next) {
  this.data = data;
  this.next = next;
};

function List() {
  this.head = null;
  this.tail = null;

  this.append = function(data) {
    if (this.head === null) {
      this.head = new Node(data, null);
      this.tail = this.head;
    } else {
      this.tail.next = new Node(data, null);
      this.tail = this.tail.next;
    }
  };
}

List.prototype = {
  print: function() {
    let temp = this.head;
    while (temp != null) {
      console.log(temp.data);
      temp = temp.next;
    }
  },

  delete: function(data) {
    let current = this.head;
    let prev = null;
    while (current != null && current.data != data) {
      prev = current;
      current = current.next;
    }
    if (current == null && tail.data != data) {
      console.log("Error 404");
    } else {
      prev.next = current.next;
    }
  }
};

let list = new List();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

