function longestWPI(hours) {
  let prefix = 0;
  const seen = new Map();
  let res = 0;

  for (let i = 0; i < hours.length; i++) {
    prefix += hours[i] > 8 ? 1 : -1;
    if (prefix > 0) {
      res = i + 1;
    } else if (seen.has(prefix - 1)) {
      res = Math.max(res, i - seen.get(prefix - 1));
    }
    if (!seen.has(prefix)) seen.set(prefix, i);
  }

  return res;
}

console.log(longestWPI([9, 9, 6, 0, 6, 6, 9])); // Output: 3
