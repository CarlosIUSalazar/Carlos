'use strict'
// Please don't delete the 'use strict' line above

// Paired Activity
// Which of the lines below are methods?

const body = document.body;
const divElement = document.createElement("div");
divElement.className = "heading-container";
divElement.innerText = "Hello World";
const username = window.prompt("What's your name?");
localStorage.setItem("username", username);
document.body.append(divElement);
window.prompt("Woohoo!");


// Don’t know what the code is doing? That’s ok! You can still identify all of the 
//methods even though you don’t what it’s doing.

// Exercises
// You are encouraged to write your own tests for these exercises.

// Basic Requirements
// For the following exercises, you will need to use this object.

const myMathObject = {
  sum: function(...args) {
    return args.reduce(arg => arg+=arg)
  },
  product: function() {},
  isEven: function() {},
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


// product returns the product of all inputs.

// isEven takes a number and returns true if even and false if odd