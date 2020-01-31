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


  //Basic Requirements
//The exercises below require the use of this object:

// const hellos = {
//   English: "Hello",
//   Japanese: "Konnichiwa",
//   German: "Hallo",
//   Spanish: "Hola",
//   Arabic: "Ahlan wa sahlan",
//   Chinese: "Nihao",
// };


// Declare a function sayHellos that prints "Hello" in every language 
//when invoked.

// Arguments

// None

// Returns

// (undefined): this function has no meaningful return value. It only 
//console.logs "Hello" in every available language.

// Your code here
// function sayHellos(){

//     for (const greeting in hellos){
//         console.log(hellos[greeting]);
//     }

// }

// // Since console.log is a SIDE EFFECT, it's difficult to test.
// // In this case, just look at the console.
// sayHellos();
// 'Hello'
// 'Konnichiwa'
// 'Hallo'
// 'Hola'
// ...


///2 Declare a function getKeys.

// Arguments

// (object)
// Returns

// ([string]): An array of all the keys in the given object

// Your code here

// function getKeys(object){

//     let resultArray = [];

//     for (const mew in object){

//         resultArray.push(mew)
//     }
//     //console.log(resultArray)
//     return resultArray;
// }

// const object1 = { a: 1, b: 2, c: "hello" };
// const object2 = { 1: "a", 2: "b", hello: "c" };

// test(getKeys(object1), ["a", "b", "c"]);
// test(getKeys(object2), ["1", "2", "hello"]);




//3 Declare a function getValues.

// Arguments

// (object)
// Returns

// ([string]): An array of all the values in the given 
// object

// Your code here
// function getValues(object){

//     let iCantThinkOfaNameArray = [];

//     for (const jolteon in object){

//         iCantThinkOfaNameArray.push(object[jolteon]);

//     }

//     console.log(iCantThinkOfaNameArray);
//     return iCantThinkOfaNameArray;

// }

// test(getValues(object1), [1, 2, "hello"]);
// test(getValues(object2), ["a", "b", "c"]);


//printAll should print out all of the values in a given 
//object. But the code below isn’t working. What’s wrong? 
//Please fix.

// const myObj = { foo: 1, bar: 2, key: 3, delta: 4, lee: 5 };
// function printAll(object) {
//   for (let snorlax in object) {
//     console.log(object[snorlax]);
//   }
// }
// printAll(myObj);


//5 Declare a function swapPairs

// Arguments

// (object): The given object. Assume that all values are different.
// Returns

// (object): A new object with the given object’s values as keys, and 
// keys as values.

// Your code here

// function swapPairs(object){

//     let swappedVersion = {};

//     for (const gengar in object){

//         swappedVersion[object[gengar]] = gengar; 

//     }

//     console.log(swappedVersion);
//     return swappedVersion;
// }

// const object3 = { a: 1, b: 2, c: 3, d: 4 };
// const object4 = { 1: "a", 2: "b", 3: "c", 4: "d" };

// test(swapPairs(object3), { 1: "a", 2: "b", 3: "c", 4: "d" });
// test(swapPairs(object4), { a: "1", b: "2", c: "3", d: "4" });

// let array = [1,2,3];

// for (const eevy in array){
//     console.log(eevy);
// }

let object = {
    1:"a",
    2:"b",
    3:"c"
}

for (const charizzard of object){
    console.log(charizzard);
}