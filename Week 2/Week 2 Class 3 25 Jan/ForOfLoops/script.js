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

//// MEDIUM REQUIREMENTS
// Medium Requirements
// Declare a function isSorted.

// Arguments

// ([number])
// Returns

// (boolean): whether or not the given array is sorted

function isSorted(array) {
    // Your code here.

    let bool = '';
    let compare = array[0];

    for (const item of array){
        if (compare <= item) {
            bool = true;
//            compare = item;
        } else {
            bool = false;
            return bool;
        }
    }
    return bool;
  }
  
  actual = isSorted([1, 2, 3]);
  expected = true;
  
  if (actual === expected) {
    console.log("Yay! Medium 1 Test PASSED.");
  } else {
    console.error("Test Medium 1FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = isSorted([3, 2, 3]);
  expected = false;
  
  if (actual === expected) {
    console.log("Yay! Medium 2 Test PASSED.");
  } else {
    console.error("Test Medium 2 FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests
//2 Declare a function countOccurrences.

// Arguments

// ([*]): an array of elements
// (string|number|boolean): an element to count the occurrences of (this can be a string, number, or boolean)
// Returns

// (number): the number of occurances of the given element in the given array

function countOccurrences(array,element) {
    // Your code here.
    let count = 0;

    for (const item of array){
        if (item === element){
            count++;
        }
    }
    return count;
  }
  
  actual = countOccurrences([1, 2, 3], 2);
  expected = 1;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = countOccurrences([1, 2, 2], 2);
  expected = 2;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = countOccurrences([1, 2, "elephant"], "elephant");
  expected = 1;
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests

//3 Declare a function reverse. Don’t use the built-in reverse method.

// Arguments

// ([*])
// Returns

// ([*]): the given array, with the elements’ order reversed
function reverse(array) {
    // Your code here.
    let resultArr = [];

    for (const item of array){
        resultArr.unshift(item);
    }

    return resultArr;
  }
  
  const arrayToReverse = ["eeny", "meeny", "miny", "moe"];
  
  actual = reverse(arrayToReverse);
  expected = ["moe", "miny", "meeny", "eeny"];
  
  // Remember, we need to use JSON.stringify to compare arrays (for now)
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Mediu 2 Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Make sure the original array is not changed
  // Remember, we need to use JSON.stringify to compare arrays (for now)
  if (
    JSON.stringify(arrayToReverse) ===
    JSON.stringify(["eeny", "meeny", "miny", "moe"])
  ) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests
//4 Declare a function getOperatedArray.
// Arguments

// ([number])
// (string): an arithmetic operator to use
// (number): the operand to use
// Returns

// ([number]): a new array, whose elements have had the given arithmetic 
//operator applied with the given operand

function getOperatedArray(array,string,number) {
    // Your code here.
    let x = ''
    let newArr = [];
    for (const item of array){
        x = eval(item + string + number)  ///EVAL SHOULD NOT BE USED IS DANGEROUS
        newArr.push(x);
    }

    return newArr;

  }
  
  actual = getOperatedArray([1, 2, 3], "+", 5);
  expected = [6, 7, 8];
  
  // Remember, we need to use JSON.stringify to compare arrays (for now)
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = getOperatedArray([9, 6, 3], "/", 3);
  expected = [3, 2, 1];
  
  // Remember, we need to use JSON.stringify to compare arrays (for now)
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests



  /// ADVANCED REQUIREMENTS
//   These exercises might require techniques that have not been covered in class yet.

// Declare a function callADoctor. Be careful of singular and plural nouns. 
//I.e. My head hurts! vs. My shoulders hurt!.

// Arguments

// ([string]): an array of “things that hurt”
// Returns

// (string): what you should say when you meet the doctor


function callADoctor(array) {
    // Your code here.
    let sentence = '';
    let isItPlural = false;
    let pluralBool = false;

    // FIND OUT IF PLURAL
    let bodypartPluralArr = [];
    bodypartPluralArr = array[array.length-1].split('');
    //console.log(bodypartPluralArr);
    //console.log(bodypartPluralArr[bodypartPluralArr.length-1])
    if (bodypartPluralArr[bodypartPluralArr.length-1] === "s"){
        isItPlural = true;
    }

    //console.log(isItPlural)

    //For single bodyparts non plural
    if (isItPlural === false && array.length === 1){
        return `Doctor, doctor! My ${array[0]} hurts!`
    } 
    if (isItPlural === true && array.length === 1){
        return `Doctor, doctor! My ${array[0]} hurt!`
    } 


    //For more than one bodyparts plural
    for (let i = 0; i<= array.length - 1; i++){
        if (i === array.length -1 ){
            sentence += "and " + array[i];
        } else {
        sentence += (array[i] + ", ")
        }
    }
    console.log("sentence is ", sentence)



    //For more than 1 bodyparts
    if (isItPlural === false && array.length > 1){
        console.log(`Doctor, doctor! My ${array[0]} hurts!`);
        return `Doctor, doctor! My ${sentence} hurts!`
    } 

    if (isItPlural === true && array.length > 1){
        console.log(`Doctor, doctor! My ${array[0]} hurts!`);
        return `Doctor, doctor! My ${sentence} hurt!`
    } 

    console.log(sentence);

  }
  

  actual = callADoctor(["head"]);
  expected = "Doctor, doctor! My head hurts!";
  
  if (actual === expected) {
    console.log("Yay! Advanced Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = callADoctor(["shoulders"]);
  expected = "Doctor, doctor! My shoulders hurt!";
  
  if (actual === expected) {
    console.log("Yay! Advanced Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = callADoctor(["head", "shoulders", "knees", "toes"]);
  expected = "Doctor, doctor! My head, shoulders, knees, and toes hurt!";
  
  if (actual === expected) {
    console.log("Yay! Advanced Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests
  actual = callADoctor(["head", "shoulders", "knees", "nose"]);
  expected = "Doctor, doctor! My head, shoulders, knees, and nose hurts!";
  
  if (actual === expected) {
    console.log("Yay! Advanced Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }

///////////////////////////////////////////////////////
  /// 2 Declare a function deepCount.

// Arguments

// ([*])
// Returns

// (number): the number of “elements” in the given array. If an element is an 
// array, the result should count the “elements” in that array
//debugger;
function deepCount(array) {
    // Your code here.
// let counter = 0;

    // for (let i = 0; i< array.length; i++){
    //     if (Array.isArray(array[i]) === true){
    //         console.log("Yes it is array")
    //         counter += array[i].length;
    //     } else {
    //         counter++;
    //     }
    // }

    // return counter;

    let newArr = array.flat(Infinity); //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat
    return newArr.length;
    

  }
  
  actual = deepCount([1]);
  expected = 1;
  
  if (actual === expected) {
    console.log("Yay! Advanced 2 Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = deepCount([1, 3]);
  expected = 2;
  
  if (actual === expected) {
    console.log("Yay! Advanced 2 Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = deepCount([1, 3, [2, 4]]);
  expected = 4;
  
  if (actual === expected) {
    console.log("Yay! Advanced 2 Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = deepCount(["a", "b", ["c", ["d", "e", ["f"]]]]);
  expected = 6;
  
  if (actual === expected) {
    console.log("Yay! Advanced 2 Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }

  // Write more tests