def longestWPI(hours):
    prefix = 0
    seen = {}
    res = 0

    for i, h in enumerate(hours):
        prefix += 1 if h > 8 else -1
        if prefix > 0:
            res = i + 1
        elif (prefix - 1) in seen:
            res = max(res, i - seen[prefix - 1])
        if prefix not in seen:
            seen[prefix] = i
    return res

# Example
print(longestWPI([9,9,6,0,6,6,9]))  # Output: 3
