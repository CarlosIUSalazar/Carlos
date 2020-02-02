'use strict'
// Please don't delete the 'use strict' line above

// Rewrite the following code using for-loops.

// let index = 0;

// while (index <= 4) {
//   console.log("hello!");
//   index++;
// }

// for (let i = 0; i <= 4; i++){
//     console.log("hello!");
// }

// //2 Fix the JavaScript below:

// const array = ["a", "b", "c", "d", "e"];
// for (let i = 0; i < array.length; i++) {
//   console.log("Value: " + array[i], "Index " + i);
// }
// //Should result in:

// // Value: a Index: 0
// // Value: b Index: 1
// // Value: c Index: 2
// // Value: d Index: 3
// // Value: e Index: 4


// //3 Declare a function sayFourHellos. sayFourHellos uses a for-loop to print "Hello!" four times.

// //Test case:
// function sayFourHellos(){
//     for(let i = 0; i < 4; i++){
//         console.log("Hello!");
//     }
// }


// sayFourHellos();
// // "Hello!"
// // "Hello!"
// // "Hello!"
// // "Hello!"

// // for(let i = 0; i=4; i++){
// //     console.log("This will crash my browser")
// // } 


// // Declare a function called countDown that takes a start number 
// //and prints numbers counting down from the start to 0. Use a 
// //for-loop.

// function countDown(){

//     for(let i = 10; i >=0; i--){
//         console.log(i)
//     }

// }

// countDown(10);

// // Basic Requirements
// // Declare a function called sayHellos that takes a number n as an input and uses a 
// // for-loop to print "Hello!" n number of times.

// // Test case: thank I Thank I’ll 

// function sayHellos(n){
//     for(let i = 0; i < n; i++){
//         console.log("Hello!");
//     }
// }

// sayHellos(4);
// // "Hello!"
// // "Hello!"
// // "Hello!"
// // "Hello!"

// // 2 Declare a countToTen function that prints the numbers up to ten, each on a new line.

// // Hint: inside of the body of the for-loop, you will need to console.log your index!

// // Test case:

// function countToTen(){
//     for (let i = 0; i <= 10 ; i++){
//         console.log(i);
//     }
// }

// countToTen();
// // 1
// // 2
// // 3
// // 4
// // 5
// // 6
// // 7
// // 8
// // 9
// // 10

// // 3 Convert the while-loop inside the counter function into a for-loop. If you did 
// //this correctly, it will print the same values to the console in the same order.

// function counter(num) {
    
//     for(let i = 0; i < num; i++){
//         console.log(i);
//     }
//     // let i = 0;
//     // while (i < num) {
//     //   console.log(i);
//     //   i++;
//     // }
//   }


//   // 4 Declare a function printArray that takes an array as an input and prints every 
//   //item in the array to the console. Create an array variable with at least 5 items 
//   //in it to test your function.

//   let testArray = ["X","Y","Z"]
//   function printArray(array){
//       for(let i = 0; i < array.length; i++){
//           console.log(array[i])
//       }
//   }

//   printArray(testArray);

//   // 5 What happens if you invoke your printArray function with a string instead of an 
//   //array?
//   printArray("Cats");


// //   Medium Requirements
// // Declare a function createRange.

// // Arguments

// // (number): start
// // (number): end
// // Returns

// // ([number]): an array with all numbers between the start and the end number, inclusive.

// // Your code here

// function createRange(start,end){
//     let returnArray = [];

//     for(let i = start; i <= end; i++){
//         returnArray.push(i);
//     }
//     return returnArray;
// }

// test(createRange(4, 6), [4, 5, 6]);
// test(createRange(10, 16), [10, 11, 12, 13, 14, 15, 16]);



//   // 2 Convert the while-loop inside the printCars function into a for-loop. If you 
//   //did this correctly, it will print the same values to the console in the same order.

// function printCars() {
//     const cars = ["Toyota", "Mazda", "Mercedes", "BMW", "Hyundai", "Volvo"];
    
