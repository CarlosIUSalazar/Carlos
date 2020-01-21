'use strict'
// Please don'num2 delete the 'use strict' line above

//1 
function getAverage(x, y) {
    return (x + y) / 2;
}

console.log(getAverage(1, 1));
console.log(getAverage(1, 2));
console.log(getAverage(2, 3));
console.log(getAverage(2, 4));

//this function adds the 2 arguments and divides the total by 2


// 2 function akdui(ab) {
function greaterThanZero(number) {
    if (number > 0) {
        return true;
    }
    return false;
}

console.log("greaterThanZero? " + greaterThanZero(5))
console.log("greaterThanZero? " + greaterThanZero(-4))
console.log("greaterThanZero? " + greaterThanZero(54))
console.log("greaterThanZero? " + greaterThanZero(-35))


//this function returns true if the argument is greater than 0 else it returns false

// 3 function cbi(behrs, hert) {
function halfOfMultiplication(num1, num2) {
    return (1 / 2) * num1 * num2;
}

console.log("halfOfMultiplication result is " + halfOfMultiplication(4,5));
console.log("halfOfMultiplication result is " + halfOfMultiplication(7,5));
console.log("halfOfMultiplication result is " + halfOfMultiplication(10,50));
console.log("halfOfMultiplication result is " + halfOfMultiplication(10,5));



// This function multiplies the 2 arguments and divides them by 2

// 4 
function multipleOfSeven(num1) {
    return num1 % 7 === 0;
}

console.log("Is multiple of seven? " + multipleOfSeven(70));
console.log("Is multiple of seven? " + multipleOfSeven(44));
console.log("Is multiple of seven? " + multipleOfSeven(345));
console.log("Is multiple of seven? " + multipleOfSeven(140));

// This function returns true if the argument is divisible by 7 else it returns false
//console.log(fjdsk(70))


//5 
function absoluteValue(num1) {
    const zero = 0;
    if (num1 < zero) {
        return -num1;
    }
    return num1;
}

console.log("The aboslute value is " + absoluteValue(5));

//This function returns the negative value of the argument if the argument is less 
//than 0, else it returns the orginal value.

//MEDIUM REQUIREMENTS
//1 
function isItInTheMiddle(num1, num2, num3) {
    return num1 >= num2 && num1 <= num3;
}

console.log("isItInTheMiddle " + isItInTheMiddle(5,2,9));

//This function returns true if the first argument is greater or equal to the second 
//argument AND the first argument is lesser or equal than the 3rd argument


//2 
function randomOperations(num1, num2) {
    return num1 - num2 * Math.floor(num1 / num2);
}

// this function returns the substraction of the first argument minus the second argument
// then multiplied by the division of the first and second argument rounded down to its nearest
// integer.


console.log("randomOperations " + randomOperations(4,6));
console.log("randomOperations " + randomOperations(43,16));
console.log("randomOperations " + randomOperations(14,26));
console.log("randomOperations " + randomOperations(-4,36));




//3 
function xor(num1, num2) {
    return (num1 || num2) && !(num1 && num2);
}

console.log("xor result is : " + xor(false,true))
// This function gets the XOR of the boolean operation



//4 
function isItTheSmallest(num1, num2, num3, num4) {
    if (num1 < num2) {
        if (num2 < num3) {
            if (num3 < num4) {
                return true;
            }
        }
    }
    return false;
}

// This function returns true if the first argument is smaller than the other 3 arguments, else returns false.
console.log("The result is " + isItTheSmallest(1,2,3,4))
console.log("The result is " + isItTheSmallest(31,22,53,4))
console.log("The result is " + isItTheSmallest(1,24,23,14))  //!!!
console.log("The result is " + isItTheSmallest(133,2,23,-4))


//ADVANCED REQUIREMENTS
function squareRootOfSquaredSum(num1, num2, num3, num4) {
    return Math.sqrt(Math.pow(num3 - num1, 2) + Math.pow(num4 - num2, 2));
}


console.log("SquarerootofSquaredSum is " + squareRootOfSquaredSum(1,2,3,4));
console.log("SquarerootofSquaredSum is " + squareRootOfSquaredSum(12,12,3,43));
console.log("SquarerootofSquaredSum is " + squareRootOfSquaredSum(41,23,113,124));
console.log("SquarerootofSquaredSum is " + squareRootOfSquaredSum(3,22,321,4));

//This function returns the square root of the sum of g - q squared plus p - r squared.
