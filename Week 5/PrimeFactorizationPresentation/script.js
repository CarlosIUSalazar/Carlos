'use strict'
// Please don't delete the 'use strict' line above

//integer is the value for which we are finding prime factors
// let integer = 6000;

// let primeArray = [];
// let isPrime = ''

// //find divisors starting with 2

// for (let i = 2; i < integer/2; i++) {
//   if (integer % i == 0) {

//     //check if divisor is prime
//     for (let j = 2; j <= i / 2; j++) {
//       if (i % j == 0) {
//         isPrime = false;
//       } else {
//         isPrime = true;
//       }
//     }
//     //if divisor is prime

//     if (isPrime == true) {
//       //divide integer by prime factor & factor store in array primeArray
//       integer /= i
//       primeArray.push(i);
//     }
//   }
// }

// for (var k = 0; k < primeArray.length; k++) {
//   console.log(primeArray[k]);
// }


// let findPrimeFactors = (num) => {
//     let arr = [];


//     for ( var i = 2; i < num; i++) {
//         let isPrime
//         if (num % i === 0) {
//             isPrime = true;
//             for (var j = 2; j <= i; j++) {
//                 if ( i % j === 0) {
//                 isPrime == false;
//                 }
//             } 
//         }if (isPrime == true) { arr.push(i)}

//     }console.log(arr)
// }

// findPrimeFactors(200560490130)
// ======

// // Example: 24 -> 2, 3
// function* singlePrimeFactors (n) {
//     for (var k = 2; k*k <= n; k++) {
//         if (n % k == 0) {
//             yield k
//             do {n /= k} while (n % k == 0)
//         }
//     }
//     if (n > 1) yield n
// }

// // Example: 24 -> 2, 2, 2, 3
// function* repeatedPrimeFactors (n) {
//     for (var k = 2; k*k <= n; k++) {
//         while (n % k == 0) {
//             yield k
//             n /= k
//         }
//     }
//     if (n > 1) yield n
// }

// // Example: 24 -> {p: 2, m: 3}, {p: 3, m: 1}
// function* countedPrimeFactors (n) {
//     for (var k = 2; k*k <= n; k++) {
//         if (n % k == 0) {
//             var count = 1
//             for (n /= k; n % k == 0; n /= k) count++
//             yield {p: k, m: count}
//         }
//     }
//     if (n > 1) yield {p: n, m: 1}
// }

// // Test code
// for (var i=1; i<=100; i++) {
//     var single = JSON.stringify(Array.from(singlePrimeFactors(i)))
//     var repeated = JSON.stringify(Array.from(repeatedPrimeFactors(i)))
//     var counted = JSON.stringify(Array.from(countedPrimeFactors(i)))
//     console.log(i, single, repeated, counted)
// }

// // Iterating over a generator
// for (var p of singlePrimeFactors(24)) {
//     console.log(p)
// }

// // Iterating over a generator, an other way
// var g = singlePrimeFactors(24)
// for (var r = g.next(); !r.done; r = g.next()) {
//     console.log(r.value);
// }



// =====

// let result = [];
// let i = 2;
// let j = 2;
// let number = n;

// for (; i <= number; i++) {
//     let isPrime = number % i === 0;
//     if (isPrime) {
//         result.push(i);
//         number /= i;
//     }
//     while (isPrime) {
//         if (number % i === 0) {
//             result.push(i);
//             number /= i;
//         } else {
//             isPrime = false;
//         }
//     }
// }

// return result;



///=====

// function isPrime(n){
//     if (n === 1){
//       return false;
//     }
//       else if (n === 2){
//         return true;
//       }
//       else{
//       for (let x = 2; x < n; x ++){
//         if (n % x === 0){
//           return false;
//         }
//       }
//         return true;
//     }
//     }
    
//     let primeFac = []
//     let num = 2300
//     for (let x = 0; x <= num; x++){
//       if (num % x === 0 && isPrime(x) === true){
//     primeFac.push(x);
//       }
//     }
//     console.log(`${primeFac}`)


/// =====

// let number = 5656;
// function primeFactors(number){

//     for(let i=2; i <=number/i; i++){
//         console.log("i= " + i + " number= " + number);
//     }

//     while(number % i === 0){
//         number = number/i;
//         console.log("Factor= " + i);
//     }
// }

// if(number > 1) {
//     console.log("Last Factor = " + number);
// }


// primeFactors(5656);


function christmasTree(charac,h){

        for(var i=0; i<=h; i++){
          var star = '';
          //Changed to start high then decrease
          for(var k = 1; k <= h - i; k++){
            //shortened to one space
            star += " ";
          };
          for(var j=0; j<=i; j++) {
              //Added space so there is an odd number
              //of symbols and the star above fits
              //the space
              star += " "+charac;
          };
          //Moved into the loop
          console.log(star);
        };
      };
      
      //drawTree(5);


const expected1 = `T`;
test(christmasTree("T", 1), expected1);
const expected2 = ` +
+ +`;
test(christmasTree("+", 2), expected2);
const expected4 = `   
   #
  # #
 # # #
# # # #`;
test(christmasTree("#", 4), expected4);

// The newlines look strange in the tests, but the tree looks something like this:

//      T
//     T T
//    T T T
//   T T T T
//  T T T T T


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