//     for (let i = 0; i < cars.length; i++){
//         console.log(cars[i]);
//     }
    
//     // let i = 0;    
//     // while (i < cars.length) {
//     //   console.log(cars[i]);
//     //   i++;
//     // }
//   }

// printCars();

// // 3 Convert the for loop below into a while loop. Make sure you understand why index 
// // equals (list.length - 1) originally. If you are confused, think about the difference 
// // between the last index of an array and the total length.

// // Hint: Note the order that the strings are printing. You will need to make sure they 
// // print in the same order.

// const commands = ["Print me last", "Print me second", "Print me first"];

// function decrement(list) {
// //   for (let i = list.length - 1; i >= 0; i--) {
// //     console.log(list[i]);
// //   }
// let index = 2;

// while(index >= 0){
//     console.log(list[index]);
//     index--;
// }


// }

// //Test case:

// decrement(commands);
// // 'Print me first'
// // 'Print me second'
// // 'Print me last'


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


//   // 4 Declare a function createRangeBySteps.

// // Arguments

// // (number): start
// // (number): end
// // (number): step
// // Returns

// // ([number]): an array with all numbers between the start and the end number, 
// // inclusive, but for every number of steps.

// // Your code here

// function createRangeBySteps(start,end,step){

//     let returnArray = [];

//     for (let i = start; i <= end; i += step){
//         returnArray.push(i)
//     }
//     console.log(returnArray);
//     return returnArray;
// }

// test(createRangeBySteps(1, 10, 2), [1, 3, 5, 7, 9]);
// test(createRangeBySteps(10, 30, 5), [10, 15, 20, 25, 30]);


// // 5 Declare a function addTogether that takes two arrays of numbers of equal length 
// // as inputs.

// // Arguments

// // ([number])
// // ([number])
// // Returns

// // ([number]): an array with the result of the sum of each corresponding numbers of 
// // the arrays

// // Your code here

// function addTogether(arr1,arr2){

//     let returnArray = [];

//     for (let i = 0; i < arr1.length; i++){
//         returnArray.push(arr1[i]+arr2[i]);
//     }
//     return returnArray;
// }


// test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
// test(addTogether([1, 2, 3], [7, 8, 9]), [8, 10, 12]);


// // 6 Modify the addTogether function above so that it can take arrays of different 
// // lengths. Use for-loops this time.
// function addTogetherModified(arr1,arr2){

//     let returnArray = [];

//     let longestArray = [];
//     let shortestArray = [];

//     if (arr1.length >= arr2.length){
//         longestArray = arr1;
//         shortestArray = arr2;
//     } else {
//         longestArray = arr2;
//         shortestArray = arr1;
//     }

//     // for (let i = 0; i <= arr1.length-1; i++){
//     //     for (let j = 0; j<= arr2.length-1; j++){
//     //         returnArray.push(arr1[i]+arr2[i]);
//     //     }
//     // }
    
//     for (let i = 0; i < shortestArray.length; i++){
        
//         longestArray[i] = (shortestArray[i] + longestArray[i])
        
//     }

//     return longestArray;
// }

// test(addTogetherModified([1], [4, 5, 6]), [5, 5, 6]);


// Advanced Requirements
// 1 Declare a function unique.
// that takes an array. unique should return an array of only the unique values 
// (e.g. values that do not have a duplicate).

// Arguments

// ([*])
// Returns

// ([*]): an array of only the unique values (e.g. values that do not appear more 
// than once)

// Your code here


function unique(array){

    let resultArray = [];
    let exists = false;

    let count = 0;
    let temp = array[0];

    for(let i = 0; i<array.length; i++){

        if (temp === array[i]){
            count++;
        }
        if (count === 1){
            resultArray.push(array[i])
        }
    }



    return resultArray;
}

test(unique([1, 1, 1, 1, 1]), []);
test(unique([1, 3, 4, 5, 2, 4]), [1, 3, 5, 2]);