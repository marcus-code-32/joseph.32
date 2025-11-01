function maxSubarraySumCircular(nums) {
  let total = nums.reduce((a, b) => a + b, 0);
  let currMax = 0, currMin = 0;
  let maxSum = -Infinity, minSum = Infinity;

  for (let n of nums) {
    currMax = Math.max(n, currMax + n);
    maxSum = Math.max(maxSum, currMax);

    currMin = Math.min(n, currMin + n);
    minSum = Math.min(minSum, currMin);
  }

  if (maxSum < 0) return maxSum; // all negative

  return Math.max(maxSum, total - minSum);
}

console.log(maxSubarraySumCircular([1, -2, 3, -2])); // Output: 3
