#include <bits/stdc++.h>
using namespace std;

int longestWPI(vector<int>& hours) {
    int prefix = 0, res = 0;
    unordered_map<int, int> seen;

    for (int i = 0; i < hours.size(); i++) {
        prefix += (hours[i] > 8) ? 1 : -1;
        if (prefix > 0) res = i + 1;
        else if (seen.count(prefix - 1))
            res = max(res, i - seen[prefix - 1]);
        if (!seen.count(prefix)) seen[prefix] = i;
    }

    return res;
}

int main() {
    vector<int> hours = {9, 9, 6, 0, 6, 6, 9};
    cout << longestWPI(hours); // Output: 3
}
