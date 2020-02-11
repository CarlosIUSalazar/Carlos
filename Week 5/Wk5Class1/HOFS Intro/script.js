'use strict'
// Please don't delete the 'use strict' line above

// Basic Requirements
// Some of these functions are review, but we want you to get practice seeing how to use them with Array.map.

// 1 Declare a function getGreeting. This function should not call .map. Instead, it will be used by .map in the tests.

// Arguments

// (*)
// Returns

// (string): A greeting for the given argument

// Your code here

function getGreeting(array){

    return 'Hello, '+ array + '.';
}



const arrayOfNames = ["zeno", "yanis", "xander"];
const arrayOfGreetings = ["Hello, zeno.", "Hello, yanis.", "Hello, xander."];

test(arrayOfNames.map(getGreeting), arrayOfGreetings);


// 2 Declare a function abs. This function should not call .map. Instead, it will be used by .map in the tests.

// Arguments

// (number)
// Returns

// (number): The absolute value of the given number

function abs(x){

    if (x > 0){
        return x;
    } else if (x < 0) {
        return -x; 
    } else if (x === 0){
        return 0;
    }

}


// Your code here

test([1, 2, 3].map(abs), [1, 2, 3]);
test([-1, -2, -3].map(abs), [1, 2, 3]);
test([-1, 2, -3].map(abs), [1, 2, 3]);


// 3 Declare a function getIncrementedNumbers. This function should call .map. You may need to write a helper function, or you can use an anonymous function.

// Arguments

// ([number])
// Returns

// ([number]): a new array, with each number incremented. The original array should not be modified

// Your code here

function getIncrementedNumbers(array){

    let newArray = array.map(x => x+= 1);



    // for (let i =0; i < array.length; i++){
    //     newArray.push(array[i]+1);
    // }

    return newArray

}

test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

const array1 = [0, 0, 0];
test(getIncrementedNumbers(array1), [1, 1, 1]);
// Make sure that the original array is untouched
test(array1, [0, 0, 0]);