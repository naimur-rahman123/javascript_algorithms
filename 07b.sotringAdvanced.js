// Merge Sort is one of the most popular sorting algorithms that is based on the principle of Divide and Conquer Algorithm. Here, a problem is divided into multiple sub-problems. Each sub-problem is solved individually. Finally, sub-problems are combined to form the final solution.

// Time Complexity => O(log n) decompositions * O(n) comparisons per decomposition
//   Best	O(n*log n)
//   Worst	O(n*log n)
//   Average	O(n*log n)
// Space Complexity	O(n)
// Stability	Yes

// Algorithm:

// step 1: start
// step 2: declare array and left, right, mid variable
// step 3: perform merge function.
//         mergesort(array,left,right)
//         mergesort (array, left, right)
//         if left > right
//         return
//         mid= (left+right)/2
//         mergesort(array, left, mid)
//         mergesort(array, mid+1, right)
//         merge(array, left, mid, right)
// step 4: Stop

// Time & Space Complexity of merge function --> O(n + m)
function merge(arr1, arr2) {
  const results = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }

  return results;
}

// mergeSort Pseudocode
//  - Break up the array into halves until you have arrays that are empty or have one element
//  - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at full length of the array

function mergeSort(array) {
  if (array.length <= 1) return array; // base case
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100])); // [1, 2, 10, 14, 50, 99, 100]
console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2])); // [1, 2, 3, 4, 5, 6, 7, 8]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Quicksort is a sorting algorithm based on the divide and conquer approach where
//   1. An array is divided into subarrays by selecting a pivot element (element selected from the array).
//      While dividing the array, the pivot element should be positioned in such a way that elements less than pivot are kept on the left side and elements greater than pivot are on the right side of the pivot.
//   2. The left and right subarrays are also divided using the same approach. This process continues until each subarray contains a single element.
//   3. At this point, elements are already sorted. Finally, elements are combined to form a sorted array.

//  Time Complexities
//    Worst [Big-O]: O(n^2)
//    Best [Big-omega]: O(n*log n)
//    Average [Big-theta]: O(n*log n)
//  Space Complexity O(log n).

// Working of Quick Sort ->
// 1. Select the Pivot Element
// 2. Rearrange the Array
// 3. Divide Subarrays

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivot(arr, start = 0, end = arr.length - 1) {
  // We are assuming the pivot is always the first element
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3])); // 3
console.log(quickSort([8, 3, 5, 4, 7, 6, 1, 2])); // [1, 2, 3, 4, 5, 6, 7, 8]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Radix sort is a sorting algorithm that sorts the elements by first grouping the individual digits of the same place value. Then, sort the elements according to their increasing/decreasing order.
// Suppose, we have an array of 8 elements. First, we will sort elements based on the value of the unit place. Then, we will sort elements based on the value of the tenth place. This process goes on until the last significant place.

// Time Complexity [n = number of things we're sorting, k = length of digits(average)]
//   Best	O(n + k)
//   Worst	O(nk)
//   Average	O(nk)
// Space Complexity	O(n + k)
// Stability	Yes

// Working of Radix Sort ->
// 1. Find the largest element in the array, i.e. max. Let X be the number of digits in max. X is calculated because we have to go through all the significant places of all elements.
//    In this array [121, 432, 564, 23, 1, 45, 788], we have the largest number 788. It has 3 digits. Therefore, the loop should go up to hundreds place (3 times).
// 2. Now, go through each significant place one by one.
//    Use any stable sorting technique to sort the digits at each significant place. We have used counting sort for this. Sort the elements based on the unit place digits (X=0)
// 3. Now, sort the elements based on digits at tens place.
// 4. Finally, sort the elements based on the digits at hundreds place.

function getDigit(num, idx) {
  return Math.floor(Math.abs(num) / Math.pow(10, idx)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(numsArr) {
  let maxDigits = 0;
  for (let i = 0; i < numsArr.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(numsArr[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      const digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

console.log(radixSort([28, 3, 35, 4, 720, 66, 1, 22232])); // [1, 3, 4, 28, 35, 66, 720, 22232]
