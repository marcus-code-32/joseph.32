function numberOfSubarrays(nums, k) {
  let countOdd = 0;
  let prefix = new Map();
  prefix.set(0, 1);
  let res = 0;

  for (let n of nums) {
    if (n % 2 !== 0) countOdd++;
    res += prefix.get(countOdd - k) || 0;
    prefix.set(countOdd, (prefix.get(countOdd) || 0) + 1);
  }

  return res;
}

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3)); // Output: 2
