# def reverse_string(string: str) -> int:
#     ''' reverse string using reversed '''
#     print("1st variant",''.join(reversed(string)))
#     print ("2nd variant",string[::-1])
#     new_string = [string[char] for char in range(len(string) - 1, -1, -1)]
#     return "3rd variant " + "".join(new_string)






def are_anagrams(first: str, second: str) -> bool:
    cleaned_first = first.replace(" ", "").lower()
    cleaned_second = second.replace(" ", "").lower()
    return sorted(cleaned_first) == sorted(cleaned_second)

# print(reverse_string("some"))
print(are_anagrams("listen", "silent"))

def non_alpha(string: str) -> str:
    return ''.join([el.lower() for el in string if el.isalnum()])


def is_palindrome(string: str) -> bool:
    return string == string[::-1]

print(non_alpha("A man, a plan, a canal, Panama!"))
print(is_palindrome("bob"))

