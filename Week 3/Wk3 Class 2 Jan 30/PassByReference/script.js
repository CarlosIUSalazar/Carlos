'use strict'
// Please don't delete the 'use strict' line above

// Work with a partner on the following exercises. Discuss what the 
//code will do before you run it. Then run the code to see what happens.

// If you don’t finish in class, finish the exercises for homework.

// My mother’s birthday;

let a = "June 6";

const b = a;

a += " is my mother's birthday.";

console.log(a); // June 6 is my mother's birthday
console.log(b); // June 6

//2 I want to hold your hand;

const theBeatles = {
  bass: ["paul"],
  drums: ["ringo"],
  guitar: ["george", "john"],
  vocals: ["george", "john", "paul", "ringo"],
};

const theWannabes = theBeatles;
theWannabes.bass.push("someone else");

console.log(theBeatles.bass); // "paul","someone else"
console.log(theWannabes.bass);// "paul","someone else"


//3 The best day of the week.

const a = "Sunday";

let b = a;

a += " is the best day of the week.";

console.log(a); // Sunday is the best day of the week.
console.log(b); // TypeError: Assignment to constant variable.


//4 A rainbow.

const x = ["red", "orange", "yellow", "green", "blue", "purple"];
const y = x.slice(3); //slice creates a new array
y[2] = "pink";

console.log(x); // ["red", "orange", "yellow", "green", "blue", "purple"]
console.log(y); // "green", "blue", "pink"


//5 Another slice.

const x = [[1, 2, 3], [4, 5, 6]];
const y = x.slice(1);
y[0] = "pink";

console.log(x[1]); // [4, 5, 6]
console.log(y[0]); // pink


// //6 Off the deep end.

const x = [[1, 2, 3], [4, 5, 6]];
const y = x[1];
y[0] = "pink";

console.log(x[1]); // [pink,5,6]
console.log(y[0]); // pink