function isSorted(array) {
    // Your code here.

    let bool = '';
    let compare = array[0];

    for (const item of array){
        if (compare <= item) {
            bool = true;
            compare = item;
        } else {
            bool = false;
        }
    }
    return bool;
  }
  