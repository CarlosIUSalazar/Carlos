'use strict'
// Please don't delete the 'use strict' line above

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


  // 1 Declare a function called sayHelloToFriends.

// Arguments

// ([string]): names of friends
// Returns

// ([string]): an array with a greeting of "Hello" to each of the given friends

// Your code here

function sayHelloToFriends(array){

    let returnArray = [];
    for(let i = 0; i < array.length; i++){
        returnArray.push("Hello, " + array[i] +"!");
    }
    console.table(returnArray)
    return returnArray;
}

const friends = ["Mario", "Luigi"];
test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);