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




//2 Declare a function getPokemonByName that takes a string (the name of the Pokémon) 
// and returns the correct Pokémon object.

function getPokemonByName(name){

    let returnObject = {}

    for(let item of allPokemon){
        for(let key in item){
            if(item[key] === name){
                returnObject = item;
            }
        }
    }

    return returnObject
    

}
console.table(getPokemonByName("Pikachu"));
console.log(getPokemonByName("Pikachu"));

test(getPokemonByName("Pikachu"), getPokemonByNameResult)


// 3 Declare a function called getAvgMaxCP that returns the average maximum CP 
//(combat points) of all Pokémon.


function getAvgMaxCP(){

    let returnResult = [];
    let someCP = 0;

    for(let item of allPokemon){
        for (let key in item){

            if (key==="MaxCP"){
                returnResult.push(item[key]);
            }

        }
    }

    console.log("returnResult is " + returnResult)

    for (let item of returnResult){
        someCP += item;
    }

    let averageMaxCP = someCP/returnResult.length
    return averageMaxCP;
}

// If this test is ALMOST correct, but not exactly, don't worry.
// Just comment out the test.
test(getAvgMaxCP(), getAvgMaxCPResult);



// 4 Declare a function called getResistentPokemon that takes a string argument 
// attack. getResistentPokemon should return all Pokémon (an array of objects) that 
// are resistant to the type of attack supplied as an argument.

    function getResistentPokemon(attack){

        let returnArray = [];

        for(let item of allPokemon){
            for(let key in item){
                if (key === "Resistant"){
                    for(let item2 of item[key]){
                        if (item2 === attack){
                            returnArray.push(item);
                        }
                    }
                }
            }
        }

        console.log("Return Array is ", returnArray)

        return returnArray;

    }

test(getResistentPokemon("Fire"), getResistentPokemonResult);



// 5 Declare a function called getResistentPokemonNames that takes a string argument 
// called attack. getResistentPokemonNames should return an array of the names of the 
// Pokémon that are resistant to the type of attack passed in. Hint: Can you use the 
// previously written getResistentPokemon to help you here?


function getResistentPokemonNames(attack){

    let returnArray = [];

    for(let item of allPokemon){
        for(let key in item){
            if (key === "Resistant"){
                for(let itemResistant of item[key]){
                    if (itemResistant === attack){
                        returnArray.push(item);
                    }
                }
            }
        }
    }
    //Creates an array of objects of all pokemons resistent to attack
    console.log("ppokemons with resistant to attack are: ", returnArray)
    
    let returnArrayOfNames = [];
    for (let item of returnArray){
            returnArrayOfNames.push(item["Name"])
    }
    //takes only the name from the created array above
    console.log("Pokemons only name ", returnArrayOfNames)
    return returnArrayOfNames
}

// test(getResistentPokemonNames("Ice"), getResistentPokemonNamesResult);

// 6 Declare a function called getWeaknessCounts that returns an object with each type of weakness and 
// the number of Pokémon with that weakness.

function getWeaknessCounts(){

    let returnWeaknesses = [];

    for(let item of allPokemon){
        for (let key in item){
            returnWeaknesses.push(item["Weaknesses"])
        }
    }

    let flatReturnWeaknessesArray = returnWeaknesses.flat();

    var uniqueWeaknessesArray = Array.from(new Set(flatReturnWeaknessesArray))   //https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates


    let returnWeaknessesObject = {};

    for(let item of uniqueWeaknessesArray){
        returnWeaknessesObject[item] = 0;
    }

    console.table("my return weaknesses ARRAY is", uniqueWeaknessesArray)  // ["Fire", "Ice", "Flying", "Psychic", "Water", "Ground", "Rock", "Electric", "Grass", "Fighting", "Poison", "Steel", "Bug"]
    console.table("my return weaknesses OBJECT is", returnWeaknessesObject)  // {Fire: 0, Ice: 0, Flying: 0, Psychic: 0, Water: 0, …}

    //debugger;

    for(let item of allPokemon){
        for(let key in item){
            //console.log(item["Weaknesses"]);
            if (key === "Weaknesses"){
            
            for(let item2 of item[key]){
                if (item2 === "Fire"){
                returnWeaknessesObject["Fire"]++;
                } else if (item2 === "Ice"){
                    returnWeaknessesObject["Ice"]++;
                } else if (item2 === "Flying"){
                    returnWeaknessesObject["Flying"]++;
                } else if (item2 === "Psychic"){
                    returnWeaknessesObject["Psychic"]++;
                } else if (item2 === "Water"){
                    returnWeaknessesObject["Water"]++;
                } else if (item2 === "Ground"){
                    returnWeaknessesObject["Ground"]++;
                } else if (item2 === "Rock"){
                    returnWeaknessesObject["Rock"]++;
                } else if (item2 === "Electric"){
                    returnWeaknessesObject["Electric"]++;
                } else if (item2 === "Grass"){
                    returnWeaknessesObject["Grass"]++;
                } else if (item2 === "Fighting"){
                    returnWeaknessesObject["Fighting"]++;
                } else if (item2 === "Poison"){
                    returnWeaknessesObject["Poison"]++;
                } else if (item2 === "Steel"){
                    returnWeaknessesObject["Steel"]++;
                } else if (item2 === "Bug"){
                    returnWeaknessesObject["Bug"]++;
                } 
            }
            }
        }
    }

    console.table("my finished return weaknesses OBJECT is", returnWeaknessesObject)  
    return returnWeaknessesObject;

}

test(getWeaknessCounts(), getWeaknessCountsResult);

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


  //Medium Requirements
// Did you know that all arrays come with some built-in methods? There is one called forEach that 
// can be really handy in place of a for-loop. Read about it here.

// Rewrite getNames so that it uses this special Array.prototype.forEach now instead of a for-loop. 
// Look at the examples on the MDN page to understand how to use .forEach.

// Rewrite the above functions to use the .forEach method instead of a for-loop.


////1 Declare a function getNames that returns an array of all the names of Pokémon in 
//the data set.


// https://stackoverflow.com/questions/33763768/loop-through-array-of-values-with-arrow-function


function getNamesForEach() {

    let returnArray = [];

    allPokemon.forEach(function(pokemon) {
        returnArray.push(pokemon.Name)
    });

    console.table(returnArray);
    return returnArray;
    
}


test(getNamesForEach(), getNamesResult);


// 2 Medium Declare a function getPokemonByName that takes a string (the name of the 
// Pokémon) and returns the correct Pokémon object.

function getPokemonByNameMedium(name){

    let returnObject = {}

    allPokemon.forEach(pokemon => {
        if(pokemon.Name === name){
            returnObject = pokemon;
        }
    })

    console.log(returnObject);
    return returnObject;

}
console.table(getPokemonByNameMedium("Pikachu"));
console.log(getPokemonByNameMedium("Pikachu"));

test(getPokemonByNameMedium("Pikachu"), getPokemonByNameResult)

console.table(allPokemon)