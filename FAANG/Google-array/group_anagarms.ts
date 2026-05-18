function groupAnagrams(s: string[]) {
  const seenCh = new Map<string, string[]>();
  for (let word of s) {
    const sorted = word.split("").sort().join("");
    if (!seenCh.has(sorted)) {
      seenCh.set(sorted, [word]);
    } else {
      seenCh.get(sorted)?.push(word);
    }
  }

  return [...seenCh.values()];
}

function groupAnagramsOptimized(strs) {
  let n = strs.length;
  let myMap = new Map()

  for (let i = 0; i < n; i++) {
    let word = strs[i];
    const sorted = word.split("").sort().join("");

    if (myMap.get(sorted) !== undefined) myMap.get(sorted).push(word);
    else myMap.set(sorted, [word])
  }

 

  return [...myMap.values()];
}

console.log(
  groupAnagramsOptimized(["act", "pots", "tops", "cat", "stop", "hat"]),
);
