// 'use strict'
// // Please don't delete the 'use strict' line above

// // Warm up 💪🏼
// // Do whatever it takes to make these tests pass.

// // Your code here

// // Basic Requirements
// // Declare a function addOne.

// // Arguments

// // ([number])
// // Returns

// // ([*]): an array of all the numbers in the given array, with each number incremented by one

// // Your code here

// function addOne(array){

//     return array.map(element => element + 1);

// }

// test(addOne([1, 2, 3, 4]), [2, 3, 4, 5]);
// test(addOne([2, 3, 4]), [3, 4, 5]);


// // 2 What type of values do the following functions return?

// function foo1() {
//     return 1000;
//   }
//   console.log("foo1()", typeof foo1()); // ???
  
//   function foo2() {
//     return 9.99;
//   }
//   console.log("foo2()", typeof foo2()); // ???
  
//   function foo3(input) {
//     return input;
//   }
//   console.log("foo3()", typeof foo3()); // ???
  
//   function foo4() {
//     console.log("Hello!");
//   }
//   console.log("foo4()", typeof foo4()); // ???
  
//   function foo5() {
//     "false";
//   }
//   console.log("foo5()", typeof foo5()); // ???
  
//   function foo6() {
//     return "true";
//   }
//   console.log("foo6()", typeof foo6()); // ???
  
//   function foo7() {
//     return 1 + "two";
//   }
//   console.log("foo7()", typeof foo7()); // ???
  
//   function foo8() {
//     return [];
//   }
//   console.log("foo8()", typeof foo8()); // ???
  
//   function foo9() {
//     return [[1], [2], [3]];
//   }
//   console.log("foo9()", typeof foo9()); // ???
  
//   function foo10() {
//     return {
//       myArray: [],
//       myNumber: 5,
//       myString: "hello",
//     };
//   }
//   console.log("foo10()", typeof foo10()); // ???
  
//   function foo11() {
//     return function() {
//       return "this is a string!";
//     };
//   }
//   console.log("foo11()", typeof foo11()); // ???
  
//   function foo12() {
//     return function() {
//       return undefined;
//     };
//   }
//   console.log("foo12()", typeof foo12()); // ???


//   // 3 Try to predict what happens without running the code. Explain it to your pair and see if you’re right!

// function makeCounter() {
//     let count = 0;
//     return function() {
//       count++;
//       return count;
//     };
//   }
  
//   const counter = makeCounter();
  
//   /* What do these print? */
  
//   console.log(counter()); // ???
//   console.log(counter()); // ???
//   console.log(counter()); // ???


//   // 4 Debug the following code so that it prints each color of the rainbow to the console.

// function rainbowColors() {
//     const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
//     for (let i = 0; i < colors.length; i++) {
//       console.log(colors[i]);
//     }
//   }
  
//   // Test case
//   rainbowColors();
//   // 'red' 'orange' 'yellow' 'green' 'blue' 'purple'



//   // 5  Debug the following code so that it returns an object with the days that Code Chrysalis meets for class turned to “true”.

// const classDays = ["tuesday", "thursday", "saturday"];

// function getWeeklyCalendar(classDays) {
//   let classMeetingDays = {
//     monday: false,
//     tuesday: false,
//     wednesday: false,
//     thursday: false,
//     friday: false,
//     saturday: false,
//     sunday: false,
//   };

//   for (let key in classMeetingDays){
//       if (key === "tuesday" || key === "thursday" || key === "saturday"){
//         classMeetingDays[key] = true
//       }
//   }

// //   for (i = 0; i < classDays.length; i++) {
// //     let day = i;
// //     classMeetingDays[day] = true;
// //   }
//   return classMeetingDays;
// }

// // Test case
// test(getWeeklyCalendar(classDays), {
//   monday: false,
//   tuesday: true,
//   wednesday: false,
//   thursday: true,
//   friday: false,
//   saturday: true,
//   sunday: false,
// });



// /// 6 Declare a function product (multiply) that takes a input x.

// // Arguments

// // (number): x
// // Returns

// // (function): a function that takes an input y and returns the product of x and y.

// // Your code here

// function product(x){
//     return function(y){
//         return x * y;
//     }
// }

// const multiplyFive = product(5);

// test(multiplyFive(2), 10);
// test(product(3)(2), 6);


// // 7 Declare a function called pluck.

// // Arguments

// // ([object])
// // (string): key
// // Returns

// // ([*]): an array of all the values for the given property from the given array

// // Your code here

// const stooges = [
//   { name: "moe", age: 40 },
//   { name: "larry", age: 50 },
//   { name: "curly", age: 60, hair: "curly" },
// ];

// function pluck(array,string){
//     let newArray = [];

//     for(let item of array){
//         for(let key in item){
//             if (key === string){
//                 newArray.push(item[key])
//             }
//         }
//     }

//     return newArray
// }

// test(pluck(stooges, "name"), ["moe", "larry", "curly"]);
// test(pluck(stooges, "age"), [40, 50, 60]);
// test(pluck(stooges, "hair"), ["curly"]);


// // 8 Debug the following code so that it returns either all books that are available for purchase.
// // Check out the test case below the code to see how it should work.

// function getAvailableBooks() {
//   const books = {
//     "Harry Potter": true,
//     "Romeo and Juliet": false,
//     "Don Quixote": true,
//     "Lord of the Rings": true,
//     "Winnie the Pooh": false,
//   };

//   let booksAvailable = [];

//   for (let key in books) {
//     if (books[key] === true) {
//       booksAvailable.push(key);
//     }
//   }
//   return booksAvailable;
// }

// // Test case
// test(getAvailableBooks(), [
//   "Harry Potter",
//   "Don Quixote",
//   "Lord of the Rings",
// ]);

// // Medium Requirements
// // Write a function each. each will execute the given callback function once for each array element. Note: Do this without using the Array .forEach() method.

// // Arguments

// // ([*])
// // (function)
// // Returns

// // (undefined): this function returns undefined. It has side effects, though.

// function each(array, callback) {
//   // Your code here.
//     for(let index in array){
//         callback(array[index]) 
//         console.log(array[index])
//     }

// }

// let testArray = [1, 2, 3, 4];
// const actualResult = [];

// const triple = function(number) {
//   actualResult.push(number * 3);
// };

// each(testArray, triple);

// const expectedResult = [3, 6, 9, 12];
// test(actualResult, expectedResult);


// 2 Declare a function addTogether.

// Arguments

// ([number])
// ([number])
// Returns

// ([number]): an array with the result of the sum of each corresponding numbers of the given arrays

//debugger;
function addTogether(arr1,arr2,...arrays){
    let resultArray = [];
    let temp = 0


    for(let i = 0; i<arr2.length; i++){
        temp = arr1[i] + arr2[i]
        //resultArray.push(temp)
        arr1[i] = temp;
    }
    console.log("resultArray is" + arr1)
    
    for(let i = 0; i<arrays.length; i++){
        console.log("arrays is",arrays[i])
        temp = eval(arr1[i] + arrays[i][i])
        //resultArray.push(temp)
        arr1[i] = temp;
    }

    return arr1;

}


test(addTogether([1, 2, 3], [4, 5, 6]), [5, 7, 9]);
//Modify the addTogether function above so that it can take arrays of different lengths.

test(addTogether([1, 2, 3], [4]), [5, 2, 3]);
//Modify the addTogether function above so that it can take an arbitrary number of arrays as arguments.

test(addTogether([1, 2, 3], [4, 5], [6]), [11, 7, 3]);


// 1 Advanced Requirements
// Why does using typeof not work if you are trying to figure out whether something is an array or an object? What are ways we can distinguish between arrays and objects? Modify the each function so that it can take both arrays and objects (we call these collections!). There are a few ways to do this.

const result2 = [];

each({ one: 1, 2: "two" }, (element, index, collection) => {
  result2.push(element);
  result2.push(index);
  result2.push(JSON.stringify(collection));
});

test(result2, [
  "two",
  "2",
  '{"2":"two","one":1}',
  1,
  "one",
  '{"2":"two","one":1}',
]);



// 2 Declare a function fibonacci.

// Arguments

// (number): n
// Returns

// (number): the nth fibonacci number

// Your code here

test(fibonacci(0), 0);
test(fibonacci(1), 1);
test(fibonacci(2), 1);
test(fibonacci(3), 2);
test(fibonacci(4), 3);
test(fibonacci(5), 5);
test(fibonacci(6), 8);
test(fibonacci(10), 55);


// Nightmare Requirements
// Make sure your implementation of fibonacci can solve for large numbers.

// test(fibonacci(70), 190392490709135);
// Declare a function toBinary. Don’t use the built-in toString method (execpt for testing).

// Arguments

// (number): n
// Returns

// (string): a binary representation of the given number

// Your code here

test(toBinary(0), Number(0).toString(2));
test(toBinary(1), Number(1).toString(2));
test(toBinary(2), Number(2).toString(2));
test(toBinary(3), Number(3).toString(2));
test(toBinary(4), Number(4).toString(2));
test(toBinary(5), Number(5).toString(2));
test(toBinary(143), Number(143).toString(2));
test(
  toBinary(Number.MAX_SAFE_INTEGER),
  Number(Number.MAX_SAFE_INTEGER).toString(2)
);