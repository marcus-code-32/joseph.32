function countDistinctInWindow(nums, k) {
  const n = nums.length;
  if (k > n) return [];

  const freq = new Map();
  const result = [];

  // First window
  for (let i = 0; i < k; i++) {
    freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
  }
  result.push(freq.size);

  // Slide window
  for (let i = k; i < n; i++) {
    // Remove outgoing element
    let outgoing = nums[i - k];
    freq.set(outgoing, freq.get(outgoing) - 1);
    if (freq.get(outgoing) === 0) freq.delete(outgoing);

    // Add incoming element
    let incoming = nums[i];
    freq.set(incoming, (freq.get(incoming) || 0) + 1);

    result.push(freq.size);
  }

  return result;
}

// --- Example ---
let nums = [1, 2, 1, 3, 4, 2, 3];
let k = 4;
console.log(countDistinctInWindow(nums, k));
