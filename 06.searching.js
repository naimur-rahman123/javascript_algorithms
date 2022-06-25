// Linear Search --> Linear search is a very simple search algorithm. In this type of search, a sequential search is made over all items one by one.
// Time Complexity: O(n)
// Built-in JavaScript Methods that uses linear-search algorithm:
//    -indexOf
//    -includes
//    -find
//    -findIndex

// Example 1: Write a function that accepts an array and a value. Loop through the array and check if the current array element is equal to the value. If it is, return the index at which the element is found. If the value is never found, return -1

function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(findIndex([1, 2, 3, 4, 5, 6], 8)); // -1
console.log(findIndex([1, 2, 3, 4, 5, 6], 4)); // 3

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Binary Search --> In computer science, binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. Binary search compares the target value to the middle element of the array.
// Time Complexity: O(log n)

// Example 1: Write a function called 'binarySearch' that accepts a sorted array and a value. If you find the value return the index, if you don't find the value return -1

function binarySearch(arr, value) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === value) return mid;
    else if (arr[mid] < value) left = mid + 1;
    else right = mid - 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 9)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 2)); // 1
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 5)); // 4

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Example: String Search -> Write a function that takes two string (a longer string, a substring) and return how many times the substring appears in the longer string

function patternCount(longStr, subStr) {
  let count = 0;

  for (let i = 0; i < longStr.length; i++) {
    for (let j = 0; j < subStr.length; j++) {
      if (subStr[j] !== longStr[i + j]) break;
      if (j === subStr.length - 1) count++;
    }
  }

  return count;
}

console.log(patternCount('wowomgzomg', 'omg')); // 2 ('omg' appears 2 times in 'wowomgzomg')
