'use strict'
// Please don't delete the 'use strict' line above

//1 Declare a function called pluck.

// Arguments

// ([object])
// (string): key
// Returns

// ([*]): an array of all the values found in the objects with a key 
//of the given key

// Your code here.

function pluck(arr,string){

    let newArr = [];

    for (const item of arr){
        newArr.push(item[string]);
    }
    console.log(newArr);
    return newArr;


}

const arrayOfObjects = [
    { a: 1, b: 2, c: 3 },
    { a: 4, b: 5, c: 6 },
    { a: 7, b: 8, c: 9 },
  ];
  
  test(pluck(arrayOfObjects, "a"), [1, 4, 7]);


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

