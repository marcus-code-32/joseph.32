class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function minChangesToBST(root) {
  const inorderVals = [];

  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    inorderVals.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  const lis = [];

  function lowerBound(arr, x) {
    let l = 0, r = arr.length;
    while (l < r) {
      const mid = Math.floor((l + r) / 2);
      if (arr[mid] < x) l = mid + 1;
      else r = mid;
    }
    return l;
  }

  for (const val of inorderVals) {
    const idx = lowerBound(lis, val);
    if (idx === lis.length) lis.push(val);
    else lis[idx] = val;
  }

  return inorderVals.length - lis.length;
}


// Example usage:
const root = new Node(5, new Node(7), new Node(3));
console.log(minChangesToBST(root)); // 2
