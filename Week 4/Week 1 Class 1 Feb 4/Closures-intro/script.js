'use strict'
// Please don't delete the 'use strict' line above

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


  // 1 What is wrong with the following function? Please fix the code.

function addOne(x) { // Parameters should be variable
    return x + 1;
  }
  
  test(addOne(5), 6);
  test(addOne(50), 51);

// 2 For the code below, which is correct, A or B?

// We did not cover template literals in the lecture, but see if you can figure out 
// how they work by playing around with the below. Check out the template literals doc 
// if you want to look into it a little more.

function doSomething(value, action) {
  return action(value);
}

function greeting(name) {
  return `Hello ${name}`;
}

//test(doSomething("Alex", greeting()), "Hello Alex"); // A
test(doSomething("Alex", greeting), "Hello Alex"); // B


// 3 What gets printed? Why?

let x = "Outside x";
function bar() {
  let x = "Inside x";
  return "This is bar!";
}

bar();
console.log(x);


// Basic Requirements
// Take a look at the closure below. It’s already set up for you! Can you identify which 
// variable lives in a SECRET closure scope?

// When you are ready, uncomment each line of code below the function. Make sure you 
// understand what each line is doing. Ask if you are unsure!

function createPasswordProtectedAccount(userChosenPassword) {
  const savedPassword = userChosenPassword;

  function checkPassword(passwordEntered) {
    if (savedPassword === passwordEntered) {
      console.log("Correct password. Access granted!");
    } else {
      console.log("Wrong password. Access denied.");
    }
  }

  return checkPassword;
}

const account = createPasswordProtectedAccount("Test1234"); // Add your initial password in as an argument
account("8skwob"); // Add the wrong password in as an argument! => "Wrong password. Access denied."
account("Test1234"); // Now add the correct password in as an argument. => "Correct password. Access granted!"