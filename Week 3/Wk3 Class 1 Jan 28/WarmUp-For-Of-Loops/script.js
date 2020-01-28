'use strict'
// Please don't delete the 'use strict' line above

// 1 Declare a function getOddNumbers.

// Arguments

// ([number]): an array of numbers
// Returns

// ([number]): an array of all the odd numbers in the given array

function getOddNumbers(arr) {
    // Your code here.
    let newArr = [];

    for (let item of arr){
        if (item % 2 !== 0){
            newArr.push(item);
        }
    }

    return newArr;

  }
  
  let actual = getOddNumbers([1, 2, 3, 4, 5, 6, 7, 8]);
  let expected = [1, 3, 5, 7];
  
  // Remember, we need to use JSON.stringify to compare arrays (for now)
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests

