class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function splitReverseMerge(head) {
  if (!head || !head.next) return head;

  // Step 1: Split into odd and even lists
  let oddDummy = new ListNode(0);
  let evenDummy = new ListNode(0);
  let odd = oddDummy, even = evenDummy;
  let isOdd = true;
  let curr = head;

  while (curr) {
    if (isOdd) {
      odd.next = curr;
      odd = odd.next;
    } else {
      even.next = curr;
      even = even.next;
    }
    isOdd = !isOdd;
    curr = curr.next;
  }

  odd.next = null;
  even.next = null;

  // Step 2: Reverse even list
  let prev = null;
  curr = evenDummy.next;
  while (curr) {
    let nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
  }
  let reversedEven = prev;

  // Step 3: Merge alternately
  let oddPtr = oddDummy.next;
  let evenPtr = reversedEven;
  let dummy = new ListNode(0);
  let tail = dummy;

  while (oddPtr || evenPtr) {
    if (oddPtr) {
      tail.next = oddPtr;
      tail = tail.next;
      oddPtr = oddPtr.next;
    }
    if (evenPtr) {
      tail.next = evenPtr;
      tail = tail.next;
      evenPtr = evenPtr.next;
    }
  }

  tail.next = null;
  return dummy.next;
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
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);
head.next.next.next.next.next = new ListNode(6);

let result = splitReverseMerge(head);
printList(result);
