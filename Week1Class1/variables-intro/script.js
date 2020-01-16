'use strict'
// Please don't delete the 'use strict' line above
// WEEK 1 CLASS 1
const name = "Carlos";
let age = 10;
let currentTask = "Programming";
let isProgrammer = true;

//BASIC REQUIREMENTS
console.log(age, currentTask, isProgrammer);

//2
currentTask = 2;
console.log(currentTask);

//3 Compute some basic geometry. You may need to use Google to remember the formulas.
// Compute and store the area of a square
const squareSideLength = 2;
// Your code here.
let squareArea = squareSideLength * squareSideLength;
console.log("Square Area is " + squareArea);

// Compute and store the area of a rectangle
const rectangleBaseLength = 3;
const rectangleHeightLength = 4;
// Your code here.
let rectangleArea = rectangleBaseLength * rectangleHeightLength;

console.log("Rectagle Area is " + rectangleArea); // should print "12"

// Compute and store the area of a triangle
const triangleBaseLength = 4;
const triangleHeightLength = 5;
// Your code here.
let triangleArea = (triangleBaseLength * triangleHeightLength) / 2;

console.log("Triangle Area is " + triangleArea); // should print "10"

//MEDIUM REQUIREMENTS
// Compute and store the circumference and area of a circle
const circleDiameter = 10;
// Your code here.

let circleCircumference = 2 * Math.PI * (circleDiameter/2);

let circleArea = Math.PI * ((circleDiameter/2)**2)

console.log("Circle Circunference is " + circleCircumference); // should print something close to "31.41592653589793"
console.log("Circle Area is " + circleArea); // should print something close to "78.53981633974483"


// MEDIUM REQUIREMENTS 2
let a = "B";
let b = "A";

let c = "A";

a = c;

c = "B";

b = c;

console.log(a); // should print "A"
console.log(b); // should print "B"

//MEDIUM REQUIREMENTS 3
let value = 1;

// you do something to value
value = value**2

console.log(value); // should print "1"

// you do something to value
value++;
console.log(value); // should print "2"

// you do something to value
value = value *2;
console.log(value); // should print "4"

// you do something to value
value = value *2;
console.log(value); // should print "8"

// you do something to value
value = value *2;
console.log(value); // should print "16"

// you do something to value
value = value * 2;
console.log(value); // should print "32"

// you do something to value
value = value * 2;
console.log(value); // should print "64"

// MEDIUM REQUIREMENTS 4
const firstName = 'Carlos';
const lastName = 'Salazar'
const city = 'Monterrey';

console.log("Hello, my name is " + firstName + " " + lastName + ". I live in " + city + '.'); // should print something like "Hello, my name is Yan Fan. I live in Tokyo."


//ADVANCED REQUIREMENTS
// hint: you may need to do something here
let n = 1;
function counter() {
    // your code here
    console.log(n);
    n++;
  }
  
  counter(); // => 1
  counter(); // => 2
  counter(); // => 3
  // etc.

//Advanced Requirements 2
function isOdd(givenNumber) {
    // your code here
    if (givenNumber % 2 === 0) {
        console.log("No, it's even");
    }else{
        console.log("Yes, it's odd");
    }
    // should print "Yes, it's odd" or "No, it's even", depending on the given number.
  }

  console.log(isOdd(10));

  console.log("The End");

  // END OF WEEK 1 CLASS 1