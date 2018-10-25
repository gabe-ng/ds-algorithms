// Remove duplicate nodes in Linked List

const removeDupes = node => {
  let set = new Set();

  while (node != null) {
    if (set.has(node.data)) {
      previous.next = node.next;
    } else {
      set.add(node.data);
    }

    node = node.next;
  }
};
