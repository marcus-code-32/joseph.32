#include <bits/stdc++.h>
using namespace std;

int numberOfSubarrays(vector<int>& nums, int k) {
    unordered_map<int, int> prefix;
    prefix[0] = 1;
    int countOdd = 0, res = 0;

    for (int n : nums) {
        if (n % 2 != 0) countOdd++;
        res += prefix[countOdd - k];
        prefix[countOdd]++;
    }
    return res;
}

int main() {
    vector<int> nums = {1,1,2,1,1};
    int k = 3;
    cout << numberOfSubarrays(nums, k);  // Output: 2
}
