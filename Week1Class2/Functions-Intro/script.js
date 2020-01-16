'use strict'
// Please don't delete the 'use strict' line above

5 + 6;
console.log(6 + 6);

// 1 Use the function below to return the sum of two numbers. Enter the following code in your script.js file:

function add(numOne, numTwo) {
    return numOne + numTwo;
  }
  
  // Tests
  console.log(add(4, 3)); // should return 7
  console.log(add(100, 42)); // => 142


  // 2 For the above function, what happens if you give only one input? What happens if you give more than the specified number of inputs?
console.log(add(100)); // What happens? //NaN
console.log(add(1, 4, 5)); // What happens? //5

// 3  What do you think gets printed when you run the following code? Try to predict what happens and then see if you can figure out why. The extra sentence that we are printing out in the two console.log statements at the end will help you figure out what is happening where. Scroll to the explanation below to find the answer.
function simpleFunctionA() {
    return "Hello simple function A";
  }
  
  function simpleFunctionB() {
    console.log("Hello simple function B");
  }
  
  console.log(simpleFunctionA(), "--> From running Simple Function A");
  console.log(simpleFunctionB(), "--> From running Simple Function B");

  // 4 Declare a function named subtract that subtracts the second argument from the first argument. Remember to try the test cases to see if your function works.

  function subtract(num1, num2) {
    // your code here
    return num1 - num2;
  }

// Test cases
console.log(subtract(4, 3)); // => 1
console.log(subtract(100, 42)); // => 58

// 5 Declare a function named greeting that takes a name string as an argument and returns a hello!
// Your code here
function greeting(name){
    return "Hello " + name;
}

console.log(greeting("Alex")); // => "Hello, Alex!"
console.log(greeting("Beau")); // => "Hello, Beau!"


// 6 Declare a function called average that takes two numbers as inputs and returns the average of those numbers. This time, write two tests for you
function average(num1,num2){
    return (num1 + num2)/2;
}

console.log(average(4,8));
// 7 What is wrong with the following functions?

function square(x) {
    return x * x;
  }

  function square(x) {
    return "x" * "x";
  }

 // This one works, but what’s a better way to write it?
 function Square(monkey) {
    return monkey * monkey;
  }


  // 8 Write a function called cube that returns the cube of x:
  function cube(x) {
    return x**3;

  }

console.log("the cube of 2 is " + cube(2))

// Why are we printing an undefined in the below code?  //Missing the return keyword

function simpleFunctionA() {
    return "Hello simple function A";
  }
  
  function simpleFunctionB() {
    console.log("Hello simple function B");
  }
  
  console.log(simpleFunctionA(), "--> From running Simple Function A");
  console.log(simpleFunctionB(), "--> From running Simple Function B");

  //Medium Requirements
// 1 If we run the following code, what will get printed? Why?
function simpleHelloA() {
    console.log("hello");
  }
  
  function simpleHelloB() {
    return "hello";
  }
  
  const a = simpleHelloA();
  const b = simpleHelloB();
  console.log("a and b are ", a, b);

  // 2 Invoke the function below three times and assign each return value to a variable so that your test cases return what you expect. How is this working?
  function createGreeting(greetingPhrase, instructorName) {
    return greetingPhrase + ", " + instructorName + "!";
  }
  
let morningGreeting = createGreeting("Good Morning", "Mike!")
let dayGreeting = createGreeting("Hello", "Beau!")
let eveningGreeting = createGreeting("Good Evening", "Alex!")


  console.log(morningGreeting); // should print 'Good morning, Mike!'
  console.log(dayGreeting); // should print 'Hello, Beau!'
  console.log(eveningGreeting); // should print 'Good evening, Alex!'


//3 Translate the geometric formulas found in this pdf into functions.
function squareArea(s){
    return s**2;
}

function squarePerimeter(s){
    return s*4;
}

function rectangleArea(l,w){
    return l*w;
}

function rectanglePerimeter(l,w){
    return (2*l) + (2*w);
}

function parallelogramArea(l,h){
    return l * h;
}

function parallelogramPerimeter(l,w){
    return (2*l) + (2*w);
}

function trapezoidArea(h,b1,b2){
    return (h/2)*(b1+b2);
}

function trapezoidPerimeter(s1,s2,b1,b2){
    return s1 + s2 + b1 + b2;
}

function triangleArea(b,h){
    return (b*h)/2;
}

function trianglePerimeter(s1,s2,b){
    return s1+s2+b;
}

function circleArea(r){
    return Math.PI*(r**2);
}

function circlePerimeter(r){
    return Math.PI * 2 * r;
}

// ADVANCED REQUIREMENTS
// 1 Create a new file in the functions-intro folder called advanced.js. Figure out how to modify the index.html in functions-intro so that it will use both script.js and advanced.js. Add the following code in your new file. How is it showing up in the console? Look at the code for index.html. How are the .js files linking?
//Done!


// 2 Below is some example code for guessMyNumber and randomNumber. Please read and test both functions in your console.
  
let upperBound = 6;
function randomNumber(n) {
    return Math.floor(Math.random() * (n + 1));
  }


function guessMyNumber(n) {

    let result = randomNumber(n)
    console.log("result is " + result)
    if (n > upperBound) {
      return "Please try a number between 0 and 5.";
    } else if (n === result) {
      return "You guessed my number!";
    }
    return "Nope! The correct number was: " + result;
  }


console.log("Guess my Number is "+ guessMyNumber(3));

let randomNumberResult = randomNumber(upperBound);

console.log("Random Number is " + randomNumberResult)

  // The above code requires the guess to be between 0 and 5.
// We can think of 5 as the upper bound of the guess.
// Please think over the following questions (preferably with a peer):

// What if we wanted to change the upper bound to 6?
// How many changes would be required?
//You need to change the value of n to 6

// 3 Declare a variable called upperBound to hold the upper bound, and then reference it instead of the number 5. If you were asked to change the upper bound to some other number (e.g. 7), you should only have to make one change.


// 4 Modify guessMyNumber so that if the guess is incorrect, guessMyNumber includes the correct guess in its output, e.g. "Nope! The correct number was: x" (where x would have been the correct number).
