'use strict'
// Please don't delete the 'use strict' line above

// Paired Activity
// Which of the lines below are methods?

const body = document.body;
const divElement = document.createElement("div");
divElement.className = "heading-container";
divElement.innerText = "Hello World";
//const username = window.prompt("What's your name?");
//localStorage.setItem("username", username);
//document.body.append(divElement);
//window.prompt("Woohoo!");


// Don’t know what the code is doing? That’s ok! You can still identify all of the 
//methods even though you don’t what it’s doing.

// Exercises
// You are encouraged to write your own tests for these exercises.

// Basic Requirements
// For the following exercises, you will need to use this object.

const myMathObject = {
    sum: function (...args) {
        let result = 0;

        for (let item of args) {
            result += item;
        }

        console.log(args)
        console.log(result);
        return result;
    },

    product: function (...args) { 
        let result = 1;

        for (let item of args){
            result = result * item;
        }
        console.log(args)
        console.log(result);
        return result;

    },

    isEven: function (...args) {
        let result = false;

        if (args[0] % 2 === 0){
            result = true;
        }
        console.log(args)
        return result;

     },

     getNumbers: function (...args){

        let returnArray = [];

        for (let item of args){
            if (typeof(item) === "number")
            returnArray.push(item);
        }

        console.log(returnArray)
        return returnArray;

     },

     abs: function (number){

        let returnValue = 0;

         if (number > 0){
             return number
         } else if (number < 0){

            returnValue = -number;
            console.log("number ",number);
            console.log("returnValue", returnValue);
            return returnValue;
         
        }
         return returnValue;
     },

     power: function(base,exponent){

        let result = 1;

        result = base**exponent;

        return result;
     }

    

};


// For the following exercises, you will need to know about rest parameters. Google it.
// The rest of the parameters can be included in the function definition by using 
// three dots ... followed by the name of the array that will contain them. The dots 
// literally mean “gather the remaining parameters into an array”.
// For instance, to gather all arguments into array args:   function sumAll(...args)  args is the name of the array


// In the above object, fill in the methods:

// sum returns the sum of all inputs
// Here are some example tests. You should write your own for the other exercises.
test(myMathObject.sum(1), 1);
test(myMathObject.sum(1, 2, 3), 6);
test(myMathObject.sum(19283,18475,199999), 237757);


// product returns the product of all inputs.

test(myMathObject.product(2, 5), 10);
test(myMathObject.product(10, 2, 3), 60);
test(myMathObject.product(19283,18475,199999), 71250328746575);


// isEven takes a number and returns true if even and false if odd

test(myMathObject.isEven(1), false);
test(myMathObject.isEven(2), true);
test(myMathObject.isEven(19), false);



// 3 In the above object, create a method called getNumbers.

// Arguments

// (…*): an arbitrary number of arguments
// Returns

// ([number]): all of the given arguments that are numbers

test(myMathObject.getNumbers(1, 2, 3, 4), [1, 2, 3, 4]);
test(myMathObject.getNumbers("foo", 3, "4", "hi", 1), [3, 1]);




// Medium Requirements
// Add a method abs to myMathObject. You should not use any built-in Math methods.

// Arguments

// (number)
// Returns

// (number): the absolute value of the given number;

test(myMathObject.abs(1), 1);
test(myMathObject.abs(-1), 1);
test(myMathObject.abs(435678.745389), 435678.745389);
test(myMathObject.abs(-675843.753489), 675843.753489);



// 2 Add a method power to myMathObject. You should not use the built-in Math.pow(), 
// except for testing.

// Arguments

// (number): base
// (number): exponent
// Returns

// (number): the result of raising the given base to the given exponent

const MIN_BASE = -5;
const MAX_BASE = 5;
const MIN_EXPONENT = -5;
const MAX_EXPONENT = 5;

// Run many tests with few lines of code.
// This test uses extra code for floating-point number comparison
for (let base = MIN_BASE; base <= MAX_BASE; ++base) {
  for (let exponent = MIN_EXPONENT; exponent <= MAX_EXPONENT; ++exponent) {
    const actual = myMathObject.power(base, exponent);
    const expected = Math.pow(base, exponent);
    if (isNearlyEqual(actual, expected)) {
      console.log("Yay! Test PASSED.");
    } else {
      console.error("Test FAILED. Keep trying!");
      console.log("    actual: ", actual);
      console.log("  expected: ", expected);
      console.trace();
    }
  }
}

// Credit: adapted from https://floating-point-gui.de/errors/comparison/
function isNearlyEqual(a, b) {
  const absA = Math.abs(a);
  const absB = Math.abs(b);
  const diff = Math.abs(a - b);

  if (a == b) {
    return true;
  } else if (a == 0 || b == 0 || absA + absB < Number.MIN_VALUE) {
    return diff < Number.EPSILON * Number.MIN_VALUE;
  } else {
    return diff / Math.min(absA + absB, Number.MAX_VALUE) < Number.EPSILON;
  }
}


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



