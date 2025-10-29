class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def reverse_k_group(head, k):
    if not head or k <= 1:
        return head

    dummy = ListNode(0)
    dummy.next = head

    group_prev = dummy
    group_index = 1

    while True:
        # Check if there are k nodes left
        kth = group_prev
        for _ in range(k):
            kth = kth.next
            if not kth:
                return dummy.next
        
        group_next = kth.next
        
        if group_index % 2 == 0:  # EVEN group → reverse
            prev, curr = kth.next, group_prev.next
            while curr != group_next:
                temp = curr.next
                curr.next = prev
                prev = curr
                curr = temp
            temp = group_prev.next
            group_prev.next = kth
            group_prev = temp
        else:  # ODD group → move pointer only
            group_prev = kth
            
        group_index += 1

    return dummy.next
