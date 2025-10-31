function nextGreaterElements(nums) {
  const n = nums.length;
  const res = Array(n).fill(-1);
  const stack = []; // stores indices

  for (let i = 0; i < 2 * n; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
      const idx = stack.pop();
      res[idx] = nums[i % n];
    }
    if (i < n) stack.push(i);
  }
  return res;
}

// Example
console.log(nextGreaterElements([1, 2, 1])); // [2, -1, 2]
