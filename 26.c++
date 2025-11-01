#include <bits/stdc++.h>
using namespace std;

int maxSubarraySumCircular(vector<int>& nums) {
    int total = accumulate(nums.begin(), nums.end(), 0);
    int currMax = 0, currMin = 0;
    int maxSum = INT_MIN, minSum = INT_MAX;

    for (int n : nums) {
        currMax = max(n, currMax + n);
        maxSum = max(maxSum, currMax);

        currMin = min(n, currMin + n);
        minSum = min(minSum, currMin);
    }

    if (maxSum < 0) return maxSum; // all negative
    return max(maxSum, total - minSum);
}

int main() {
    vector<int> nums = {1, -2, 3, -2};
    cout << maxSubarraySumCircular(nums); // Output: 3
}
