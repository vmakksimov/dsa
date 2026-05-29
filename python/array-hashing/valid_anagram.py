def valid_anagram(s, t):
    if len(s)!=len(t):
        return False
    lib = {}
    for chr in s:
        if chr not in lib:
            lib[chr]=1
        else:
            lib[chr] +=1
    for chr in t:
        if chr not in lib or lib[chr]==0:
            return False
        else:
            lib[chr] -=1
    return True

## O(n) time complexity, where n is the length of the input strings.
## O(1) space complexity, 
# as the size of the hash map is limited by the number of unique characters,
#  which is constant (26 lowercase letters in the English alphabet).

print(valid_anagram("anagram", "nagaram"))