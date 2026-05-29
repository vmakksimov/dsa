def reverse_string(s: list[str]):

    leftp, rightp = 0, len(s) - 1
    while leftp < rightp:
        s[leftp], s[rightp] = s[rightp], s[leftp]

        leftp += 1
        rightp -= 1
    return s


# Time:   O(n) where n is the length of the string
# Memory: O(1) no extra array, swapping on the fly

print(reverse_string(["h", "e", "l", "l", "o"]))
