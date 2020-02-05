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


// 2 Your turn! Take a look at the closure below.

// Invoke createDonationAccount and assign its return value to a variable. If you do 
// this correctly, you will see “The donation account has been created!” printed to your 
// console.

// Then, invoke it three times. If you do this correctly, you will see “2” printed to 
// your console by the third time.

function createDonationAccount() {
  let donations = 0;

  function addDonation() {
    console.log(donations);
    donations += 1;
  }
  console.log("The donation account has been created!");
  return addDonation;
}

const firstAccount = createDonationAccount();

console.log(firstAccount())
console.log(firstAccount())
console.log(firstAccount())



//  3  We went over this in the lecture, but try to write it by yourself without looking. Declare a 
// function add that takes a input x. add returns a function that takes an input y. The inner function 
// returns the value of x added to y.

// Some code to get you started

function add(x) {
  // Your code here

  //let x = w;

  return function (y) {
    return x + y;
  }

}

const addFive = add(5);
test(addFive(1), 6);


// 4 The below function works, but what has a major problem. What is it?

function makeCounter() {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
}

const counterA = makeCounter();
test(counterA(), 1);
test(counterA(), 2);

const counterB = makeCounter(); // This should get a NEW counter
test(counterB(), 1);
test(counterB(), 2);


// Medium Requirements
// 1 Create your own closure. Here is the scenario:

// You are creating a website that doesn’t allow access to some features for children who are under 
// the age of 13.

// Declare a function that accepts age as an argument.
// Create an inner function that increases the age by one year every time it is invoked. Then, 
// if the age is over 13, return true– and if it is under 13, return false.
// Your code here

function createWebsiteAccount(age) {

  return function () {
    age++;
    if (age >= 13) {
      console.log("age is ", age)
      return true;
    } else {
      console.log("age is ", age)
      return false;
    }
  }
}


const childAccount = createWebsiteAccount(10);
test(childAccount(), false); // => false
test(childAccount(), false); // => false
test(childAccount(), true); // => true (the child is now 13!)

const adultAccount = createWebsiteAccount(33);
test(adultAccount(), true); // => true (no matter how many times it is invoked)



// 2 Declare a function product that takes an input x and returns a function. The inner function 
// should take an input y and return the product of x and y.

// Your code here

function product(x){

  return function(y){
    return x * y;
  }

}

const product3 = product(3);

test(product3(4), 12);
test(product(4)(5), 20);


// 3 Declare a function subtract that takes an input x and returns a function. The inner function 
// should take an input y and return x minus y.

function subtract(x){

  return function(y){
    return x - y;
  }

}

const subtract5 = subtract(5);

test(subtract5(4), 1);
test(subtract(10)(8), 2);