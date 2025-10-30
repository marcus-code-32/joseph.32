class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reorder_by_parity(head):
    if not head or not head.next:
        return head

    even_dummy = ListNode(0)
    odd_dummy = ListNode(0)
    even_tail, odd_tail = even_dummy, odd_dummy

    curr = head
    while curr:
        if curr.val % 2 == 0:
            even_tail.next = curr
            even_tail = even_tail.next
        else:
            odd_tail.next = curr
            odd_tail = odd_tail.next
        curr = curr.next

    # Connect even list to odd list
    even_tail.next = odd_dummy.next
    odd_tail.next = None

    return even_dummy.next


# --- Helper to print the list ---
def print_list(head):
    vals = []
    while head:
        vals.append(str(head.val))
        head = head.next
    print(" -> ".join(vals))


# --- Example ---
head = ListNode(1)
head.next = ListNode(4)
head.next.next = ListNode(5)
head.next.next.next = ListNode(2)
head.next.next.next.next = ListNode(7)
head.next.next.next.next.next = ListNode(8)

res = reorder_by_parity(head)
print_list(res)
