import sys
import random
random.seed(42)

class Node:
    __slots__ = ("val", "prio", "left", "right")
    def __init__(self, val):
        self.val = val
        self.prio = random.random()
        self.left = None
        self.right = None

def rotate_right(y):
    x = y.left
    y.left = x.right
    x.right = y
    return x

def rotate_left(x):
    y = x.right
    x.right = y.left
    y.left = x
    return y

def insert(root, val):
    if not root:
        return Node(val)
    if val < root.val:
        root.left = insert(root.left, val)
        if root.left.prio < root.prio:
            root = rotate_right(root)
    elif val > root.val:
        root.right = insert(root.right, val)
        if root.right.prio < root.prio:
            root = rotate_left(root)
    return root

def delete(root, val):
    if not root:
        return None
    if val < root.val:
        root.left = delete(root.left, val)
    elif val > root.val:
        root.right = delete(root.right, val)
    else:
        if not root.left:
            return root.right
        if not root.right:
            return root.left
        if root.left.prio < root.right.prio:
            root = rotate_right(root)
            root.right = delete(root.right, val)
        else:
            root = rotate_left(root)
            root.left = delete(root.left, val)
    return root

def find_depth(root, val):
    depth = 0
    curr = root
    while curr:
        if curr.val == val:
            return depth
        if val < curr.val:
            curr = curr.left
        else:
            curr = curr.right
        depth += 1
    return -1

def find_lca(root, a, b):
    while root:
        if a < root.val and b < root.val:
            root = root.left
        elif a > root.val and b > root.val:
            root = root.right
        else:
            return root
    return None

def query_distance(root, a, b):
    da = find_depth(root, a)
    db = find_depth(root, b)
    if da == -1 or db == -1:
        return -1
    lca = find_lca(root, a, b)
    dl = find_depth(root, lca.val)
    return da + db - 2 * dl

def process_operations(ops):
    root = None
    output = []
    for op, x, y in ops:
        if op == "I":
            root = insert(root, x)
        elif op == "D":
            root = delete(root, x)
        else:
            output.append(query_distance(root, x, y))
    return output
