class Solution:
    def minSwapsToAlternate(self, head):
        # Convert to list for easier indexing
        arr = []
        curr = head
        while curr:
            arr.append(curr.val)
            curr = curr.next
        
        n = len(arr)
        count0 = arr.count(0)
        count1 = n - count0
        
        # If difference too large -> impossible
        if abs(count0 - count1) > 1:
            return -1
        
        def swapsNeeded(startVal):  # startVal is expected first: 0 or 1
            mismatch = 0
            for i, v in enumerate(arr):
                if v != (startVal ^ (i % 2)):
                    mismatch += 1
            return mismatch // 2
        
        res = float('inf')
        
        if count0 >= count1:  # Try starting with 0
            res = min(res, swapsNeeded(0))
        if count1 >= count0:  # Try starting with 1
            res = min(res, swapsNeeded(1))
        
        return res if res != float('inf') else -1
