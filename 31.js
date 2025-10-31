function evalRPN(tokens) {
  const stack = [];

  for (const token of tokens) {
    if (["+", "-", "*", "/"].includes(token)) {
      const b = stack.pop();
      const a = stack.pop();

      let res;
      if (token === "+") res = a + b;
      else if (token === "-") res = a - b;
      else if (token === "*") res = a * b;
      else res = a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b); // truncate toward zero

      stack.push(res);
    } else {
      stack.push(parseInt(token));
    }
  }

  return stack[0];
}

// Example
console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
