class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def middle_swap_sort(head):
    if not head or not head.next:
        return head

    # 1️⃣ Find middle using slow/fast pointers
    slow, fast = head, head
    while fast.next and fast.next.next:
        slow = slow.next
        fast = fast.next.next

    # 2️⃣ Reverse second half
    prev, curr = None, slow.next
    slow.next = None  # break into 2 lists

    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt

    second = prev  # head of 2nd reversed half
    first = head

    # 3️⃣ Interleave nodes
    while second:
        temp1, temp2 = first.next, second.next
        first.next = second
        second.next = temp1
        first = temp1
        second = temp2

    return head
