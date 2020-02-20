'use strict'
// Please don't delete the 'use strict' line above

// Warm up 💪🏼
// Do whatever it takes to make these tests pass.

// Your code here
function doTheThing(arr){

    // let newArray = [];
    // let newArray = arr.filter(element => element <= 5)
    // newArray = arr.filter(element => element < 6).map(element => element*element)
    // return newArray;
    return arr
            .filter(num => num <= 5)
            .map((num) => num*num)

}
test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);