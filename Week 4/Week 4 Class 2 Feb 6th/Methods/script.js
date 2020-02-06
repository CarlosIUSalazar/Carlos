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