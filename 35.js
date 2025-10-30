function findMaxLength(nums) {
  let prefixSum = 0;
  let seen = new Map();
  seen.set(0, -1); // prefixSum -> first index
  let maxLen = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i] === 1 ? 1 : -1;

    if (seen.has(prefixSum)) {
      maxLen = Math.max(maxLen, i - seen.get(prefixSum));
    } else {
      seen.set(prefixSum, i);
    }
  }

  return maxLen;
}

// --- Example ---
let nums = [0, 1, 0, 1, 1, 1, 0];
console.log(findMaxLength(nums)); // Output: 6
