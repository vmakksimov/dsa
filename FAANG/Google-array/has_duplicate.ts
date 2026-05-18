function hasDuplicate(nums: number[]): boolean {
  const dup = new Map();
  // empty values = false
  // 1 value = false
  // strings ? = invalid
  // 0 = false
  // -1 = false

  for (let i = 0; i <= nums.length; i++) {
    if (dup.has(nums[i])) {
      return true;
    }
    dup.set(nums[i], true);
  }

  return false;
}

function hasDuplicateOptimal(nums: number[]): boolean {
  nums.sort((a, b) => a - b);
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      return true;
    }
  }
  return false;
}

console.log(hasDuplicate([1, 2, 3, 3]));
