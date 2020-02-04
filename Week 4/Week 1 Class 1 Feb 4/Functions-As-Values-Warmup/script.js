'use strict'
// Please don't delete the 'use strict' line above

const names = ["ichi", "ni", "san", "yon"];

for (let i = 0; i < 4; i++) {
    for (let j = 0; j < names.length; j++) {
      for (let k = 1; k < 3; k++) {
        console.log(names[j]);
      }
    }
  }


  for (let i = 0; i < 2; i++) {
    console.log("a: " + i);
    for (let i = 0; i < 2; i++) {
      console.log("b: " + i);
      for (let i = 0; i < 2; i++) {
        console.log("c: " + i);
      }
    }
  }


  function add(){
    let x = 5;
    return function(y) {
      return x + y;
    };
  }

  console.log("add is ", add());


  const foo = add();
  console.log(typeof foo);


  const bar = foo(10);


  function foo5(){
    return console.log(5);
  }

  console.log(foo5())