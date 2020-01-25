'use strict'
// Please don't delete the 'use strict' line above

//Do the following exercises in the Google Chrome console with your partner.

// const instructors = ["Kimiko", "Yan", "Dustin", "Dylan"];

//1 Write a console.log statement for the above array to print the last value without hard-coding the index. Hint: .length will be useful here.

// 2 What is going on in our code? Fill in the blanks with the output of the statements:

// let numbers = [1, 2, 3];

// console.log(numbers[2]); // ???
// console.log(numbers[0]); // ???
// console.log(numbers[numbers.length - 1]); // ???

// // Read the docs (MDN) closely for the following!

// console.log(numbers.pop() + numbers.pop()); // ???

// numbers.unshift(4, 5, 6);
// console.log(numbers.shift()); // ???

// console.log(numbers.length); // ???

// numbers.push(5);
// numbers.push(6);

// console.log(numbers.pop() * numbers.pop()); // ???
// console.log(numbers[0]); // ???


// //3 You can also nest arrays inside of arrays. We’ll play around with these a little later. Fill in the following:

// const numbers = [[1, 2, 3], ["one", "two", "three"], ["ichi", "ni", "san"]];
// console.log(numbers[2]); // ???
// console.log(numbers[1][1]); // ???
// console.log(numbers[0][2]); // ???
// console.log(numbers[numbers.length - 1][0]); // ???
// console.log(numbers[2].length); // ???
// console.log(numbers.pop()); // ???
// console.log(numbers[0].push(4)); // ???
// console.log(numbers.length); // ???

// //4 Strings also work very similarly to arrays. Fill in the following:

// const string = "hello";
// console.log(string[0]); // ???
// console.log(string[3]); // ???
// console.log(string[string.length - 1]); // ???
// console.log(string.length); // ???


// Exercises
// Create the usual new folder and files.

// Note

// Remember how to compare arrays? You can’t use strict equality checking. Instead, you need to use JSON.stringify() first.

// When dealing with objects (like arrays), a simple comparison won't work. We'll need to use a built-in function called JSON.stringify to compare the objects.
// More about that in a future lesson.
// if (JSON.stringify(actual) === JSON.stringify(expected)) {
//   console.log("Yay! Test PASSED.");
// } else {
//   console.error("Test FAILED. Keep trying!");
//   console.log("    actual: ", actual);
//   console.log("  expected: ", expected);
// }

///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// Basic Requirements
// Don’t forget to put the declarations of expected and actual at the top of your file.

// Declare a function called numberOfPeople.

// Arguments

// ([string]): an array of people’s names
// Returns

// (number): the length of the given array of names.

function numberOfPeople(array) {
  // Your code here
    return array.length;


}

let actual = numberOfPeople(["Kimiko", "Yan", "Dustin", "Dylan"]);
let expected = 4;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
// 2 Declare an array called students and fill it with five classmates sitting around you. 
// Invoke numberOfPeople using the array of students as the input!

// Your code here.
let students = ["Takashi","Polly","Dylan","Maria","Carlos"];

actual = numberOfPeople(students);
expected = 5;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}
// 3 Add three more values to your students array using the .push method.

// Your code here.

students.push("Stephen","Thalita","Natasha");

actual = numberOfPeople(students);
expected = 8;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// 4 Declare a function called returnLast.

// Arguments

// ([*]): an array of elements
// Returns

// (*): the last item in the given array

function returnLast(array) {
  // Your code here
    return array[array.length-1];

}

// Write your own tests

actual = returnLast(["Stephen","Thalita","Natasha"]);
expected = "Natasha";

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


// 5 Instead of using the built-in .push method, let’s write our own. Declare a 
//function push. You are not allowed to use the built-in .push method!

// Arguments

// ([*]): an array of elements
// (*): the value to add to the end of the array
// Returns

// (number): the new length of the given array. The given array should also have 
//the new given element at the end of it.

// Your code here

let array = [1, 2, 3, 4];

function myPush(array,newValue){
    
    return array[array.length] = newValue; 

}

// Test that the function returns the correct result.
actual = myPush(array, 5);
expected = 5;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Test that the function modifies the given array correctly.
actual = array;
expected = [1, 2, 3, 4, 5];

// When dealing with objects (like arrays), a simple comparison won't work. We'll need to use a built-in function called JSON.stringify to compare the objects.
// More about that in a future lesson.
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////

//MEDIUM REQUIREMENTS
// 1 Declare a function called hiInTheMiddle. You may need to use something called 
//Math.floor for this one.

// Arguments

// ([*]): an array of elements
// Returns

// (*): the same array, with or without an added “hi” in the middle.

// It should first check to make sure that the array has an odd number of values 
//(hint: .length needs to be odd). If the length is odd, hiInTheMiddle should replace 
//the value in the middle index, no matter what it may be, with a “hi”. If the length 
//is even, return the array with no changes.

// Your code here

