class Node {
  constructor(val) {
    this.val = val;
    this.prio = Math.random();
    this.left = null;
    this.right = null;
  }
}

function rotateRight(y) {
  const x = y.left;
  y.left = x.right;
  x.right = y;
  return x;
}

function rotateLeft(x) {
  const y = x.right;
  x.right = y.left;
  y.left = x;
  return y;
}

function insert(root, val) {
  if (!root) return new Node(val);
  if (val < root.val) {
    root.left = insert(root.left, val);
    if (root.left.prio < root.prio) {
      root = rotateRight(root);
    }
  } else if (val > root.val) {
    root.right = insert(root.right, val);
    if (root.right.prio < root.prio) {
      root = rotateLeft(root);
    }
  }
  return root;
}

function deleteNode(root, val) {
  if (!root) return null;
  if (val < root.val) {
    root.left = deleteNode(root.left, val);
  } else if (val > root.val) {
    root.right = deleteNode(root.right, val);
  } else {
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    if (root.left.prio < root.right.prio) {
      root = rotateRight(root);
      root.right = deleteNode(root.right, val);
    } else {
      root = rotateLeft(root);
      root.left = deleteNode(root.left, val);
    }
  }
  return root;
}

function findDepth(root, val) {
  let depth = 0;
  let curr = root;
  while (curr) {
    if (curr.val === val) return depth;
    curr = val < curr.val ? curr.left : curr.right;
    depth++;
  }
  return -1;
}

function findLCA(root, a, b) {
  while (root) {
    if (a < root.val && b < root.val) root = root.left;
    else if (a > root.val && b > root.val) root = root.right;
    else return root;
  }
  return null;
}

function queryDistance(root, a, b) {
  const da = findDepth(root, a);
  const db = findDepth(root, b);
  if (da === -1 || db === -1) return -1;
  const lca = findLCA(root, a, b);
  const dl = findDepth(root, lca.val);
  return da + db - 2 * dl;
}
