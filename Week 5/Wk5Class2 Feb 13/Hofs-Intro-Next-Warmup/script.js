'use strict'
// Please don't delete the 'use strict' line above

// Warm up 💪🏼
// Do whatever it takes to make these tests pass. There is a way to do it so that each 
// function you declare is no more than 5 lines of code.

const arrayOfObjects = [
  { name: "alice", favoriteColor: "green" },
  { name: "bob", favoriteColor: "blue" },
];

// Your code here

const getNames = function(array){
    let names = [];
    array.map(element => names.push(element["name"]))
    return names
}
    
function getFavoriteColors(array){
    let favoriteColors = array.map(function(element){
        return element["favoriteColor"]
    })

    return favoriteColors
}


// 

test(getNames(arrayOfObjects), ["alice", "bob"]);
test(getFavoriteColors(arrayOfObjects), ["green", "blue"]);




// const getNames = function(array) {
    //     let names = [];
    //     array.map(element => names.push(element.name));
    //     return names;
    // };
    
    
    // function getFavoriteColors(array){
    //     const newArray = array.map(function(element) {
    //         return element.favoriteColor;
    //     });
    //     return newArray;
    // };
    