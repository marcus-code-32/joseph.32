
def numberOfSubarrays(nums, k):
    count_odd = 0
    prefix = {0: 1}  # prefix sum count map
    res = 0

    for n in nums:
        if n % 2 != 0:
            count_odd += 1
        res += prefix.get(count_odd - k, 0)
        prefix[count_odd] = prefix.get(count_odd, 0) + 1
    return res

# Example
print(numberOfSubarrays([1,1,2,1,1], 3))  # Output: 2
