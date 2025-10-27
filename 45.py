class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


import bisect

def count_valid_replacements(root, new_values):
    intervals = []

    def dfs(node, low, high):
        if not node:
            return
        intervals.append((low, high))
        dfs(node.left, low, node.val)
        dfs(node.right, node.val, high)

    dfs(root, float("-inf"), float("inf"))

    new_values.sort()
    total = 0

    for low, high in intervals:
        left_idx = bisect.bisect_right(new_values, low)
        right_idx = bisect.bisect_left(new_values, high)
        total += max(0, right_idx - left_idx)

    return total


# Example usage:
# BST:       5
#           / \
#          3   8
#
root = Node(5, Node(3), Node(8))
new_vals = [1, 4, 7, 10]
print(count_valid_replacements(root, new_vals))  # Output: 4
