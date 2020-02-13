'use strict'
// Please don't delete the 'use strict' line above

// Basic Requirements
// 1 Some of these functions are review, but we want you to get practice seeing how to use them with Array.filter.

// Declare a function isMultipleOfTen. This function should not call .filter. Instead, it will be used by .filter in the tests. You probably don’t need to use an arrow function for this.

// Arguments

// (number)
// Returns

// (boolean): whether or not the given number is a multiple of ten

// Your code here
const arrayOfNumbers = [2, 4, 6, 8, 10, 15, 20, 30, 66, 89, 100];

function isMultipleOfTen(num){

    return num % 10 === 0

}





test(arrayOfNumbers.filter(isMultipleOfTen), [10, 20, 30, 100]);
test(arrayOfNumbers.slice(6).filter(isMultipleOfTen), [20, 30, 100]);



// 2 Declare a function hasAVowel. This function should not call .filter. Instead, it will be used by .filter in the tests. You probably don’t need to use an arrow function for this.

// Arguments

// (string)
// Returns

// (boolean): whether or not the given string has at least one vowel (a, e, i, o, u)

// Your code here


function hasAVowel(word){
    
    for (let element of word){
        if (element === "a" 
        || element === "e" 
        || element === "i" 
        || element === "o" 
        || element === "u"){
           return true;
        } 
    }
}


const arrayOfStrings1 = ["bat", "ball", "tree", "cow", "bnm"];
const arrayOfStrings2 = ["bhg", "waa", "cvb"];

test(arrayOfStrings1.filter(hasAVowel), ["bat", "ball", "tree", "cow"]);
test(arrayOfStrings2.filter(hasAVowel), ["waa"]);





  // 3 Declare a function getPositiveNumbers. This function should call .filter. You should use an arrow function for this. The arrow function will be used within getPositiveNumbers.

// Arguments

// ([number])
// Returns

// ([number]): an array of all the given numbers that are positive

// Your code here

function getPositiveNumbers(array){

    let returnArray = array.filter(element => element > 0);

    return returnArray;

}


test(getPositiveNumbers([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
test(getPositiveNumbers([1, -2, 3, -4, 5]), [1, 3, 5]);
test(getPositiveNumbers([-2, -4]), []);






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
