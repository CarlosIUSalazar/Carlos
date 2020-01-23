'use strict'
// Please don't delete the 'use strict' line above

// 1 Declare a function compareTwoNumbers.

// Arguments

// (number): the first number
// (number): the second number
// Returns

// (string): an explanation of how the given numbers compare. 
//There are 3 possibilities:

// “X is equal to Y”
// “X is less than Y”
// “X is greater than Y”
// Declare your function here.

function compareTwoNumbers(num1,num2){

    if (num1 === num2){
        return num1 + " is equal to " + num2
    } else if (num1 < num2) {
        return num1 + " is less than " + num2
    } else if (num1 > num2) {
        return num1 + " is greater than " + num2
    }
}

let actual = compareTwoNumbers(1, 1);
let expected = "1 is equal to 1";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = compareTwoNumbers(3, 4);
expected = "3 is less than 4";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write your own test for "X is greater than Y".