'use strict'
// Please don't delete the 'use strict' line above
// COMPARISONS INTRO

// 1 Before running the code below, what do you think the expressions will resolve to? Try them in the console to see if you are correct!
"true" == true;
// We never use `==`. Stick to using `===`.
"true" === true;
3 >= 3;
3 !== 4;

// 2 Copy the code into your script.js file and fill in the ??? with the appropriate comparison operators or values to make the statements output the expected boolean value. Open index.html in Chrome and then open the Developer Console to check the results.
console.log(1100 ??? 99) // should return true

console.log(1 ??? 21) // => false

console.log(62 !== ???) // => true

console.log("5" ??? 5) // => false

console.log("6" ??? "six") // => true

// 3 Copy the code into your script.js file and change ONE of the ARITHMETIC operators in the expression below so that it evaluates to true. Make sure you understand the ORDER that the expressions evaluate in.

console.log(2 + 3 * 10 > 50);


// 4 Add the function below to your script.js file and invoke it by replacing ??? with two DIFFERENT inputs so that the expression evaluates to true. Remember, === checks the value and type, but == only checks the value.
function isEqual(valueOne, valueTwo) {
    return valueOne == valueTwo;
  }
  
  console.log(isEqual(???,???));



//5 Add the function below to your script.js file and write a statement that returns true when valueOne is MORE than valueTwo.
//Remember that you need to use console.log to print the output of the function to your console.
function isGreaterThan(valueOne, valueTwo) {}
//Write some test cases! Invoke isGreaterThan with two inputs so that the output is false.

// 6 In Japan, you can drink alcohol if you are aged 20 or older. In your script.js file declare a function called isOfAge that takes a number as the input and returns a boolean that describes whether or not that person is old enough to drink.


// MEDIUM REQUIREMENTS
// These exercises may require some research in order to complete.

// Amend your isOfAge function to print a string to the console that describes whether or not that person is old enough to drink. It should still return a boolean.

// Write a function called isEven that, given a number n as a parameter, returns true if that number is even, and false otherwise.

// Write a function validCredentials that accepts two parameters: username and password, and returns true if both are long enough, and false otherwise. You can decide what constitutes “long enough”.


// ADVANCED REQUIREMENTS
// For these exercises, you may need to use techniques that we haven’t covered in class.

// 1 Adjust your isEven function so that it doesn’t use the % operator.

// 2 Write a function called getGreaterValue that returns the greater of two arguments.
console.log(getGreaterValue(10, 15)); // should return 15
console.log(getGreaterValue(15, 10)); // should return 15


//3 Write a function called getGreatestValue that returns the greatest of any number of arguments.
console.log(getGreatestValue(10, 15)); // should return 15
console.log(getGreatestValue(15, 10)); // should return 15
console.log(getGreatestValue(1, 2, 3, 4, 5)); // should return 5
console.log(getGreatestValue(1, 10, 3, 4, 5)); // should return 10

//NIGHTMARE REQUIREMENTS
//1 Write a function called flatten that takes an array of arrays and returns a flattened version.
console.log(flatten([[1, 2, 3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]


//2 Write a function called flattenDeep that takes an array of arrays (which may be nested) and returns a flattened version.
console.log(flattenDeep([1, 2, 3, [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flattenDeep([[1, 2, 3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flattenDeep([[1], [2], [3], [4, 5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flattenDeep([[1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

