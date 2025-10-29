function reverseKGroup(head, k) {
    if (!head || k <= 1) return head;

    const dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;
    let groupIndex = 1;

    const getKth = (curr, k) => {
        while (curr && k > 0) {
            curr = curr.next;
            k--;
        }
        return curr;
    };

    while (true) {
        let kth = getKth(groupPrev, k);
        if (!kth) break;

        let groupNext = kth.next;

        if (groupIndex % 2 === 0) { // EVEN group → reverse
            let prev = groupNext;
            let curr = groupPrev.next;
            while (curr !== groupNext) {
                let temp = curr.next;
                curr.next = prev;
                prev = curr;
                curr = temp;
            }
            let temp = groupPrev.next;
            groupPrev.next = kth;
            groupPrev = temp;

        } else { // ODD group → skip
            groupPrev = kth;
        }

        groupIndex++;
    }

    return dummy.next;
}
