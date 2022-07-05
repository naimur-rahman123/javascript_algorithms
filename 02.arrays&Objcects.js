// Objects
// When to use them?
//    -When you don't need order
//    -When you need fast access / insertion and removal

// Big O of objects
//    -Isnsertion --> O(1)
//    -Removal --> O(1)
//    -Searching --> O(n)
//    -Access --> O(1)

// Example:
const instructor = {
  firstName: 'Kelly',
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4],
};

// Insertion --> O(1)
instructor.age = 24;

// Deletion --> O(1)
delete instructor.isInstructor;

// Access --> O(1)
console.log(instructor.firstName); // Kelly

// Big O of Object Methods
//    Object.keys --> O(n)
//    Object.values --> O(n)
//    Object.entries --> O(n)
//    hasOwnProperty --> O(1)

// Examples:
console.log(Object.keys(instructor)); // ['firstName', 'age', 'favoriteNumbers']
console.log(Object.values(instructor)); // ['Kelly', 24, [1, 2, 3, 4]]
console.log(Object.entries(instructor)); // [['firstName', 'Kelly'], ['age', 24], 'favoriteNumbers', [1, 2, 3, 4]]
console.log(instructor.hasOwnProperty('firstName')); // true

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Arrays [Ordered Lists]
// When to use them?
//    -When you need order
//    -When you need fast access / insertion and removal (sort of...)

// Big O of Arrays
//    -Insertion -> It depends
//    -Removal -> It depends
//    -Searching -> O(n)
//    -Access -> O(1)

// Examples
const names = ['Michael', 'Melissa', 'Ron']; // string types stored
const values = [true, {}, [], 2, 'awesome']; // mixed types stored

// Access --> O(1)
console.log(names[0]); // 'Michael'
console.log(names[5]); // undefined (because the index is not valid)

// Insertion
//    -At the end --> O(1)
names.push('Jessica');
//    -In the beginning --> O(n) -> because the indexes need to be sorted again
names.unshift('Josh');
//    -In the middle --> O(n) -> because the indexes need to be sorted again
names.splice(2, 0, 'Kayle');

// Removal
//    -From the end --> O(1)
names.pop();
//    -From the beginning --> O(n) -> because the indexes need to be sorted again
names.shift();
//    -From the middle --> O(n) -> because the indexes need to be sorted again
names.splice(1, 1); // O(n) -> In place
names.slice(1, 3); // O(n) -> Returns a new copy

// Other most-used array methods
// forEach, map, filter, reduce --> O(n)
const names2 = names.concat(['Peter', 'Kevin']); // O(n) --> Technically it's O(m + n)
//  Mozilla uses merge sort for the sort() method
// In Chrome's v8 source code, as of today, it uses QuickSort and InsertionSort, for smaller arrays for the sort() method
const sortedNames = names.sort(); // O(n * log(n))

////////////////////////////////////////////////////////////////////////////////////////////
// Implementing an "Array"

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    if (this.length > 0) this.length--;
    return lastItem;
  }

  // O(n)
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArr = new MyArray();
myArr.push('John');
myArr.push('Murphy');
myArr.push('Benjin');
myArr.push('Celia');
myArr.push('Lulu');
myArr.push('Kaity');
console.log(myArr.pop());
console.log(myArr.pop());
console.log(myArr.pop());
console.log(myArr.delete(1));
console.log(myArr);
