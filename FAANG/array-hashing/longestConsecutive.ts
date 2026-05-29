//Given an array of integers nums, return the length of the longest consecutive sequence
// of elements that can be formed.

//A consecutive sequence is a sequence of elements in which each element
//  is exactly 1 greater than the previous element.\
//  The elements do not have to be consecutive in the original array.

//You must write an algorithm that runs in O(n) time.

//Example 1:

//Input: nums = [2,20,4,10,3,4,5]

//Output: 4
//Explanation: The longest consecutive sequence is [2, 3, 4, 5].

function longestConsecutiveSlow(nums: number[]) {
  let maxConsecutive = 0;
  let seen = new Map();
  const unique = new Set(nums);
  const sorted = Array.from(unique.values()).sort((a, b) => a - b);
  for (let i = 0; i < sorted.length; i++) {
    if (
      sorted[i] - 1 ===
      sorted[i - 1]
    ) {
      seen.set(sorted[i], true);
      maxConsecutive = seen.size > maxConsecutive ? seen.size : maxConsecutive;
    } else if (seen.size <= 0 && nums.length >= 1) {
      seen.set(sorted[i], true);
      maxConsecutive = seen.size > maxConsecutive ? seen.size : maxConsecutive;
    } else {
      maxConsecutive = seen.size > maxConsecutive ? seen.size : maxConsecutive;
      seen.clear();
      seen.set(sorted[i], true)
    }
  }
  return maxConsecutive;
}

function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) return 0;
  
  // 1. Throw everything into a Set for O(1) instant lookups
  const numSet = new Set(nums);
  let maxConsecutive = 0;

  // 2. Iterate through the numbers
  for (const num of numSet) {
    
    // Check if 'num' is the absolute START of a sequence
    // If (num - 1) is in the set, then 'num' is NOT the start. We skip it!
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Keep counting upward to see how far this specific chain goes
      while (numSet.has(currentNum + 1)) {
        currentNum += 1;
        currentStreak += 1;
      }

      // Keep track of the longest chain we've found so far
      maxConsecutive = Math.max(maxConsecutive, currentStreak);
    }
  }

  return maxConsecutive;
}

console.log(longestConsecutive([2,20,4,10,1,3,4,5]));
