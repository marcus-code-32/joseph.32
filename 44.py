class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


def repairLinkedList(head):
    VISITED_FLAG = ListNode()  # A unique marker for visited reference

    curr = head
    prev = None

    while curr:
        if curr.next and curr.next is VISITED_FLAG:
            # Next already marked visited but we reached here again => break cycle edge
            curr.next = None

        if curr.next and curr.next.val == "VISITED":
            # We found a cycle entry again => remove the linking
            curr.next = None

        # If next is already marked visited => cycle detected
        if hasattr(curr, "_visited"):
            # prev.next is the cycle-causing pointer => remove it
            if prev:
                prev.next = None
            break

        # Mark this node as visited (constant extra memory technique)
        curr._visited = True

        prev = curr
        curr = curr.next

    return head
