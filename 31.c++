#include <bits/stdc++.h>
using namespace std;

int evalRPN(vector<string>& tokens) {
    stack<int> st;
    for (string& token : tokens) {
        if (token == "+" || token == "-" || token == "*" || token == "/") {
            int b = st.top(); st.pop();
            int a = st.top(); st.pop();
            if (token == "+") st.push(a + b);
            else if (token == "-") st.push(a - b);
            else if (token == "*") st.push(a * b);
            else st.push(a / b); // C++ automatically truncates toward zero
        } else {
            st.push(stoi(token));
        }
    }
    return st.top();
}

int main() {
    vector<string> tokens1 = {"2", "1", "+", "3", "*"};
    vector<string> tokens2 = {"4", "13", "5", "/", "+"};
    cout << evalRPN(tokens1) << endl; // 9
    cout << evalRPN(tokens2) << endl; // 6
}
