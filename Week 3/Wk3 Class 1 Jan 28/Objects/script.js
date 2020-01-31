'use strict'
// Please don't delete the 'use strict' line above


// //Basic Requirements
// // Declare an object called myInfo. Add the following keys: name, age, 
// //location, and isCoder. Set the value for isCoder to true and set 
// //everything else to your information.

// // Test case:

// // Your code here

// // This exercise does NOT need any TDD-style tests. Please use 
// //console.logs for this one.

// const myInfo = {
//     name: 'Carlos',
//     age: 25,
//     location: 'Japan',
//     isCoder: 'True'
// }

// console.log(myInfo["isCoder"]); // => "true"

// //2 Morse code was used to send messages through a series of dots and 
// //dashes before telephones existed.

// //The array below spells out the word "tar" using morse code.

// //Convert the array below into an object called "morseCode". Use the 
// //letters of the word as the keys.

// //const tar = ["-", ".-", ".-."];

// // Your code here

// const morseCode = {
//     t: '-',
//     a: '.-',
//     r: '.-.'
// }

// ///
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

// test(morseCode["t"], "-");
// test(morseCode["a"], ".-");
// test(morseCode["r"], ".-.");


// //3  Now, turn "tar" into "art"! Declare a function called morseCodeArt.

// // Arguments

// // (string): the word to convert to morse code
// // Returns

// // (string): the given word’s corresponding morse code. 
// //There should be a space between each letter’s code

// function morseCodeArt(string) {
//   // Your code here.
//   const morseCode = {
//     t: '-',
//     a: '.-',
//     r: '.-.'
// }

//     let newArr = string.split('');
//     let resultString = '';
//     //console.log("newArr",newArr);

//     if (newArr.length > 1){
//     for (const item of newArr){
//         resultString += morseCode[item] + ' ';
//     }
//     let resultNewString = resultString.split('');
    
//     //console.log(resultNewString);

//     resultNewString.pop();
//     //console.log(resultNewString);

//     let finalresultNewString =resultNewString.join('');
//     //console.log(resultNewString);

//     return finalresultNewString;

//     } else {
//         for (const item of newArr){
//             resultString += morseCode[item];
//         }
//     }

//     return resultString;
// }


// ///
// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("Yay! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Keep trying!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }
// ///
// test(morseCodeArt("a"), ".-");
// test(morseCodeArt("r"), ".-.");
// test(morseCodeArt("t"), "-");
// test(morseCodeArt("art"), ".- .-. -");


// // 4 Declare a function select.

// // Hint: You might want to use one of the recently learned patterns 
// // for this one.

// // Arguments

// // (object): an object
// // ([string]): an array of strings
// // Returns

// // (object): a new object that contains a key for each string in the 
// // given array. The values of each key are from the given object.

// // Your code here.
// //debugger;
// function select(object,arr){

//     let newObj = {};

//     if (arr.length === 0){
//         return newObj;
//     } else {

//         for (const item of arr){
//             newObj[item] = object[item]; 

//         }
//         return newObj;
//     }

// }

// ///
// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("Yay! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Keep trying!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }
// ///
// test(select({ a: 1, b: 2, c: 3 }, ["a"]), { a: 1 });
// test(select({ a: 1, b: 2, c: 3 }, ["a", "c"]), { a: 1, c: 3 });
// test(select({ a: 1, b: 2, c: 3 }, ["a", "b", "c"]), { a: 1, b: 2, c: 3 });
// test(select({ a: 1, b: 2, c: 3 }, []), {});


// 5 Declare a function countCharacters.

// Arguments

// (string)
// Returns

// (object): an object containing the counts of the occurrences of each 
//character in the string.


// Your code here.
//debugger;
// function countCharacters(string){

//     let newObj = {};

//     let stringToArr = string.split('');

//     for (const item of stringToArr){
//         if (!newObj.hasOwnProperty(item)){  //This line checks if a key exists in an Object  https://stackoverflow.com/questions/38062258/how-to-check-if-a-key-exists-in-an-object-in-javascript
//             newObj[item] = 1; 
//         } else {
//             newObj[item] += 1;
//         }
//     }
//     console.log(newObj);
//     return newObj;


// }


// test(countCharacters("hello"), { h: 1, e: 1, l: 2, o: 1 });
// test(countCharacters("hello hello"), { h: 2, e: 2, l: 4, o: 2, " ": 1 });

// function test(actual, expected) {
//     if (JSON.stringify(actual) === JSON.stringify(expected)) {
//       console.log("Yay! Test PASSED.");
//     } else {
//       console.error("Test FAILED. Keep trying!");
//       console.log("    actual: ", actual);
//       console.log("  expected: ", expected);
//       console.trace();
//     }
//   }
// ///

// //// REVIEW ARRAYS AND OBJECTS
// // Declare a function getFirstObjectValues.

// // Arguments

// // ([object])
// // Returns

// // ([*]): an array of all of the values in the first object of the collection

// // Your code here

// function getFirstObjectValues(array){

//     let returnArray = [];

//     let firstObject = array[0];

//     for (const item in firstObject){
//         returnArray.push(firstObject[item]);
//     }

//     console.log(returnArray);
//     return returnArray;
// }


// const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];

// test(getFirstObjectValues(collection), [1, 2]);
// test(getFirstObjectValues(collection.slice(1)), [3, 3]);


// 2 Declare a function getAllValues. You may need to use both kinds of for-loops!

// Arguments

// ([object])
// Returns

// ([*]): an array of all of the values in all of the given objects

// Your code here
const collection = [{ a: 1, b: 2 }, { a: 3, b: 3 }, { b: 4 }, { a: 100 }];

// function getAllValues(array) {

//     let returnArray = [];

//     for (const item of array){
//         for (const key in item){
//             returnArray.push(item[key]);
//         }
//     }

//     console.log(returnArray);
//     return returnArray;
// }

// test(getAllValues(collection), [1, 2, 3, 3, 4, 100]);
// test(getAllValues(collection.slice(1)), [3, 3, 4, 100]);


// 3Declare a function selectAllValues.

// Arguments

// ([object])
// (string): the key to be selected
// Returns

// ([*]): an array of all of the values that have the given key in all of the given objects

// Your code here

function selectAllValues(array,string){

    let returnArray = [];

    for (const item of array){
        for (const key in item){
            if (key === string){
                returnArray.push(item[key]);
            }
        }
    }
    console.log(returnArray);
    return returnArray;
}


test(selectAllValues(collection, "a"), [1, 3, 100]);
test(selectAllValues(collection, "b"), [2, 3, 4]);

