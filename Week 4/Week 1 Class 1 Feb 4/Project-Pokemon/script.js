'use strict'
// Please don't delete the 'use strict' line above

console.log(allPokemon);
console.log(allPokemon.length);
console.log(allPokemon[0]);

//Basic Requirements
//1 Declare a function getNames that returns an array of all the names of Pokémon in 
//the data set.

function getNames(){
    let returnArray = [];

    for(let item of allPokemon){
            returnArray.push(item["Name"])
    }
    return returnArray;

}


console.log("returnArray is " + getNames());

test(getNames(), getNamesResult);






// function getPokemonByName(name){


// }












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