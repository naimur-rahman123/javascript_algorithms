// Quality of good code:
//    -Readability
//    -Scaleablity (BIG-O)
//      -time complexity -> faster
//      -space complexity -> less memory intensive

// Big O Notation -> Big O notation is a mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Time complexity -> the amount of time taken by an algorithm to run, as a function of the length of the input

// Examples:
// adding from 1 to a number --> O(n) [linear]
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

// adding from 1 to a number --> O(1) [constant]
function newAddUpTo(n) {
  return (n * (n - 1)) / 2;
}

// printing walls with nested for loop --> O(n^2) [quadratic]
function squareWalls(n) {
  let wall = '';
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      wall += '*';
    }
    console.log(wall);
    wall = '';
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Space complexity -> refers to the total amount of memory space used by an algorithm/program, including the space of input values for execution.

// Examples:
// summing all the numbers of indexes of an arrays --> O(1) [constant space -> because variable declarations dont grow as input grow ->> we only have to declare 2 variables 'total' & 'i']
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

// doubling all the numbers of indexes of an arrays --> O(n) [linear space -> because variable declarations grow as input grow ->> we have to push new items as input size grows]
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]); // depends on the length of 'arr'
  }
  return newArr;
}
