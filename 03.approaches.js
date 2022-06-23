// Algorithm -> A process or set of steps to accomplish a certain task

// Problem solving steps:

// Step 1 --> Understand the problem
// Example: Write a function which takes two numbers and returns their sum
//    1.Can I restate the problem in my own words?
//      -Implement addition
//    2.What are the inputs that go into the problem?
//      -Like how large, what are the edge cases, integer or float etc
//    3.What are the oputputs that should come from the solution to the problem?
//      -Int ? Float ? String ?
//    4.Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
//    5.How should I label the important pieces of data that are part of the problem?
//      -Like what matters?

// Step 2 --> Explore concrete examples
// Example: Write a function which takes in a string and returns counts of each character in the string
//    1. Start with simple examples
//      -charCount('aaaa') // returns { a: 4 }
//      -charCount('hello') // returns { h: 1, e: 1, l: 2, o: 1 }
//    2. Progress to more complex examples
//      -charCount('my phone number is 013131314133') // what about numbers?
//      -charCount('Hello hi') // what about uppercase letters, do I ignore cases?
//    3. Explore example with empty inputs
//      -charCount('') // do I return null / undefined / error?
//    4. Explore example with invalid inputs
//      -charCount(['hello']) // do I return null / undefined / error?
//      -charCount({ name: 'John' }) // do I return null / undefined / error?

// Step 3 --> Break it down
//    1. Communicate with the interviewer
//    2. Write comment for each task & explicitly write out the steps you need to take (this forces you to think about the code you'll write before you write it)
// Example: Write a function which takes in a string and returns counts of each character in the string
function charCount(str) {
  // make object to return at end
  // loop over string
  //    -lowercase every character & check if it's alphanumeric:
  //      -if the char is a number/letter AND is a key in object, add one to count
  //      -if the char is a number/letter AND char is not a key in object, add it and set value to 1
  //      -if the char is something else (space, period etc.) don't do anything
  // return object with keys that are lowercase alphanumeric characters in the string; values should be counts for those characters
}

// Step 4 --> Simplify / Solve
//    1. Find the core difficulty in what you're trying to do
//    2. Temporarily ignore the difficulty
//    3. Write a simplified solution
//    4. Then incorporate that difficulty back in
// Example: Write a function which takes in a string and returns counts of each character in the string
function charCountDemo(str) {
  // make object to return at end
  const result = {};
  // loop over string
  for (let i = 0; i < str.length; i++) {
    //    -lowercase every character & check if it's alphanumeric:
    const key = str[i].toLowerCase();
    //      -if the char is a number/letter AND is a key in object, add one to count
    if (key.match(/^[a-z0-9]+$/i) && result[key]) {
      result[key]++;
      //      -if the char is a number/letter AND char is not a key in object, add it and set value to 1
    } else if (key.match(/^[a-z0-9]+$/i) && !result[key]) {
      result[key] = 1;
      //      -if the char is something else (space, period etc.) don't do anything
    } else {
      // do nothing
    }
  }
  // return object with keys that are lowercase alphanumeric characters in the string; values should be counts for those characters
  return result;
}

console.log(charCountDemo('Hello hi!!!')); // { h: 2, e: 1, l: 2, o: 1, i: 1 }

// Step 5 --> Look Back & Refactor
// Refactoring Questions:
//    1. Can you check the result?
//    2. Can you derive the result differently?
//    3. Can you understand it at a glance?
//    4. Can you use the result or method for some other problems?
//    5. Can you improve the performance of your solution?
//    6. Can you think of other ways to refactor?
//    7. How have other people solved this problem?

// Example: Write a function which takes in a string and returns counts of each character in the string
function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

function charCountRefactored(str) {
  const obj = {};
  for (let char of str) {
    // Efficient than regular expressions
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

console.log(charCountRefactored('Hello hi!!!')); // { h: 2, e: 1, l: 2, o: 1, i: 1 }
