'use strict'
// Please don't delete the 'use strict' line above

// Reminder
// Remember to include the test boilerplate at the top of your script.js file.

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
// You’ll need to use these variables for testing:



//1 Declare a function filterObjectForStrings.

// Arguments


//darknetdiaries.com  carna 
// typeof(null)  = object

// (object)
// Returns

// (object): an object similar to the given object, except that the 
//object’s key/value pairs are only present if the value is a string.
const obj1 = { a: "A" };
const obj2 = { a: "A", b: 2 };
const obj3 = { a: "A", b: 2, c: "C", d: true };
const obj4 = { a: "A", c: "C" };

function filterObjectForStrings(object) {
  // Your code here
    let returnObject = {};

    for (const key in object){
        if (typeof(object[key]) === "string"){
            returnObject[key] = object[key];
        }
    }
    return returnObject;

}
test(filterObjectForStrings(obj1), obj1); // no change
test(filterObjectForStrings(obj2), obj1); // don't include "b"
test(filterObjectForStrings(obj3), obj4); // don't include "b" or "d"
// 2 Declare a function filterArrayForStrings. You should use the function 
//that you wrote above.
// Arguments

// ([object]): an array of objects
// Returns

// ([object]): an array containing all the given objects, except that the 
//object’s key/value pairs are only present if the value is a string.
//debugger;
function filterArrayForStrings(arrayOfObjects) {
  // Your code here.
  // Somewhere in here, you should CALL filterObjectForStrings(withSomething)
    let returnArray = [];
    let tempObject = {};

    for (const item of arrayOfObjects){
        for (const key in item){
            if (typeof(item[key]) === "string"){
            tempObject[key] = item[key];
        }
        }
        returnArray.push(tempObject);
        tempObject = {};
    }      
    return returnArray;
}
test(filterArrayForStrings([obj1]), [obj1]); // no change
// don't include "b" in the 2nd element
test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);