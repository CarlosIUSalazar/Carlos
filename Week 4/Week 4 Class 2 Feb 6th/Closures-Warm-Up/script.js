'use strict'
// Please don't delete the 'use strict' line above

//1 Declare a function divide that takes an input x and returns a function. The 
// inner function should take an input y and return x divided by y.

// Your code here


function divide(x){

    return function(y){
        return (x/y);
    }

}



const divide2 = divide(2);

test(divide2(4), 0.5);
test(divide(2)(1), 2);







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