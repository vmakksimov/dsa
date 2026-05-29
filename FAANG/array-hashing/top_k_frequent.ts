function topKFrequent1(nums, k) {
  const seenNums = new Map<number, number>();
  for (const num of nums) {
    seenNums.set(num, (seenNums.get(num) || 0) + 1);
  }
  // find the first two max values of the keys in the Map
  const sortedMap = new Map(
  [...seenNums.entries()].sort((a, b) => b[1] - a[1])
);
 return [...sortedMap.keys()].slice(0, k)
}

function topKFrequentBucket(nums: number[], k: number): number[] {
  const freq = new Map<number, number>();

  // Count frequencies: O(n)
  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }

  // buckets[i] contains numbers that appear i times
  const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);

  // Fill buckets: O(m)
  for (const [num, count] of freq.entries()) {
    buckets[count].push(num);
  }

  const result: number[] = [];

  // Go from highest frequency to lowest: O(n)
  for (let i = buckets.length - 1; i >= 0; i--) {
    for (const num of buckets[i]) {
      result.push(num);

      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
}

console.log(topKFrequentBucket([1,2,2,3,3,3], 2))
