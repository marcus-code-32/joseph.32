function productExceptSelf(nums) {
  const n = nums.length;
  const res = Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    res[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= suffix;
    suffix *= nums[i];
  }

  return res;
}

// Example
console.log(productExceptSelf([1, 2, 3, 4])); // [24, 12, 8, 6]
