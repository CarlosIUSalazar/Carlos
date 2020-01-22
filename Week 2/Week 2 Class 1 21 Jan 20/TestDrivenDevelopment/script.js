'use strict'
// Please don't delete the 'use strict' line above

// Declare the tdd variables to be used throughout the file.

function addTen(number){
    return number + 10;
}

let actual = addTen(5);
let expected = 15;

if (actual === expected){
    console.log("Yay! test PASSED!");
} else {
    console.log("Test FAILED. Keep Trying!");
    console.log("  actual:", actual);
    console.log(" epected:", expected);
}




actual = addTen(100);
expected = 110;

if (actual === expected){
    console.log("Yay! test PASSED!");
} else {
    console.log("Test FAILED. Keep Trying!");
    console.log("  actual:", actual);
    console.log(" epected:", expected);
}


actual = addTen(-100);
expected = -90;

if (actual === expected){
    console.log("Yay! test PASSED!");
} else {
    console.log("Test FAILED. Keep Trying!");
    console.log("  actual:", actual);
    console.log(" epected:", expected);
}


///////////////////////////
//////////////////////////
// Summary
// Here is what a TDD test case should look like in code:
//let expected;
//let actual;

// ... Some code here that you are going to test below.

actual = 0;/* whatever EXPRESSION you are testing */
expected = 0;/* whatever you expect the EXPRESSION to be */

if (actual === expected) {
    console.log("Yay! Test PASSED.");
} else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
}

//Declare a function getFullName.
// Arguments
// (string): the first name
// (string): the last name
// Returns
// (string): the first name and last name concatenated together with a space between them.
function getFullName(firstName, lastName) {
    // Your code here.
    return firstName + " " + lastName;

  }
  
  actual = getFullName("Ken", "Watanabe");
  expected = "Ken Watanabe";
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }

  // 2 Declare a function simpleGreeting.
// Arguments
// (string): the person’s name
// (boolean): true for formal, false for informal
// Returns
// (string): a greeting (formal or informal) for the given person’s name.
// Declare your function here.

function simpleGreeting(name,bool){
    if (bool === true){
        return "Hello, " + name+"-san.";
    } else {
        return "Hello, " + name +".";
    }
}

actual = simpleGreeting("Amy", true);
expected = "Hello, Amy-san.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = simpleGreeting("Matt", false);
expected = "Hello, Matt.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// 3 Declare a function isGreaterThan.
// Arguments
// (number): the first number
// (number): the second number
// Returns

// (boolean): Whether or not the given first number is greater than the given second number.
// Declare your function here.

function isGreaterThan(num1,num2){
    if (num1 > num2){
        return true;
     } else {
         return false;
     }
}

actual = isGreaterThan(5, 4);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isGreaterThan(3, 4);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


// 4 Choose at least 5 of the exercises from previous lessons and convert their 
// test cases (OLD style) to the TDD test case style. You will need to re-write the 
// code from the previous exercises again. Don’t worry, it’s good practice to re-write 
// code.

// For example:
function add(numOne, numTwo) {
    return numOne + numTwo;
  }
  
  // OLD style
  console.log(add(4, 3)); // should return 7
  console.log(add(100, 42)); // => 142
  
  actual = add(4, 3);
  expected = 7;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = add(100, 42);
  expected = 142;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }

  // 5 Declare a function called operate.


// Arguments

// (string): The arithmetic operator to use: “+”, “-”, “*”, “/”, or “%”.
// (number): The first operand.
// (number): The second operand.
// Returns

// (number): The result of executing the given operator on the given operands, in order.

// Declare your function here.

function operate(string,num1,num2){
    if (string === "+"){
        return num1 + num2;
    } else if (string === "-") {
          return num1 - num2;
    } else if (string === "*"){
          return num1 * num2;
    } else if (string === "/"){
        return num1/num2;
    } else if (string === "%"){
        return num1 % num2;
    }
}

actual = operate("+", 1, 2);
expected = 3;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = operate("-", 100, 33);
expected = 67;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


actual = operate("*", 10, 3);
expected = 30;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = operate("/", 100, 10);
expected = 10;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = operate("%", 100, 10);
expected = 0;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


// Write your own tests for "*", "/", and "%"

//6 In English, the colors of the rainbow are sometimes listed as:
// red
// orange
// yellow
// green
// blue
// indigo
// violet
// Declare a function called isRainbowColor.

