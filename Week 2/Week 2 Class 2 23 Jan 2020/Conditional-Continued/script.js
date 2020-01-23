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

// MEDIUM REQUIREMENTS 
// Add a type check to your previous function.


function anotherGreeting2(string,bool1,bool2){

    if (typeof(string) !== "string" || typeof(bool1) !== "boolean" || typeof(bool2) !== "boolean"){
        return "Invalid input!";
    } 
    
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



actual = anotherGreeting2(true, false, true);
expected = "Invalid input!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = anotherGreeting2("Sam", true, 0);
expected = "Invalid input!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


// 2 Declare a function called getLetterGrade.

// Arguments

// (number): the numerical grade, from 0 to 100.
// Returns

// (string): The letter grade for the given numerical grade. Follow the guide below:

// between 90 and 100 (inclusive) is an "A"
// between 80 and 89 (inclusive) is a "B"
// between 70 to 79 (inclusive) is a "C"
// between 60 to 69 (inclusive) is a "D"
// anything 59 or less should return an "F"

function getLetterGrade(number){

    if (number >=90 && number <= 100){
        return "A";
    } else if (number >=80 && number <= 89) {
        return "B";
    } else if (number >=70 && number <= 79) {
        return "C";
    } else if (number >=60 && number <= 69) {
        return "D";
    } else if (number <= 59) {
        return "F";
    }

}


actual = getLetterGrade(95);
expected = "A";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests
actual = getLetterGrade(45);
expected = "F";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getLetterGrade(77);
expected = "C";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


//3 Add range checking to getLetterGrade so that if you input a number 
//greater than 100 or less than 0, the function returns “Invalid grade.”

function getLetterGrade2(number){

    if (number > 100 || number < 0){
        return "Invalid grade.";
    } 

    if (number >=90 && number <= 100){
        return "A";
    } else if (number >=80 && number <= 89) {
        return "B";
    } else if (number >=70 && number <= 79) {
        return "C";
    } else if (number >=60 && number <= 69) {
        return "D";
    } else if (number <= 59) {
        return "F";
    }

}

actual = getLetterGrade2(101);
expected = "Invalid grade.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure that your code is correct.

actual = getLetterGrade2(-1);
expected = "Invalid grade.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


///4 Declare a function called getBestNumericalGrade. This is the inverse of 
//getLetterGrade.
// Arguments

// (string): the numerical grade, “A”, “B”, “C”, “D”, or “F”.
// Returns

// (number): The best numerical grade for the given letter grade.

actual = getBestNumericalGrade("A");
expected = 100;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade("B");
expected = 89;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure that your code is correct.

function getBestNumericalGrade(number){
    if (number === "A"){
        return 100;
    } else if (number === "B"){
        return 89;
    } else if (number === "C"){
        return 79;
    } else if (number === "D"){
        return 69;
    } else if (number === "F"){
        return 59;
    } 
}


actual = getBestNumericalGrade("A");
expected = 100;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade("B");
expected = 89;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure that your code is correct.


/// 5 Add input checking to getBestNumericalGrade so that if you 
//input an invalid string, the function returns “Invalid grade.”

function getBestNumericalGrade2(number){
    if (number === "A"){
        return 100;
    } else if (number === "B"){
        return 89;
    } else if (number === "C"){
        return 79;
    } else if (number === "D"){
        return 69;
    } else if (number === "F"){
        return 59;
    } else {
        return "Invalid grade.";
    }
}

actual = getBestNumericalGrade2("dinosaurs are awesome");
expected = "Invalid grade.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = getBestNumericalGrade2(100);
expected = "Invalid grade.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure that your code is correct.

/////ADVANCED REQUIREMENTS
// For these exercises, you may need to use techniques that we haven’t 
// covered in class.

// For the following, you may want to read about something called De Morgan’s Law.

// Declare a function or that works like ||, but without using the || operator.

// Arguments

// (*): the first operand
// (*): the second operand
// Returns

// (*): The same result as applying the || operator to the given operands, in order.

function deMorganLaw(operand1,operand2){

}

// Your code here

actual = or(true, true);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = or(true, false);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests to make sure that your code is correct.