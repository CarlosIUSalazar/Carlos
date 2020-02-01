'use strict'
// Please don't delete the 'use strict' line above

// // #1
// function greeting() {
//     console.log("Hello!");
//   } 

//   // No return
//   // Side effect is console log
//   // 

// //2
//   let triple = function(x) {
//     return 3 * x;
//   };

//   //Yey return
//   // No side effect


//   // #3
// let double = function(x) {
//     console.log(2 * x);
//   };

  //No return
  // Yay Side Effect


  //// #4
// const cache = [];

// function average(array) {
//   let result = 0;
//   for (const number of array) {
//     result = result + number;
//   }
//   result = result/array.length;

//   cache.push(result);
//   return result;
// }

// Has both SE and Return

// #5
// function sayHello(friend) {
//     const languages = ['Hello', 'Konnichiwa', 'Hola', 'Nihao'];
//     const randomIndex = Math.round(Math.random() * languages.length-1));
//     const randomGreeting = languages[randomIndex];
//     console.log(randomGreeting + ' ' + friend + '!');
//   }

///Side effect no return


//2 Run the code below in your Chrome console. Try to explain it line by line. What is happening?

// function greeting() {
//     console.log("Hello!");
//   }
  
//   function runSomething(func) {
//     func();
//   }
  
//   runSomething(greeting);


  // 3 Why does the code below NOT work?

//runSomething(greeting());
// Hint: What value does the greeting function return?
// Hint: What does runSomething do?


// Basic Requirements
// Below is the function returnAll.

// function returnAll(value) {
//   return value;
// }

// 1 Write returnAll as a function expression rather than a function declaration.

const returnAll = function(value){
    return value;
}

// 2 What typeof are the following outputs when invoking returnAll?


// Example
console.log(typeof returnAll(false)); // boolean

console.log(typeof returnAll(5)); // number
console.log(typeof returnAll("5")); // string
console.log(typeof returnAll([])); // object
console.log(typeof returnAll({ a: 1 })); // object

function foo() {
  return "hi";
}

console.log(typeof returnAll(foo)); // function
console.log(typeof returnAll(foo())); // string


// 3What is the difference between doing console.log(returnAll(foo)) 
//and console.log(returnAll(foo()))?
console.log(returnAll(foo));
console.log(returnAll(foo()));


// Medium Requirements
// Declare a function doSomething.

// Arguments

// (function)
// (number)
// Returns

// (*): The return value of invoking the given function with the given argument.

// Your code here

function doSomething(func1,number){
    return func1(number);
}

function addTen(number) {

    return number + 10;


}

test(doSomething(addTen, 6), 16);
test(doSomething(addTen, -100), -90);



// 2 Anonymous functions are functions that have no names. So far, all of the functions that we have written have names like outer, addTen, doSomething, etc. We can also pass anonymous functions to doSomething. The below should work for your doSomething function.

test(
    doSomething(function(num) {
      return num * 4;
    }, 2),
    8
  );











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