// Arguments
// (string): The color to check.
// Returns
// (boolean): Whether or not the given color is a rainbow color. Use case-insensitive checking. I.e. “red”, “Red”, “RED”, “ReD”, and “rEd” are all valid rainbow colors.

// Declare your function here.

function isRainbowColor(string){

    let string2 = string.toLowerCase();
    console.log("The color passed is" + string2);
    if (string2 === "red") {
        return true;
    } else if (string2 === "orange") {
        return true;
    } else if (string2 === "yellow") {
        return true;
    } else if (string2 === "green") {
        return true;
    } else if (string2 === "blue") {
        return true;
    } else if (string2 === "indigo") {
        return true;
    } else if (string2 === "violet") {
        return true;
    } else {
        return false;
    }
}

actual = isRainbowColor("red");
expected = true;

if (actual === expected) {
  console.log("Yay! red Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isRainbowColor("rEd");
expected = true;

if (actual === expected) {
  console.log("Yay! rEd Test PASSED.");
} else {
  console.error("Test rEd FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isRainbowColor("Fred");
expected = false;

if (actual === expected) {
  console.log("Yay! Fred Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isRainbowColor("inDigo");
expected = true;

if (actual === expected) {
  console.log("Yay! Indigo Test PASSED.");
} else {
  console.error("Test inDigo FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests for the other rainbow colors.


// MEDIUM REQUIREMENTS
// 1 Declare a function called typeOfFriendly.
// Arguments

// (*): The value to be examined.
// Note: * means any type.
// Returns

// (string): A friendly message that describes the type of the given argument.
// Declare your function here.

function typeOfFriendly(x){

    let type = typeof x;
    console.log(type)

    return "The given argument is a " + type +".";

}


actual = typeOfFriendly("Hello");
expected = "The given argument is a string.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = typeOfFriendly(5);
expected = "The given argument is a number.";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write your own tests for the remaining types

//2 Declare a function called compare.

// Arguments
// (string): The comparison operator to use: “=", "”, “<”, “<=”, etc.
// (number): The first operand.
// (number): The second operand.
// Returns
// (number): The result of executing the given operator on the given operands, in order.
// Declare your function here.

function compare(string,num1,num2){

    console.log(num1 + string + num2)
    return (num1 + string + num2);

}


actual = compare("===", 1, 1);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = compare("===", 1, "1");
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = compare("==", 1, "1");
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write your own tests for the remaining operators

//Advanced Requirements
//1 For these exercises, you may need to use techniques that we haven’t covered in class.

// Declare a function called concatenateNumbers.

// Arguments

// (number): the first number
// (number): the second number (optional)
// (number): the third number (optional)
// Returns

// (string): the given numbers, concatenated into a single string.
// Your code here.

actual = concatenateNumbers(7);
expected = "7";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = concatenateNumbers(7, 9);
expected = "79";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = concatenateNumbers(43, 55, 92);
expected = "435592";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests as needed.

// 2 Declare a function called halfLife.
// Arguments
// (number): the original quantity
// (number): the half-life of the decaying quantity
// (number): the elapsed time
// Returns

// (number): the quantity that remains after the given original quantity has decayed for the given elapsed time
// Your code here.

actual = halflife(1, 1, 1);
expected = 1 / 2;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = halflife(8, 4, 2);
expected = 4 * Math.SQRT2;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = halflife(2, 2, 4);
expected = 1 / 2;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests as needed.

// 3 Declare a function called invertCase.
// Arguments
// (string): the string to be inverted
// Returns

// (string): a copy of the given string, with all lowercase letters changed to uppercase, 
// and vice-versa. Non-alphabet characters are not changed.
// Your code here.

actual = invertCase("I hope you are having a nice day!");
expected = "i HOPE YOU ARE HAVING A NICE DAY!";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = invertCase("5HyfHkoIy;;ft4j6KH9BfT4uKn");
expected = "5hYFhKOiY;;FT4J6kh9bFt4UkN";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests as needed.

// Nightmare Requirements 😈
// This might be super hard.
// Declare a function isPrime.
// Arguments
// (number): the number to check
// Returns
// (boolean): whether or not the given number is prime

// Your code here.

actual = isPrime(1);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isPrime(2);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isPrime(3);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isPrime(4);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isPrime(5);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isPrime(6);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isPrime(104728);
expected = false;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = isPrime(104729);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Write more tests as needed.