# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeTwoLists(self, A, B):
        dummy = ListNode()
        tail = dummy
        
        while A and B:
            if A.val <= B.val:
                tail.next = A
                A = A.next
            else:
                tail.next = B
                B = B.next
            tail = tail.next
        
        tail.next = A if A else B
        return dummy.next

    def reverseKGroup(self, head, k):
        def hasKNodes(node, k):
            while node and k:
                node = node.next
                k -= 1
            return k == 0
        
        dummy = ListNode(0, head)
        prev = dummy
        
        while hasKNodes(prev.next, k):
            curr = prev.next
            nxt = curr.next
            for _ in range(k - 1):
                curr.next = nxt.next
                nxt.next = prev.next
                prev.next = nxt
                nxt = curr.next
            prev = curr
        
        return dummy.next
    
    def mergeAndReverseK(self, A, B, k):
        merged = self.mergeTwoLists(A, B)
        return self.reverseKGroup(merged, k)
