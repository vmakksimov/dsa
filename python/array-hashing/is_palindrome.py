
def is_palindrome(string: str) -> bool:
    left, right = 0, len(string) - 1
    while left < right:
        while left < right and not string[left].isalnum():
            left += 1
        while left < right and not string[right].isalnum():
            right -= 1
        if string[left].lower() != string[right].lower():
            return False
        left += 1
        right -= 1
    return True
# 0(n) time complexity, where n is the length of the input string. 
# This is because we potentially traverse the string once with two pointers.

# O(1) space complexity,
#  as we are using only a constant amount of extra space

print(is_palindrome("A man, a plan, a canal: Panama"))