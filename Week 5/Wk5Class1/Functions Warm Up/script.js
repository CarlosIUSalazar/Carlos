'use strict'
// Please don't delete the 'use strict' line above

'use strict'
// Please don't delete the 'use strict' line above

// Your code here
let refrigerator = [];


function getItemsInRefrigerator(){
    return refrigerator;
}


test(getItemsInRefrigerator(), []);


function putItemInRefrigerator(item){

    refrigerator.push(item);
    console.log(refrigerator)
    return refrigerator;

}

putItemInRefrigerator("milk");
test(getItemsInRefrigerator(), ["milk"]);




putItemInRefrigerator("juice");
test(getItemsInRefrigerator(), ["milk", "juice"]);


function removeItemFromRefrigerator(itemToRemove){

    for(let i = 0; i<refrigerator.length; i++){
        if (refrigerator[i] === itemToRemove){
            //refrigerator.splice( refrigerator.indexOf(itemToRemove), 1 )  // Removes One element of the array https://www.hostingadvice.com/how-to/javascript-remove-element-array/
            refrigerator.splice(i,1);
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


