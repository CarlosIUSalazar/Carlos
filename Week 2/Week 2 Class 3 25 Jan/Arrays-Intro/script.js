'use strict'
// Please don't delete the 'use strict' line above

//Do the following exercises in the Google Chrome console with your partner.

// const instructors = ["Kimiko", "Yan", "Dustin", "Dylan"];

//1 Write a console.log statement for the above array to print the last value without hard-coding the index. Hint: .length will be useful here.

// 2 What is going on in our code? Fill in the blanks with the output of the statements:

// let numbers = [1, 2, 3];

// console.log(numbers[2]); // ???
// console.log(numbers[0]); // ???
// console.log(numbers[numbers.length - 1]); // ???

// // Read the docs (MDN) closely for the following!

// console.log(numbers.pop() + numbers.pop()); // ???

// numbers.unshift(4, 5, 6);
// console.log(numbers.shift()); // ???

// console.log(numbers.length); // ???

// numbers.push(5);
// numbers.push(6);

// console.log(numbers.pop() * numbers.pop()); // ???
// console.log(numbers[0]); // ???


// //3 You can also nest arrays inside of arrays. We’ll play around with these a little later. Fill in the following:

// const numbers = [[1, 2, 3], ["one", "two", "three"], ["ichi", "ni", "san"]];
// console.log(numbers[2]); // ???
// console.log(numbers[1][1]); // ???
// console.log(numbers[0][2]); // ???
// console.log(numbers[numbers.length - 1][0]); // ???
// console.log(numbers[2].length); // ???
// console.log(numbers.pop()); // ???
// console.log(numbers[0].push(4)); // ???
// console.log(numbers.length); // ???

// //4 Strings also work very similarly to arrays. Fill in the following:

// const string = "hello";
// console.log(string[0]); // ???
// console.log(string[3]); // ???
// console.log(string[string.length - 1]); // ???
// console.log(string.length); // ???


// Exercises
// Create the usual new folder and files.

// Note

// Remember how to compare arrays? You can’t use strict equality checking. Instead, you need to use JSON.stringify() first.

// When dealing with objects (like arrays), a simple comparison won't work. We'll need to use a built-in function called JSON.stringify to compare the objects.
// More about that in a future lesson.
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// Basic Requirements
// Don’t forget to put the declarations of expected and actual at the top of your file.

// Declare a function called numberOfPeople.

// Arguments

// ([string]): an array of people’s names
// Returns

// (number): the length of the given array of names.

function numberOfPeople(array) {
  // Your code here
    return array.length;


}

let actual = numberOfPeople(["Kimiko", "Yan", "Dustin", "Dylan"]);
let expected = 4;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
// 2 Declare an array called students and fill it with five classmates sitting around you. 
// Invoke numberOfPeople using the array of students as the input!

// Your code here.
let students = ["Takashi","Polly","Dylan","Maria","Carlos"];

actual = numberOfPeople(students);
expected = 5;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
// 3 Add three more values to your students array using the .push method.

// Your code here.

students.push("Stephen","Thalita","Natasha");

actual = numberOfPeople(students);
expected = 8;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// 4 Declare a function called returnLast.

// Arguments

// ([*]): an array of elements
// Returns

// (*): the last item in the given array

function returnLast(array) {
  // Your code here
    return array[array.length-1];

}

// Write your own tests

actual = returnLast(["Stephen","Thalita","Natasha"]);
expected = "Natasha";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


// 5 Instead of using the built-in .push method, let’s write our own. Declare a 
//function push. You are not allowed to use the built-in .push method!

// Arguments

// ([*]): an array of elements
// (*): the value to add to the end of the array
// Returns

// (number): the new length of the given array. The given array should also have 
//the new given element at the end of it.

// Your code here

let array = [1, 2, 3, 4];

function myPush(array,newValue){
    
    return array[array.length] = newValue; 

}

// Test that the function returns the correct result.
actual = myPush(array, 5);
expected = 5;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Test that the function modifies the given array correctly.
actual = array;
expected = [1, 2, 3, 4, 5];

// When dealing with objects (like arrays), a simple comparison won't work. We'll need to use a built-in function called JSON.stringify to compare the objects.
// More about that in a future lesson.
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//MEDIUM REQUIREMENTS
// 1 Declare a function called hiInTheMiddle. You may need to use something called 
//Math.floor for this one.

// Arguments

// ([*]): an array of elements
// Returns

// (*): the same array, with or without an added “hi” in the middle.

// It should first check to make sure that the array has an odd number of values 
//(hint: .length needs to be odd). If the length is odd, hiInTheMiddle should replace 
//the value in the middle index, no matter what it may be, with a “hi”. If the length 
//is even, return the array with no changes.

