function middleSwapSort(head) {
    if (!head || !head.next) return head;

    // 1️⃣ Find middle
    let slow = head, fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2️⃣ Reverse second half
    let second = slow.next;
    slow.next = null;
    let prev = null;

    while (second) {
        let nxt = second.next;
        second.next = prev;
        prev = second;
        second = nxt;
    }
    second = prev;

    // 3️⃣ Interleave
    let first = head;
    while (second) {
        let t1 = first.next;
        let t2 = second.next;
        first.next = second;
        second.next = t1;
        first = t1;
        second = t2;
    }

    return head;
}



