function groupAnagrams(words) {
  const map = new Map();

  for (let word of words) {
    // Sort the word
    const key = word.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(word);
  }

  return Array.from(map.values());
}

// --- Example ---
let words = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(words));
