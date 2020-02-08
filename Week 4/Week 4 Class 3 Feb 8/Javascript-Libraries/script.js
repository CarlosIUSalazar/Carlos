'use strict'
// Please don't delete the 'use strict' line above

test({ a: "A", b: "B" }, { b: "B", a: "A" });


// Medium Requirements
// Declare a function incrementNumbers.

// Arguments

// (object)
// Returns

// (object): the given object, with all numbers in the object incremented by 1

function incrementNumbers(object){

    let returnObject = {};

    for(let key in object){
        if (typeof(object[key]) === "number"){
            object[key]++;
        } 
    }
    return object

}


test(incrementNumbers({ a: 1, b: 2, 1: 3, d: "hello" }), {
  a: 2,
  b: 3,
  1: 4,
  d: "hello",
});
test(incrementNumbers({ a: 2, b: 3, 1: 4, d: "hello" }), {
  a: 3,
  b: 4,
  1: 5,
  d: "hello",
});