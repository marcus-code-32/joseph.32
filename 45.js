class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


function countValidReplacements(root, newValues) {
  const intervals = [];

  function dfs(node, low, high) {
    if (!node) return;
    intervals.push([low, high]);
    dfs(node.left, low, node.val);
    dfs(node.right, node.val, high);
  }

  dfs(root, -Infinity, Infinity);
  newValues.sort((a, b) => a - b);

  let total = 0;

  function lowerBound(arr, x) {
    let l = 0, r = arr.length;
    while (l < r) {
      let mid = Math.floor((l + r) / 2);
      if (arr[mid] > x) r = mid;
      else l = mid + 1;
    }
    return l;
  }

  function upperBound(arr, x) {
    let l = 0, r = arr.length;
    while (l < r) {
      let mid = Math.floor((l + r) / 2);
      if (arr[mid] >= x) r = mid;
      else l = mid + 1;
    }
    return l;
  }

  for (let [low, high] of intervals) {
    let left = lowerBound(newValues, low);
    let right = upperBound(newValues, high);
    total += Math.max(0, right - left);
  }

  return total;
}


// Example usage:
const root = new Node(5, new Node(3), new Node(8));
console.log(countValidReplacements(root, [1, 4, 7, 10])); // 4
