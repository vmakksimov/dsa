def valid_parentheses(s: str):
    opening = []
    pairs: dict[str, str] = {"]": "[", "}": "{", ")": "("}
    for p in s:
        if p in pairs:
            opening.append(p)
        elif opening and p == pairs.get(opening[-1], None):
            opening.pop()
        else:
            return False

    return not opening


def valid_parentheses2(s: str):
    stack = []

    pairs = {")": "(", "}": "{", "]": "["}

    for p in s:
        if p in pairs:  # closing bracket
            if stack and stack[-1] == pairs[p]:
                stack.pop()
            else:
                return False
        else:  # opening bracket
            stack.append(p)

    return not stack


print(valid_parentheses("(("))
