'use strict'
// Please don't delete the 'use strict' line above



const colors = ["red","green","blue"];
console.log(colors);

for (const color of colors) {
    console.log(color);
}


//FOR OF LOOPS
// Basic Requirements
// Don’t forget to put the declarations of expected and actual at the top of your file.

// Declare a function sumArray.

// Arguments

// ([number]): the numbers to add together.
// NOTE: [number] means an array of numbers.

// Returns

// (number): all of the numbers in the given array, added together.

function sumArray(array) {
    // Your code here.
    let total = 0;
    for (const item of array){
        total += item;
    }
    return total;
  }
  
  let actual = sumArray([1, 2, 3, 4]);
  let expected = 10;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests
//2 Declare a function productArray.

// Arguments

// ([number]): the numbers to multiply together.
// Returns

// (number): all of the numbers in the given array, multiplied together.

function productArray(array) {
    // Your code here.
    let total = 1;
    for (const item of array){
        total *= item;
    }
    return total;
  }
  
  actual = productArray([1, 2, 3, 4]);
  expected = 24;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests

  //3 Declare a function hasFun.

// Arguments

// ([*])
// Returns

// (boolean): whether or not the given array has the string “fun” in it.

function hasFun(array) {
    // Your code here.

    let bool = false;

    for (const item of array){
        if (item === "fun"){
            bool = true;
        }
    }

    return bool;

  }
  
  actual = hasFun(["whatever", 2, false, "fun", "hello"]);
  expected = true;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = hasFun(["whatever", 2, false, "run", "hello"]);
  expected = false;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests
  // 4 Declare a function containsOnlyBooleans.

// Arguments

// ([*])
// Returns

// (boolean): whether or not the given array contains only booleans.

function containsOnlyBooleans(array) {
    // Your code here.
    let bool = true;

    for (const item of array){
        if (item !== true && item !== false){
            bool = false;
        }
    }
    return bool;
  }
  
  actual = containsOnlyBooleans([true, false, true, false, false]);
  expected = true;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = containsOnlyBooleans([true, true, true, "not a boolean"]);
  expected = false;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests

  /// 5 Declare a function concatenate. Don’t use the built-in concat method.

// Arguments

// ([*]): the first array
// ([*]): the second array
// Returns

// ([*]): the two given arrays, concatenated together.
function concatenate(arr1,arr2) {
    // Your code here.

    for (const item of arr2){
        arr1.push(item);
    }
    return arr1;

  }
  
  actual = concatenate(["eeny", "meeny"], ["miny", "moe"]);
  expected = ["eeny", "meeny", "miny", "moe"];
  
  // Remember, we need to use JSON.stringify to compare arrays (for now)
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests
// 6 Declare a function getEvenNumbers.

// Arguments

// ([number]): an array of numbers
// Returns

// ([number]): an array of all the even numbers in the given array
function getEvenNumbers(array) {
    // Your code here.
    let newArr = [];

    for (const item of array){
        if (item % 2 === 0){
            newArr.push(item);
        }
    }

    return newArr;
  }


  
  actual = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
  expected = [2, 4, 6, 8];
  
  // Remember, we need to use JSON.stringify to compare arrays (for now)
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests

  /// 7 Declare a function getMultipliedArray.

// Arguments

// ([number]): an array of numbers
// (number): a number to multiply all the elements by
// Returns

// ([number]): a new array with elements that have been multiplied by the 
//given number

function getMultipliedArray(array, number) {
    // Your code here.
    let newArr = [];

    for (const item of array){
        newArr.push(item * number);
    }

    return newArr;


  }
  
  actual = getMultipliedArray([1, 2, 3], 6);
  expected = [6, 12, 18];
  
  // Remember, we need to use JSON.stringify to compare arrays (for now)
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests






