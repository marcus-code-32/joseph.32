from collections import defaultdict

def count_distinct_in_window(nums, k):
    n = len(nums)
    if k > n:
        return []

    freq = defaultdict(int)
    result = []

    # First window
    for i in range(k):
        freq[nums[i]] += 1
    result.append(len(freq))

    # Slide window
    for i in range(k, n):
        # Remove element going out
        freq[nums[i - k]] -= 1
        if freq[nums[i - k]] == 0:
            del freq[nums[i - k]]

        # Add new element
        freq[nums[i]] += 1

        result.append(len(freq))

    return result


# --- Example ---
nums = [1, 2, 1, 3, 4, 2, 3]
k = 4
print(count_distinct_in_window(nums, k))
