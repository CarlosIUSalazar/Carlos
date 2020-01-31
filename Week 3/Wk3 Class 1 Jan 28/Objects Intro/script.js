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





///Medium Requirements
// Declare a function countWords.

// Hint: You will want to make use of the string method .split. Try the code below to see 
// how it works.

// Arguments

// (string)
// Returns

// (object): an object whose keys are the words in the string, and the corresponding values 
// are the number of occurrences of that word within the string.

// Your code here.

// function countWords(string){
//   let resultObject = {};

//   let arrayOfStrings = string.split(" ");
//   console.log("array Of Strings is ",arrayOfStrings)

//   if (arrayOfStrings[0]=== ""){
//     return resultObject
//   }

//   for (const item of arrayOfStrings){
//     if (!(item in resultObject)) {   // Alternativa if (key in object) ////!resultObject.hasOwnProperty(item)  //https://stackoverflow.com/questions/38062258/how-to-check-if-a-key-exists-in-an-object-in-javascript
//       resultObject[item] = 1;
//     } else {
//       resultObject[item] += 1; 
//     }
//   }

//   console.log(resultObject);
//   return resultObject;
// }





// test(countWords("hello hello"), { hello: 2 });
// test(countWords("hello Hello"), { hello: 1, Hello: 1 });
// test(countWords(""), {});


const pokemons = [
  {
    Number: "001",
    Name: "Bulbasaur",
    Generation: "Generation I",
    About:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
    Types: ["Grass", "Poison"],
  },
  {
    Number: "025",
    Name: "Pikachu",
    Generation: "Generation I",
    About:
      "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
    Types: ["Electric"],
  },
  {
    Number: "019",
    Name: "Rattata",
    Generation: "Generation I",
    About:
      "Rattata is cautious in the extreme. Even while it is asleep, it constantly listens by moving its ears around. It is not picky about where it lives—it will make its nest anywhere.",
    Types: ["Normal"],
  },
];

///Pokemon fun!!!
// Use the pokemons array from the paired activities above for the following exercises.

// Declare a function getNames.

// Arguments

// ([object]): an array containing all the available pokemons
// Returns

// (object): an array of the Names of all the given objects.


// Your code here.
// function getNames(array){
//   let returnArray = [];

//     for(const item of array){
//       returnArray.push(item["Name"]);
//     }

//     console.log(returnArray);
//     return returnArray;


// }
// // the 'pokemons' array must be somewhere above this line in your file.
// test(getNames(pokemons), ["Bulbasaur", "Pikachu", "Rattata"]);


// 2 Declare a function findPokemon.

// Hint: This is one of the few times you should consider using ==.

// Arguments

// ([object]): an array containing all the available pokemons
// (number): the ‘number’ of the pokemon to retrieve
// Returns

// (object): the pokemon whose 'Number" is the given number. If a corresponding pokemon doesn’t exist, returns null

// Note: Since we only have three Pokemon objects in our array, this function will only return a pokemon with the numbers 1, 25, and 19.

// Your code here.

function findPokemon(array,number){

  let returnArray = [];

  for (const item of array){
    if(item["Number"] == number){
      returnArray.push(item)
    }
  }
  if (returnArray.length === 0){
    return null;
  }
  
  console.log("return array is", returnArray);
  return returnArray[0];
}

test(findPokemon(pokemons, 1), pokemons[0]);
test(findPokemon(pokemons, 19), pokemons[2]);
test(findPokemon(pokemons, 25), pokemons[1]);
test(findPokemon(pokemons, 1337), null);




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