// Bubble sort is a sorting algorithm that compares two adjacent elements and swaps them until they are not in the intended order.Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called a bubble sort.

// Time Complexity:
//   Best	O(n)
//   Worst	O(n^2)
//   Average	O(n^2)
//   Space Complexity	O(1)
//   Stability	Yes

// Algorithm:

// bubbleSort(array)
//   swapped <- false
//   for i <- 1 to indexOfLastUnsortedElement-1
//     if leftElement > rightElement
//       swap leftElement and rightElement
//       swapped <- true
// end bubbleSort

// Working of Bubble Sort -> largest value bubbles at the end for each comparison.
//  1. First Iteration (Compare and Swap)
//    - Starting from the first index, compare the first and the second elements.
//    - If the first element is greater than the second element, they are swapped.
//    - Now, compare the second and the third elements. Swap them if they are not in order.
//    - The above process goes on until the last element.
//  2. Remaining Iteration
//    - The same process goes on for the remaining iterations.
//    - After each iteration, the largest element among the unsorted elements is placed at the end.

// Implementation: smallest to largest
function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let noSwaps = true; // Optimization for almost sorted data

    for (j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }

  return arr;
}

console.log(bubbleSort([8, 3, 2, 5])); // [2, 3, 4, 5]
console.log(bubbleSort([5, 3, 8, 1, 3, 9, 2])); // [1, 2, 3, 3, 5, 8, 9]
console.log(bubbleSort([9, 1, 2, 3, 4, 5, 6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8, 9] (almost sorted data) --> O(n)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.

// Time Complexity:
//   Best	O(n^2)
//   Worst	O(n^2)
//   Average	O(n^2)
//   Space Complexity	O(1)
//   Stability	No

// Algorithm:

// selectionSort(array, size)
//   repeat (size - 1) times
//   set the first unsorted element as the minimum
//   for each of the unsorted elements
//     if element < currentMinimum
//       set element as new minimum
//   swap minimum with first unsorted position
// end selectionSort

// Working of Selection Sort
//  1. Set the first element as minimum.
//  2. Compare minimum with the second element. If the second element is smaller than minimum, assign the second element as minimum... Compare minimum with the third element. Again, if the third element is smaller, then assign minimum to the third element otherwise do nothing. The process goes on until the last element.
//  3. After each iteration, minimum is placed in the front of the unsorted list.
//  4. For each iteration, indexing starts from the first unsorted element. Step 1 to 3 are repeated until all the elements are placed at their correct positions.

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }

    if (i !== minIdx) swap(arr, i, minIdx);
  }

  return arr;
}

console.log(selectionSort([38, 44, 19, 5, 47, 15])); // [5, 15, 19, 38, 44, 47]
console.log(selectionSort([9, 1, 2, 3, 4, 5, 6, 7, 8])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration.
// Insertion sort works similarly as we sort cards in our hand in a card game.We assume that the first card is already sorted then, we select an unsorted card. If the unsorted card is greater than the card in hand, it is placed on the right otherwise, to the left. In the same way, other unsorted cards are taken and put in their right place...A similar approach is used by insertion sort. It performs best for consistantly sorting like an online sorting when a bunch of numbers are being pushed at a time & it sorts them in time.

// Time Complexity:
//   Best	O(n)
//   Worst	O(n^2)
//   Average	O(n^2)
//   Space Complexity	O(1)
//   Stability	Yes

// Algorithm:

// insertionSort(array)
//   mark first element as sorted
//   for each unsorted element X
//     'extract' the element X
//     for j <- lastSortedIndex down to 0
//       if current element j > X
//         move sorted element to the right by 1
//   break loop and insert X here
// end insertionSort

// Working of Insertion Sort
//  1. The first element in the array is assumed to be sorted. Take the second element and store it separately in key...Compare key with the first element. If the first element is greater than key, then key is placed in front of the first element.
//  2. Now, the first two elements are sorted...Take the third element and compare it with the elements on the left of it. Placed it just behind the element smaller than it. If there is no element smaller than it, then place it at the beginning of the array.
//  3. Similarly, place every unsorted element at its correct position.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];

    let j;

    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentValue;
  }

  return arr;
}

console.log(insertionSort([2, 1, 3, 7, 5])); // [1, 2, 3, 5, 7]

////////////////////////////////////////////////////////////////////////////////////////////
// Comparison among Bubble-sort, Selection-sort & Insertion-sort
// Algorithm     Time-complexity(best)  Time-complexity(average)  Time-complexity(worst)  Space-complexity
// Bubble-sort          O(n)                    O(n^2)                    O(n^2)               O(1)
// Selection-sort       O(n^2)                  O(n^2)                    O(n^2)               O(1)
// Insertion-sort       O(n)                    O(n^2)                    O(n^2)               O(1)
