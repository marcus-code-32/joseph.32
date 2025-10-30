class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// --- Helper: Reverse k nodes ---
function reverseKGroup(head, k) {
  let prev = null;
  let curr = head;
  let count = 0;
  while (curr && count < k) {
    let nxt = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nxt;
    count++;
  }
  return [prev, head, curr]; // newHead, newTail, nextStart
}

// --- Helper: Rotate right by k ---
function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;

  let length = 1;
  let tail = head;
  while (tail.next) {
    tail = tail.next;
    length++;
  }

  k = k % length;
  if (k === 0) return head;

  tail.next = head; // make circular
  let stepsToNewTail = length - k;
  let newTail = head;
  for (let i = 0; i < stepsToNewTail - 1; i++) newTail = newTail.next;

  let newHead = newTail.next;
  newTail.next = null;
  return newHead;
}

function rotateInPairsOfK(head, k) {
  if (!head || !head.next) return head;

  let dummy = new ListNode(0);
  let tail = dummy;
  let curr = head;
  let groupIndex = 1;

  while (curr) {
    let [newHead, newTail, nextGroup] = reverseKGroup(curr, 2);

    if (groupIndex % 2 === 0) {
      newHead = rotateRight(newHead, k);
    }

    tail.next = newHead;
    tail = newTail;
    curr = nextGroup;
    groupIndex++;
  }

  return dummy.next;
}

// --- Helper to print ---
function printList(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  console.log(arr.join(" -> "));
}

// --- Example ---
let vals = [1, 2, 3, 4, 5, 6, 7, 8];
let head = new ListNode(vals[0]);
let curr = head;
for (let i = 1; i < vals.length; i++) {
  curr.next = new ListNode(vals[i]);
  curr = curr.next;
}

let result = rotateInPairsOfK(head, 1);
printList(result);
