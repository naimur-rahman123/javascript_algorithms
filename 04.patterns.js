// Here are some common patterns to solve rather than naive approach:

// 1. Frequency Counters Pattern
// This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(n^2) operations with arrays / strings

// Example 1: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be same

// Time Complexity --> O(n)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let value of arr1) {
    frequencyCounter1[value] = ++frequencyCounter1[value] || 1;
  }

  for (let value of arr2) {
    frequencyCounter2[value] = ++frequencyCounter2[value] || 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key ** 2] !== frequencyCounter2[key]) return false;
  }

  return true;
}

console.log(same([1, 2, 1], [1, 4])); // false
console.log(same([1, 2, 1], [4, 1, 1])); // true
console.log(same([1, 2, 1], [4, 4, 1])); // false

// Example 2: Given two strings, write a function to determine if the second string is anagram of the first.
// Time Complexity --> O(n)
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const lookup = {};

  for (let letter of str1) {
    lookup[letter] = ++lookup[letter] || 1;
  }

  for (let letter of str2) {
    if (!lookup[letter]) return false;
    else lookup[letter]--;
  }

  return true;
}

console.log(validAnagram('', '')); // true
console.log(validAnagram('car', 'rat')); // false
console.log(validAnagram('awesome', 'awesom')); // false
console.log(validAnagram('cinema', 'iceman')); // true

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Multiple Pointers Pattern
// This pattern is about creating pointers or values that correspond to an index or position and move towards the beginning. end or middle based on a certain condition

// Example 1: Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Retuen an array that includes both values that sum to zero or null if a pair doesn't exist
// Time Complexity --> O(n)

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
  return null;
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3])); // null
console.log(sumZero([1, 2, 3])); // null

// Example 2: Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but always be sorted
// Time Complexity --> O(n)

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  let i = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Sliding Window Pattern
// This pattern involves creating a window which can either be an array or number from one position to another.
// Depending on a certain condition, the window either increases or closes (and a new window is created)
//    - Very useful for keeping track of a subset of data in an array / string etc.

// Example: Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
// Time Complexity -> O(n)

function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([], 4)); //null
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Divide and Conquer
// This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data.

// Examples:
//  - Binary Search
//  - Quick Sort, Merge Sort
//  - Binary Search Trees

// More Discussed in the later sections
