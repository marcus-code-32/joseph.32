class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def split_reverse_merge(head):
    if not head or not head.next:
        return head

    # Step 1: Split into odd and even lists
    odd_dummy = ListNode(0)
    even_dummy = ListNode(0)
    odd, even = odd_dummy, even_dummy
    is_odd = True

    curr = head
    while curr:
        if is_odd:
            odd.next = curr
            odd = odd.next
        else:
            even.next = curr
            even = even.next
        is_odd = not is_odd
        curr = curr.next

    odd.next = None
    even.next = None

    # Step 2: Reverse even list
    prev = None
    curr = even_dummy.next
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    reversed_even = prev

    # Step 3: Merge alternately
    odd_ptr = odd_dummy.next
    even_ptr = reversed_even
    dummy = ListNode(0)
    tail = dummy

    while odd_ptr or even_ptr:
        if odd_ptr:
            tail.next = odd_ptr
            tail = tail.next
            odd_ptr = odd_ptr.next
        if even_ptr:
            tail.next = even_ptr
            tail = tail.next
            even_ptr = even_ptr.next

    tail.next = None
    return dummy.next


# --- Helper to print the list ---
def print_list(head):
    vals = []
    while head:
        vals.append(str(head.val))
        head = head.next
    print(" -> ".join(vals))


# --- Example ---
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)
head.next.next.next.next.next = ListNode(6)

res = split_reverse_merge(head)
print_list(res)
