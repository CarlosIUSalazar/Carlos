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

    let newArray = array.map(x => x += 1);

    return newArray

}

test(getIncrementedNumbers([1, 2, 3]), [2, 3, 4]);
test(getIncrementedNumbers([-1, -2, -3]), [0, -1, -2]);

const array1 = [0, 0, 0];
test(getIncrementedNumbers(array1), [1, 1, 1]);
// Make sure that the original array is untouched
test(array1, [0, 0, 0]);


// Medium Requirements
// 1 Declare a function getSwitched. This function should call .map. You may need to write a helper function, or you can use an anonymous function.

// Arguments

// ([number|string])
// Returns

// ([number|string]): a new array, with each number converted to a string, and each string converted to a number

// Your code here

function getSwitched(array){

    let newArray = array.map(function(x){ 
        if(typeof x === "number"){
            return String(x);
        } else if (typeof x === "string"){
            return Number(x);
        }
    })
    return newArray;

}

test(getSwitched([1, 2, 3]), ["1", "2", "3"]);
test(getSwitched(["1", "2", "3"]), [1, 2, 3]);
test(getSwitched(["1", 2, "3"]), [1, "2", 3]);



// Advanced Requirements
// You may need to use techniques that we didn’t go over in class for these exercises

// Declare a function multiplyByIndex.

// Arguments

// ([number])
// Returns

// ([number]): a new array, with each number multiplied by it’s index in the given array

// Your code here

function multiplyByIndex(array){

    let returnArray = [];
    let index = 0

    returnArray = array.map(function(x){
            x = x * index;
            index++
        return x

    })
    return returnArray;
}

test(multiplyByIndex([1, 2, 3]), [0, 2, 6]);
test(multiplyByIndex([2, 3, 4]), [0, 3, 8]);
test(multiplyByIndex([-3, -4, -5]), [-0, -4, -10]);
// -0 ??? JavaScript is weird.




// 2 Declare a function feedback.

// Arguments

// ([*])
// (function): a function to perform on the given array
// (number): the number of times to perform the given function on the array
// Returns

// ([*]): a new array. Each element has been run through the given function the given number of times

//debugger;
// Your code here
function double(element) {
    return element * 2;
  }
  


function feedback(array,func,number){

    let returnArray = [];
    let counter = 0;
    
    while (counter < number){
        returnArray = array.map(x => func(x))
        counter++;
    }

    return returnArray;

}





//test(feedback([1, 2, 3], double, 1), [2, 4, 6]);
test(feedback([1, 2, 3], double, 2), [4, 8, 12]);
test(feedback([1, 2, 3], double, 8), [256, 512, 768]);