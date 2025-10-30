// Definition for singly-linked list.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

var mergeAndReverseK = function(A, B, k) {
    function mergeTwoLists(A, B) {
        let dummy = new ListNode();
        let tail = dummy;

        while (A && B) {
            if (A.val <= B.val) {
                tail.next = A;
                A = A.next;
            } else {
                tail.next = B;
                B = B.next;
            }
            tail = tail.next;
        }
        tail.next = A ? A : B;
        return dummy.next;
    }

    function hasKNodes(node, k) {
        while (node && k) {
            node = node.next;
            k--;
        }
        return k === 0;
    }

    function reverseKGroup(head, k) {
        let dummy = new ListNode(0, head);
        let prev = dummy;

        while (hasKNodes(prev.next, k)) {
            let curr = prev.next;
            let nxt = curr.next;
            for (let i = 0; i < k - 1; i++) {
                curr.next = nxt.next;
                nxt.next = prev.next;
                prev.next = nxt;
                nxt = curr.next;
            }
            prev = curr;
        }

        return dummy.next;
    }

    let merged = mergeTwoLists(A, B);
    return reverseKGroup(merged, k);
};
