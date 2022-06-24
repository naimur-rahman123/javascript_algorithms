// Recursion --> A process (a function in our case) that calls itself

// Two essential parts of a recursive function:-
//  - Base Case --> The condition when the recursion ends (generally a conditial check)
//  - Different Input / Piece of Data

// How recursive function works???
//  - Invoke the same function with a different input until you reach your base case!

// It's everywhere
//  - JSON.parse / JSON.stringify
//  - document.getElementById and DOM traversal algorithms
//  - Object traversal & many Data Structures

// Example 1: Add all the numbets from 1 to the a particular range
function sumRange(num) {
  if (num === 1) return 1; // base case
  return num + sumRange(num - 1); // smaller input in every call
}

console.log(sumRange(10)); // 55

// Example 2: Factorial of a number
function factorial(num) {
  if (num === 1) return 1; // base case
  return num * factorial(num - 1); // smaller input in every call
}

console.log(factorial(5)); // 120

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Where things go wrong? [Stack-Overflow]
//  - No base case!!!
//  - Forgetting to return or returning the wrong thing!!!

// The 2 types of recursion:

// 1. PURE RECURSION --> The function itself is totally self-contained & recursive

// PURE RECURSION TIPS:
//  - For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you don't mutate them
//  - Remember that strings are immutable so you will need to use methods like slice, substr or substring to make copies of strings
//  - To make copies of objects use Object.assign or the spread operator

// Example 1: Collect all the odd values in an array
function collectOddValuesPure(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr; // base case

  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValuesPure(arr.slice(1))); // smaller input in every call

  return newArr;
}

console.log(collectOddValuesPure([1, 2, 2, 4, 5, 6, 7, 8, 10])); // [1, 5, 7]

// 2. HELPER METHOD RECURSION --> A Design Pattern Commonly Used for Recursion --> Outer function: non-recursive, Inner function: recursive

// Example 1: Collect all the odd values in an array
function collectOddValuesHelper(arr) {
  const result = [];

  // helper function
  function helper(helperInput) {
    if (helperInput.length === 0) return; // base case

    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]); // manipulate result array

    helper(helperInput.slice(1)); // smaller input in every call
  }

  helper(arr);

  return result;
}

console.log(collectOddValuesHelper([1, 2, 2, 4, 5, 6, 7, 8, 10])); // [1, 5, 7]
