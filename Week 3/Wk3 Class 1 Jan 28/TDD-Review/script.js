'use strict'
// // Please don't delete the 'use strict' line above

// function numberOfPeople(array){
//     return array.length;
// }


// //// Refactores tests

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

//   ///If you put the above code at the top of your script.js files, 
//   //you can use it again and again. Like this:

// function numberOfPeople(people) {
//     return people.length;
//   }
  
//   // Assuming the test boilerplate is in the same file...
//   test(numberOfPeople(["Kimiko", "Yan"]), 2);
//   test(numberOfPeople(["John", "Paul", "George", "Ringo"]), 4);
//   test(numberOfPeople([]), 0);

// const myFunc = function() {
//     const greeting = "Hello World";
// }

// myFunc();
// console.log(greeting);



let greeting = "Hello";
let greeting = "3"

function greet(name) {
    let greeting = "Hi"
    return greeting + " " + name;
}
console.log(greeting);
console.log(greet("Eri"));
console.log(greeting);


