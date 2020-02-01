'use strict'
// Please don't delete the 'use strict' line above

// Rewrite the following code using for-loops.

let index = 0;

while (index <= 4) {
  console.log("hello!");
  index++;
}

for (let i = 0; i <= 4; i++){
    console.log("hello!");
}

//2 Fix the JavaScript below:

const array = ["a", "b", "c", "d", "e"];
for (let i = 0; i < array.length; i++) {
  console.log("Value: " + array[i], "Index " + i);
}
//Should result in:

// Value: a Index: 0
// Value: b Index: 1
// Value: c Index: 2
// Value: d Index: 3
// Value: e Index: 4


//3 Declare a function sayFourHellos. sayFourHellos uses a for-loop to print "Hello!" four times.

//Test case:
function sayFourHellos(){
    for(let i = 0; i < 4; i++){
        console.log("Hello!");
    }
}


sayFourHellos();
// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"

// for(let i = 0; i=4; i++){
//     console.log("This will crash my browser")
// } 


// Declare a function called countDown that takes a start number 
//and prints numbers counting down from the start to 0. Use a 
//for-loop.

function countDown(){

    for(let i = 10; i >=0; i--){
        console.log(i)
    }

}

countDown(10);

// Basic Requirements
// Declare a function called sayHellos that takes a number n as an input and uses a 
// for-loop to print "Hello!" n number of times.

// Test case: thank I Thank I’ll 

function sayHellos(n){
    for(let i = 0; i < n; i++){
        console.log("Hello!");
    }
}

sayHellos(4);
// "Hello!"
// "Hello!"
// "Hello!"
// "Hello!"

// 2 Declare a countToTen function that prints the numbers up to ten, each on a new line.

// Hint: inside of the body of the for-loop, you will need to console.log your index!

// Test case:

function countToTen(){
    for (let i = 0; i <= 10 ; i++){
        console.log(i);
    }
}

countToTen();
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 10

// 3 Convert the while-loop inside the counter function into a for-loop. If you did 
//this correctly, it will print the same values to the console in the same order.

function counter(num) {
    
    for(let i = 0; i < num; i++){
        console.log(i);
    }
    // let i = 0;
    // while (i < num) {
    //   console.log(i);
    //   i++;
    // }
  }


  // 4 Declare a function printArray that takes an array as an input and prints every 
  //item in the array to the console. Create an array variable with at least 5 items 
  //in it to test your function.

  let testArray = ["X","Y","Z"]
  function printArray(array){
      for(let i = 0; i < array.length; i++){
          console.log(array[i])
      }
  }

  printArray(testArray);

  // 5 What happens if you invoke your printArray function with a string instead of an 
  //array?
  printArray("Cats");


//   Medium Requirements
// Declare a function createRange.

// Arguments

// (number): start
// (number): end
// Returns

// ([number]): an array with all numbers between the start and the end number, inclusive.

// Your code here

function createRange(start,end){
    let returnArray = [];

    for(let i = start; i < end; i++){
        returnArray.push[i];
    }
    return returnArray;
}

test(createRange(4, 6), [4, 5, 6]);
test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);







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