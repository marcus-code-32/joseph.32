def nextGreaterElements(nums):
    n = len(nums)
    res = [-1] * n
    stack = []  # store indices

    # traverse twice to simulate circular array
    for i in range(2 * n):
        while stack and nums[stack[-1]] < nums[i % n]:
            idx = stack.pop()
            res[idx] = nums[i % n]
        if i < n:
            stack.append(i)
    return res


# Example
nums = [1, 2, 1]
print(nextGreaterElements(nums))  # Output: [2, -1, 2]
