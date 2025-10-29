function reverse(head) {
    let prev = null, curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

function removeDescendingNodes(head) {
    if (!head || !head.next) return head;

    // Step 1: Reverse
    head = reverse(head);

    let maxVal = head.val;
    let curr = head;

    // Step 2: Remove smaller ones
    while (curr && curr.next) {
        if (curr.next.val < maxVal) {
            curr.next = curr.next.next;
        } else {
            curr = curr.next;
            maxVal = curr.val;
        }
    }

    // Step 3: Reverse back
    return reverse(head);
}
