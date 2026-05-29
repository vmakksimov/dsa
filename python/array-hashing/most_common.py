def most_common(nums: list[int], k: int):
    nums.sort()
    av = sorted(nums)
    from collections import Counter
    count = Counter(nums)
    return [num for num, freq in count.most_common(k)]


#Time:  O(n log m) or O(n log k)
#Space: O(m)

def topKFrequent(self, nums: list[int], k: int):
        ans = []
        seen = {}
        freq = {}


        for num in nums:
            seen[num] = seen.get(num, 0) + 1
        
        for key, v in seen.items():
            if v in freq:
                freq[v].append(key)
            else:
                freq[v] = [key]
        
        for i in range(len(nums),-1,-1):
            if i in freq:
                for elem in freq[i]:
                    ans.append(elem)
                    if len(ans) == k:
                        return ans
                    
#Time:  O(n)
#Space: O(n)

print(most_common([1,2,3,3,5,6,7,3], 3))