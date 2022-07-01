// Dynamic Programming => "A method for solving a complex problem by breaking it down into a collection of simpler subproblem, solving each of those subproblems just once, and storing their solutions."

// Works on problem with:
//  - Optimal Substructure &
//  - Overlapping Subproblems

// Write a function which accepts a positive number, n and returns the nth fibonacci number of fibonacci sequence.

// Time Complexity --> O(2^n)
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // 13

// MEMOIZATION :
//   --> Top Down approach
//   --> Sorting the results of expensive function calls and returning the cached result when the same inputs occur again.

// Fibonacci with --> memoization
// Time Complexity: O(n) [Almost]

function fib(n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

// function fib(n, memo = [undefined, 1, 1]) {
//   // base case in the memo array as default parameter
//   if (memo[n] !== undefined) return memo[n];
//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   return memo[n];
// }

console.log(fib(50)); // 12586269025

// TABULATION :
//   --> Bottom UP approach
//   --> Storing the result of a previous result in a "table" (usually an array)
//   --> Usually done using iteration
//   --> Better space complexity can be achieved using tabulation

// Fibonacci with --> tabulation
// Time Complexity: O(n) [Exact]

function fibTabulation(n) {
  if (n <= 2) return 1;
  const fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  return fibNums[n];
}

console.log(fibTabulation(50)); // 12586269025

// Space Complexity of Memoization is Worse than Space Complexity of Tabulation
