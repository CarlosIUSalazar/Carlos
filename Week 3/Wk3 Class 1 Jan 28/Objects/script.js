'use strict'
// Please don't delete the 'use strict' line above


//Basic Requirements
// Declare an object called myInfo. Add the following keys: name, age, 
//location, and isCoder. Set the value for isCoder to true and set 
//everything else to your information.

// Test case:

// Your code here

// This exercise does NOT need any TDD-style tests. Please use 
//console.logs for this one.

const myInfo = {
    name: 'Carlos',
    age: 25,
    location: 'Japan',
    isCoder: 'True'
}

console.log(myInfo["isCoder"]); // => "true"

//2 Morse code was used to send messages through a series of dots and 
//dashes before telephones existed.

//The array below spells out the word "tar" using morse code.

//Convert the array below into an object called "morseCode". Use the 
//letters of the word as the keys.

//const tar = ["-", ".-", ".-."];

// Your code here

const morseCode = {
    t: '-',
    a: '.-',
    r: '.-.'
}

///
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
///

test(morseCode["t"], "-");
test(morseCode["a"], ".-");
test(morseCode["r"], ".-.");


//3  Now, turn "tar" into "art"! Declare a function called morseCodeArt.

// Arguments

// (string): the word to convert to morse code
// Returns

// (string): the given word’s corresponding morse code. 
//There should be a space between each letter’s code

function morseCodeArt(string) {
  // Your code here.
  const morseCode = {
    t: '-',
    a: '.-',
    r: '.-.'
}

    let newArr = string.split('');
    let resultString = '';
    console.log("newArr",newArr);

    if (newArr.length > 1){
    for (const item of newArr){
        resultString += morseCode[item] + ' ';
    }
    } else {
        for (const item of newArr){
            resultString += morseCode[item];
        }
    }

    return resultString;
}


///
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
///
test(morseCodeArt("a"), ".-");
test(morseCodeArt("r"), ".-.");
test(morseCodeArt("t"), "-");
test(morseCodeArt("art"), ".- .-. -");


// 4 Declare a function select.

// Hint: You might want to use one of the recently learned patterns 
// for this one.

// Arguments

// (object): an object
// ([string]): an array of strings
// Returns

// (object): a new object that contains a key for each string in the 
// given array. The values of each key are from the given object.

// Your code here.

///
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
///
test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
test(select({ a: 1, b: 2, c: 3 }, []), {});