class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


import bisect

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def min_changes_to_bst(root):
    inorder_vals = []

    def inorder(node):
        if not node:
            return
        inorder(node.left)
        inorder_vals.append(node.val)
        inorder(node.right)

    inorder(root)
    n = len(inorder_vals)

    lis = []

    for val in inorder_vals:
        idx = bisect.bisect_left(lis, val)
        if idx == len(lis):
            lis.append(val)
        else:
            lis[idx] = val

    return n - len(lis)


# Example usage:
# This tree violates BST ordering:
#      5
#     / \
#    7   3
#
root = Node(5, Node(7), Node(3))
print(min_changes_to_bst(root))  # Output: 2
