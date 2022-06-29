// Hash Tables => are used to store "key-value" pairs. They are like arrays, but the keys are not ordered.
// Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

// Built-in Hash Table / Hash Map in other programming laguages:
// Python has Dictionaries
// JavaScript has Objects and Maps
// Java, Go & Scala have Maps
// Ruby has Hashes

// Hash function in Javascript is any function that takes input as arbitrary size data and produces output as fixed-size data. Normally, the returned value of the hash function is called hash code, hash, or hash value.

// What makes a good Hash Function:
//  - Fast (i.e constant time)
//  - Doesn't cluster outputs at specific indices, but distributes uniformly
//  - Handles collision in a good way
//  - Deterministic (same input yields same output)
//  - Non-Invertible

// A simple Hash Function that works on strings only
function hash(key, arrayLen) {
  // The Prime Number in the Hash is hepful in spreading out keys more inuniformly
  // It's also helpful if the array that you're putting values into has a prime length
  const WEIRD_PRIME = 31;
  let total = 0;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    // map 'a' to 1, 'b' to 2, 'c' to 3, etc.
    let value = char.charCodeAt(0) - 96;
    total += (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

// Dealing With Collisions:
//  - Separate Chaining
//  - Linear Probing

// Implementation of Hash Table
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    const WEIRD_PRIME = 31;
    let total = 0;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  // using separate chaining --> O(1)
  set(key, value) {
    const index = this._hash(key);
    if (!this.keyMap[index]) this.keyMap[index] = [];
    // handling duplicate keys for set
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return value;
      }
    }
    this.keyMap[index].push([key, value]);
    return value;
  }

  // finds a key from a hashmap --> O(1)
  get(key) {
    const index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) return this.keyMap[index][i][1];
      }
    }
    return undefined;
  }

  // loop through the hash table array and returns an array of keys in the table
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keysArr.push(this.keyMap[i][j][0]);
        }
      }
    }

    return keysArr;
  }

  // loop through the hash table array and returns an array of values in the table
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0]))
            valuesArr.push(this.keyMap[i][j][1]);
        }
      }
    }

    return valuesArr;
  }
}

const ht = new HashTable(17);

console.log(ht.set('white', '#ffffff'));
console.log(ht.set('black', '#000000'));
console.log(ht.set('black', '#000003')); // key -> 'black' is replaced with value -> '#000003'
console.log(ht.set('red', '#ff0000'));
console.log(ht.set('green', '#00ff00'));
console.log(ht.set('blue', '#0000ff'));
console.log(ht.set('maroon', '#800000'));
console.log(ht.set('olive', '#808000'));
console.log(ht.set('lightcoral', '#f08080'));

console.log(ht.get('black')); // '#000000'
console.log(ht.get('blue')); // '#0000ff'
console.log(ht.get('lightcoral')); // '#f08080'
console.log(ht.get('yellow')); // undefined

console.log(ht.keys()); // [ 'black', 'green', 'white', 'maroon', 'olive', 'blue', 'lightcoral', 'red' ]
console.log(ht.values()); // [ '#000003', '#00ff00', '#ffffff', '#800000', '#808000', '#0000ff', '#f08080', '#ff0000']

console.log(ht);
