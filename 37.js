class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function reorderByParity(head) {
  if (!head || !head.next) return head;

  let evenDummy = new ListNode(0);
  let oddDummy = new ListNode(0);
  let evenTail = evenDummy, oddTail = oddDummy;

  let curr = head;
  while (curr) {
    if (curr.val % 2 === 0) {
      evenTail.next = curr;
      evenTail = evenTail.next;
    } else {
      oddTail.next = curr;
      oddTail = oddTail.next;
    }
    curr = curr.next;
  }

  // Combine lists
  evenTail.next = oddDummy.next;
  oddTail.next = null;

  return evenDummy.next;
}

// --- Helper to print list ---
function printList(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr.join(" -> "));
}

// --- Example ---
let head = new ListNode(1);
head.next = new ListNode(4);
head.next.next = new ListNode(5);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(7);
head.next.next.next.next.next = new ListNode(8);

let result = reorderByParity(head);
printList(result);
