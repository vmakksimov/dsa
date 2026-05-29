def contains_duplicate(nums: list[int]) -> bool:
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False

## O(n) time complexity, where n is the length of the input array.
## O(n) space complexity, as we are using a hash set to store the unique elements from the array.