function repairLinkedList(head) {
  let curr = head;
  let prev = null;

  while (curr) {
    if (curr.visited) {
      // We encountered a visited node again => cycle here
      if (prev) prev.next = null;
      break;
    }

    // Mark node as visited using property (O(1) extra space)
    curr.visited = true;

    prev = curr;
    curr = curr.next;
  }

  return head;
}
