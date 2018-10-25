// Only given access to the Node to delete, not the whole linked list

const deleteMiddleNode = nodeToDelete => {
  if (nodeToDelete == null || nodeToDelete.next == null) {
    return false;
  }

  let n = nodeToDelete.next;
  nodeToDelete.data = n.data;
  nodeToDelete.next = n.next;

  return true;
};
