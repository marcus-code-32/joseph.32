def maxSubarraySumCircular(nums):
    total_sum = sum(nums)

    curr_max = curr_min = 0
    max_sum = float('-inf')
    min_sum = float('inf')

    for n in nums:
        curr_max = max(n, curr_max + n)
        max_sum = max(max_sum, curr_max)

        curr_min = min(n, curr_min + n)
        min_sum = min(min_sum, curr_min)

    # All numbers negative → return max_sum
    if max_sum < 0:
        return max_sum

    return max(max_sum, total_sum - min_sum)

# Example
print(maxSubarraySumCircular([1, -2, 3, -2]))  # Output: 3
