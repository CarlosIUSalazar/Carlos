'use strict'
// Please don't delete the 'use strict' line above

1 // Declare the tdd variables to be used throughout the file.
let expected;
let actual;

// ... Some code here that you are going to test below.

// actual = /* whatever EXPRESSION you are testing */
// expected = /* whatever you expect the EXPRESSION to be */

// if (actual === expected) {
//     console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }


// BASIC REquirements
// Don’t forget to put the declarations of expected and actual at the 
//top of your file.

// Declare a function isTeenager.

// Arguments

// (number): the person’s age
// Returns

// (boolean): whether or not the person with the given age is a teenager. 
//(age 13 - 19: “thirTEEN” to “nineTEEN”)
function isTeenager(age) {
    // Your code here.
    if (age >=13 && age <= 19){
        return true;
    } else {
        return false;
    }


  }
  
  actual = isTeenager(3);
  expected = false;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = isTeenager(14);
  expected = true;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests to make sure your code is correct.

  // 2 For this task, update the function you created above. Let’s 
//   add another conditional. This conditional should check to see IF 
//   the argument passed into the function is a number. ELSE, the 
//   function should return "Invalid! The given age is not a number!".
// Hint: How did you check a value’s type before.


function isTeenager2(age) {
    // Your code here.
    if (typeof(age) !== "number"){
        return "Invalid! The given age is not a number!";
    } else if (age >=13 && age <= 19){
        return true;
    } else {
        return false;
    }
  }


// Note: Adding this type of conditional into a function is called a type check. It’s a way to make sure you aren’t getting data you don’t expect (which could cause side-effects you don’t want).

actual = isTeenager2("Hello!");
expected = "Invalid! The given age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager2(true);
expected = "Invalid! The given age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isTeenager2();
expected = "Invalid! The given age is not a number!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

//3 Declare a function called anotherGreeting.
// Arguments

// (string): the person’s name
// (boolean): true for formal(-san), false for informal
// (boolean): true for ‘Hello’, false for ‘Goodbye’
// Returns

// (string): a formal or informal greeting or farewell.
// Your code here.

function anotherGreeting(string,bool1,bool2){

    if (bool1 === true && bool2 === true){
        return "Hello, " + string+"-san.";
    } else if (bool1 === true && bool2 ===false){
        return "Goodbye, "+string+"-san.";
    } else if (bool1 === false && bool2 === true){
        return "Hello, "+string+"!";
    } else if (bool1 === false && bool2 === false){
        return "Goodbye, "+string+"!";
    }

}

actual = anotherGreeting("Mary", true, true);
expected = "Hello, Mary-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Mary", false, true);
expected = "Hello, Mary!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting("Felix", true, false);
expected = "Goodbye, Felix-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to see if your code is correct.