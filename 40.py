class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse(head):
    prev = None
    curr = head
    while curr:
        nxt = curr.next
        curr.next = prev
        prev = curr
        curr = nxt
    return prev

def remove_descending_nodes(head):
    if not head or not head.next:
        return head

    # Step 1: Reverse list
    head = reverse(head)

    max_val = head.val
    curr = head

    # Step 2: Remove nodes with value < max_so_far
    while curr and curr.next:
        if curr.next.val < max_val:
            curr.next = curr.next.next  # delete node
        else:
            curr = curr.next
            max_val = curr.val

    # Step 3: Reverse again to restore original order
    return reverse(head)
