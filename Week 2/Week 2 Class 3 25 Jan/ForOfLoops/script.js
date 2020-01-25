'use strict'
// Please don't delete the 'use strict' line above



const colors = ["red","green","blue"];
console.log(colors);

for (const color of colors) {
    console.log(color);
}


//FOR OF LOOPS
// Basic Requirements
// Don’t forget to put the declarations of expected and actual at the top of your file.

// Declare a function sumArray.

// Arguments

// ([number]): the numbers to add together.
// NOTE: [number] means an array of numbers.

// Returns

// (number): all of the numbers in the given array, added together.

function sumArray(array) {
    // Your code here.
    let total = 0;
    for (const item of array){
        total += item;
    }
    return total;
  }
  
  let actual = sumArray([1, 2, 3, 4]);
  let expected = 10;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests
