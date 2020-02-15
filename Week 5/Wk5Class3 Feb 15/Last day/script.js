'use strict'
// Please don't delete the 'use strict' line above

// Warm up 💪🏼
// Do whatever it takes to make these tests pass.

// Your code here

// Basic Requirements
// Declare a function addOne.

// Arguments

// ([number])
// Returns

// ([*]): an array of all the numbers in the given array, with each number incremented by one

// Your code here

function addOne(array){

    return array.map(element => element + 1);

}

test(addOne([1, 2, 3, 4]), [2, 3, 4, 5]);
test(addOne([2, 3, 4]), [3, 4, 5]);


// 2 What type of values do the following functions return?

function foo1() {
    return 1000;
  }
  console.log("foo1()", typeof foo1()); // ???
  
  function foo2() {
    return 9.99;
  }
  console.log("foo2()", typeof foo2()); // ???
  
  function foo3(input) {
    return input;
  }
  console.log("foo3()", typeof foo3()); // ???
  
  function foo4() {
    console.log("Hello!");
  }
  console.log("foo4()", typeof foo4()); // ???
  
  function foo5() {
    "false";
  }
  console.log("foo5()", typeof foo5()); // ???
  
  function foo6() {
    return "true";
  }
  console.log("foo6()", typeof foo6()); // ???
  
  function foo7() {
    return 1 + "two";
  }
  console.log("foo7()", typeof foo7()); // ???
  
  function foo8() {
    return [];
  }
  console.log("foo8()", typeof foo8()); // ???
  
  function foo9() {
    return [[1], [2], [3]];
  }
  console.log("foo9()", typeof foo9()); // ???
  
  function foo10() {
    return {
      myArray: [],
      myNumber: 5,
      myString: "hello",
    };
  }
  console.log("foo10()", typeof foo10()); // ???
  
  function foo11() {
    return function() {
      return "this is a string!";
    };
  }
  console.log("foo11()", typeof foo11()); // ???
  
  function foo12() {
    return function() {
      return undefined;
    };
  }
  console.log("foo12()", typeof foo12()); // ???


  // 3 Try to predict what happens without running the code. Explain it to your pair and see if you’re right!

function makeCounter() {
    let count = 0;
    return function() {
      count++;
      return count;
    };
  }
  
  const counter = makeCounter();
  
  /* What do these print? */
  
  console.log(counter()); // ???
  console.log(counter()); // ???
  console.log(counter()); // ???


  // 4 Debug the following code so that it prints each color of the rainbow to the console.

function rainbowColors() {
    const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
    for (let i = 0; i < colors.length; i++) {
      console.log(colors[1]);
    }
  }
  
  // Test case
  rainbowColors();
  // 'red' 'orange' 'yellow' 'green' 'blue' 'purple'