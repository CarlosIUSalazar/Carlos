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
                    for(let item2 of item[key]){
                        if (item2 === attack){
                            returnArray.push(item);
                        }
                    }
                }
            }
        }

        console.log("Return Array is ", returnArray)

        let returnObject = [];
        for (let item of returnArray){
            for (let key in item){
                returnObject.push(item.Name)
            }
        }

        return returnObject;

}



test(getResistentPokemonNames("Ice"), getResistentPokemonNamesResult);





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