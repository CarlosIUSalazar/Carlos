'use strict'
// Please don't delete the 'use strict' line above

//Basic Requirements
// Will the code below print the greeting in English or Japanese?

// Check if you are correct by running the code below. Make sure you 
//understand WHY the function is behaving the way it is by reviewing 
//local and global scope in the slides.

let greeting = "Konnichiwa";

function sayHello(name) {
  let greeting = "Hi";
  return greeting + " " + name;
}

console.log(sayHello("Rika"));



//2 Fix this code to satisfy the tests.

const sum = 143;

function sumArray(arrayOfNumbers) {
  
  let sum = 0;

  for (const number of arrayOfNumbers) {
    sum += number;
  }
  return sum;
}


///
function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }


// The function should work as expected
test(sumArray([1, 2, 3]), 6);


// The global variable should not be touched
test(sum, 143);


////

//Medium Requirements
// 1 This counter is broken! We want it to keep track of the full 
// count over time. Please fix the code.

// Hint: You may need to “break the rules” to solve this one.


let count = 0;

function counter(x) {
  count = count + x;
  return count;
}

test(counter(3), 3);
test(counter(4), 7);
test(counter(5), 12);