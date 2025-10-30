class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# --- Helper: Reverse a group of given size ---
def reverse_k_group(head, k):
    prev = None
    curr = head
    count = 0
    while curr and count < k:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
        count += 1
    return prev, head, curr  # new_head, new_tail, next_start


# --- Helper: Rotate a linked list right by k ---
def rotate_right(head, k):
    if not head or not head.next or k == 0:
        return head

    # Find length
    length = 1
    tail = head
    while tail.next:
        tail = tail.next
        length += 1

    k = k % length
    if k == 0:
        return head

    # Connect tail to head (circular)
    tail.next = head
    steps_to_new_tail = length - k
    new_tail = head

    for _ in range(steps_to_new_tail - 1):
        new_tail = new_tail.next

    new_head = new_tail.next
    new_tail.next = None
    return new_head


def rotate_in_pairs_of_k(head, k):
    if not head or not head.next:
        return head

    dummy = ListNode(0)
    tail = dummy
    curr = head
    group_index = 1

    while curr:
        # Reverse in pairs (size=2)
        new_head, new_tail, next_group = reverse_k_group(curr, 2)

        # If it's an alternate group (3rd, 5th...), rotate it
        if group_index % 2 == 0:
            new_head = rotate_right(new_head, k)

        tail.next = new_head
        tail = new_tail
        curr = next_group
        group_index += 1

    return dummy.next


# --- Helper to print ---
def print_list(head):
    res = []
    while head:
        res.append(str(head.val))
        head = head.next
    print(" -> ".join(res))


# --- Example ---
vals = [1, 2, 3, 4, 5, 6, 7, 8]
head = ListNode(vals[0])
curr = head
for v in vals[1:]:
    curr.next = ListNode(v)
    curr = curr.next

res = rotate_in_pairs_of_k(head, 1)
print_list(res)
