'use strict'
// Please don't delete the 'use strict' line above

//  WEEK 1 CLASS 3 (SATURDAY 18 JAN)
//Fix the code below:
if (1 === 1) {
    console.log(true);
  }

  //2 Fix the code below
  function simplePasswordLock(password) {
    if (password === "password") {
      return "Correct! Welcome.";
    }
    return "Incorrect password, please try again.";
  }

  //Tests
console.log(simplePasswordLock("qwerty")); // should return "Incorrect password, please try again."
console.log(simplePasswordLock("password")); // => "Correct! Welcome."

// 3 Do you remember .length? The quickest way to find out the length of a string is to use its .length property.
//What does that mean? Run the lines below to see it in action!

console.log("Hello".length);
console.log("The length of this string is 31".length);
console.log(" spaces! ".length);

//4Declare a function called isItTooLong that takes a string as input.
// Using the .length property you learned above, your function should return true if the input string is LONGER 
//than 10 and false if the input string is SHORTER than or EQUAL to 10.
// Write some test cases to test it!
function isItTooLong(string){
    if (string.length > 10){
        return true;
    } else if (string.length <= 10) {
            return false;
        }
    }

console.log("is this string too long? " + isItTooLong("is this string too long?"));
console.log("and this? " + isItTooLong("and this?"));

//5 Add conditionals to function below so that it returns whichever number is bigger. Look at the test cases below 
//to see how it’s supposed to work.
function biggerNumber(numOne, numTwo) {
if (numOne > numTwo){
    return "The first argument is bigger";
} else {
    return "The second argument is bigger";
}
}

//Test cases:
console.log(biggerNumber(4, 3)); // should print 'The first argument is bigger.'
console.log(biggerNumber(3, 4)); // => 'The second argument is bigger.'


//6 Declare a function printDataType that prints the data type that is passed in as an argument. 
//You will use a JavaScript operator typeof.
// You can learn more about this operator here.
// The first has been done for you below. Use the test cases below the function to see how printDataType 
//is supposed to work!
function printDataType(data) {
    if (typeof data === "string") {
      console.log("This is a string.");
  } else if (typeof data === "number") {
    console.log("This is a number.");
  } else if (typeof data === "boolean") {
    console.log("This is a boolean.");
  } else if (typeof data === "undefined") {
    console.log("This is not a string, boolean, or number.");
  }
}

  // Test cases:
  printDataType("Hello!"); // should print "This is a string."
  printDataType(true); // => "This is a boolean."
  printDataType(42); // => "This is a number."
  printDataType(undefined); // should print "This is not a string, boolean, or number."

// 7 Create a function called greeting that takes in two parameters: a name and a language. It should 
//return a greeting for the person in the language they have specified.
//Test cases:

function greeting(name,language){
    if (language === "Japanese"){
        return "Konnichiwa, " + name + "!";
    } else if (language === "English"){
        return "Hello, " + name + "!";
    } else if (language === "German"){
        return "Gutentag, " + name + "!";
    } else if (language === "Spanish"){
        return "Hola, " + name + "!";
    }
}

console.log(greeting("Harry Potter", "Japanese")); // should print "Konnichiwa, Harry Potter!"
console.log(greeting("Albus Dumbledore", "English")); // => "Hello, Harry Potter!"
console.log(greeting("Harry Potter", "German")); // => "Gutentag, Harry Potter!"
console.log(greeting("Harry Potter", "Spanish")); // => "Hola, Harry Potter!"


// 8 Create a function called isEven that returns true IF the number is even.
// Hint: for this, you may want to use the remainder operator (%).
// Bonus: add a conditional before everything else
// that returns “This is not a number.” IF the argument
// passed in is not a number.
function isEven(number){
    if (typeof(number) !== "number"){
        return "This is not a number."
    } else if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


// Test cases:
console.log(isEven(4)); // should print true
console.log(isEven(7)); // => false
console.log(isEven("number")); // => This is not a number


// MEDIUM REQUIREMENTS
// Like you did above, finish writing the functions described below. Each must take one number as an argument:
// isOdd: returns true IF its input is an odd number.
function isOdd(number){
if (number % 2 !== 0) {
    return true;
} else {
    return false;
}
}

// isPositive: returns true IF its input is positive, and false IF it is not positive.
function isPositive(number){
    if (number >= 0) {
        return true;
    } else {
        return false;
    }
}

// isNegative: returns true IF its input is negative, and false IF it is not negative.
function isNegative(number){
    if (number < 0) {
        return true;
    } else {
        return false;
    }
}

// isZero: returns true IF its input is zero, and false IF it is not zero.
function isPositive(number){
    if (number === 0) {
        return true;
    } else {
        return false;
    }
}

// The built-in Math object (we’ll learn what objects are at a later time) has a lot of useful mathematical 
// properties and methods (methods are a kind of function…more about that later!). A few useful methods are Math.random, 
// Math.floor andMath.ceil. Look up these functions on MDN to learn how they work, and use them to implement the following:
// randomNumber: This function should accept a number as its input and return a random number between 0 (inclusive) and 
// number (inclusive).
function randomNumber(number){
    let randomNumber = Math.round(Math.random() * number);  // https://stackoverflow.com/questions/45136711/javascript-random-generate-0-or-1-integer You can use Math.round(Math.random()). If Math.random() generates a number less than 0.5 the result will be 0 otherwise it should be 1
    return (randomNumber);
}

console.log(randomNumber(6));

// guessMyNumber: This function accepts a number argument and compares it to a random integer (whole number) between 
// 0 (inclusive) and 5 (inclusive). It should return "YES!" if the argument matches the random number and "NO!" if the 
// argument does not match.

function guessMyNumber(number){
    let randomNumber = Math.round(Math.random() * number);
    if (number === randomNumber){
        return "YES!";
    } else {
        return "NO!";
    }
}

console.log(guessMyNumber());


// ADVANCED REQUIREMENTS
// For these exercises, you may need to use techniques that we haven’t covered in class.

// Declare a function called randomStopLight. It should create a random number from 0 to 10. If the number generated is 
// less than 3, the function should return "red". If the number generated is between 3 and 6 (inclusive of both), it should 
// return "yellow". If the number generated is 7 or greater, it should return "green".
function randomSpotLight() {
    let randomNumber = Math.round(Math.random() * 10);
    if (randomNumber < 3) {
        return "red";
    } else if (randomNumber >= 3 && randomNumber <=6){
        return "yellow";
    } else if (randomNumber >= 7){
        return "green";
    }
}
console.log(randomSpotLight());

// Hint: You may need to use Math.random().