function hiInTheMiddle(array){
    if (array.length % 2 ===0){
        return array;
    } else {
        array[Math.floor(array.length/2)] = "hi";
        return array;
    } 
}

actual = hiInTheMiddle([1, 2, 3, 4, 5]);
expected = [1, 2, "hi", 4, 5];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = hiInTheMiddle([1, 2, 3, 4]);
expected = [1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


/// 2 Declare a function pop. This one is tricky; you are not allowed use the built-in .pop method, 
//but you should look into using the .splice method.

// Arguments

// ([*]): an array of elements
// Returns

// (*): the last element in the given array. The last element is also removed from the given array.

// Your code here

function pop(array){

    let x = array.splice(array.length-1,1);
    return x[0];

}

array = [1, 2, 3, 4];

actual = pop(array);
expected = 4;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = array;
expected = [1, 2, 3];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


/////  3 Declare a function unshift. This one is tricky, too. You can’t use the built-in unshift. 
// You should use .splice here as well.

// Arguments

// ([*]): an array of elements
// ([*]): a value to add to the front of the array
// Returns

// (number): the new length of the array. The given element is added to the given array.
// Your code here

function unshift(array, newItem){

    // let newArr = [newItem];
    // let x = newArr.concat(array)

    // console.log("result array is ", x)
    // return x;

    let newArr = array.splice(0,0,newItem);
    console.log("neawarr is",newArr)
    return newArr.length;

}

array = [1, 2, 3, 4];

actual = unshift(array, 5);
expected = 5;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


actual = array;
expected = [5, 1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


/// 4 Declare a function shift. shift should remove the first value in the given array and return the removed value.

// Arguments

// ([*]): an array of elements
// Returns

// (*): the first element in the given array. The given element is removed to the given array.


function shift(array){

    let x  = array[0];

    array.splice(0,1);
    console.log("new array is", array)
    return x

}

array = [1, 2, 3, 4];

actual = shift(array);
expected = 1;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = array;
expected = [2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


///////  Advanced Requirements
// For these exercises, you may need to use techniques that we haven’t covered in class.

// Change the function numberOfPeople to NOT use the built-in .length property.

// Declare a function areReverses that checks if two arrays are ‘reverses’ of each other. 
// Take this as an opportunity to look through what built-in methods are available for arrays. 
// There may be an easy way to do this 😉.

// Arguments

// ([*]): the first array of elements
// ([*]): the second array of elements
// Returns

// (boolean): whether or not the given arrays are reverses of each other

// Your code here


function numberOfPeopleAdvanced(array) {
    // Your code here
    let count = 0;
 
    for (let i = 0; i<=array.length-1; i++){
        count++
    }

    return count;
  
  }

actual = numberOfPeopleAdvanced(["Kimiko", "Yan", "Dustin", "Dylan"]);
expected = 4;
  
  if (actual === expected) {
    console.log("Yay! Advanced Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }


  // 2 Declare a function areReverses that checks if two arrays are ‘reverses’ of each other. 
//   Take this as an opportunity to look through what built-in methods are available for arrays. 
//   There may be an easy way to do this 😉.

// Arguments

// ([*]): the first array of elements
// ([*]): the second array of elements
// Returns

// (boolean): whether or not the given arrays are reverses of each other

// Your code here

function areReverses(arr1,arr2){

    let arr3 = [];
    for (let i = arr2.length-1; i>=0; i--) {
        arr3.push(arr2[i]);
    }

    if (JSON.stringify(arr1) === JSON.stringify(arr3)){
        return true;
    } else {
        return false;
    }

}

let array1 = [1, 2, 3, 4];
let array2 = [4, 3, 2, 1];

actual = areReverses(array1, array2);
expected = true;

if (actual === expected) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = array1;
expected = [1, 2, 3, 4];

// Make sure the original array is not changed
if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}


/// 3 Declare a function called concat. You can’t use the built-in .concat.
// Arguments

// ([*]): the first array of elements
// ([*]): the second array of elements
// Returns

// ([*]): a new array that is contains the merging of the given arrays.

// Your code here

function concat(arr1,arr2){

    let arr3 = [];
    for (let i = 0; i< arr1.length; i++){
        arr3.push(arr1[i]);
    }
    for (let i = 0; i< arr2.length; i++){
        arr3.push(arr2[i]);
    }
    return arr3;

}

array1 = [1, 2, 3, 4];
array2 = [4, 3, 2, 1];

actual = concat(array1, array2);
expected = [1, 2, 3, 4, 4, 3, 2, 1];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

// Make sure the original arrays are not changed
actual = array1;
expected = [1, 2, 3, 4];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}

actual = array2;
expected = [4, 3, 2, 1];

if (JSON.stringify(actual) === JSON.stringify(expected)) {
  console.log("Yay! Test PASSED.");
} else {
  console.error("Test FAILED. Keep trying!");
  console.log("    actual: ", actual);
  console.log("  expected: ", expected);
}