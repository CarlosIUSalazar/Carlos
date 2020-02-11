'use strict'
// Please don't delete the 'use strict' line above

'use strict'
// Please don't delete the 'use strict' line above

// Your code here
let resultArray = [];


function getItemsInRefrigerator(){
    return resultArray;
}


test(getItemsInRefrigerator(), []);


function putItemInRefrigerator(item){

    resultArray.push(item);
    console.log(resultArray)
    return resultArray;

}

putItemInRefrigerator("milk");
test(getItemsInRefrigerator(), ["milk"]);




putItemInRefrigerator("juice");
test(getItemsInRefrigerator(), ["milk", "juice"]);


function removeItemFromRefrigerator(itemToRemove){

    for(let i = 0; i<resultArray.length; i++){
        if (resultArray[i] === itemToRemove){
            resultArray.splice( resultArray.indexOf(itemToRemove), 1 )  // Removes One element of the array https://www.hostingadvice.com/how-to/javascript-remove-element-array/
        }
    }



}

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);




removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);






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


