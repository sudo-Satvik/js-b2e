let score = "satvik"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "satvik"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);


// Cases of Job Interviews

// This is basic =========STRING CONCATENATION=========
let str1 = "Satvik"
let str2 = " Sharma"

// console.log(str1+str2)  // Satvik Sharma

// ===========================

console.log("1" + 2)          // => 12
console.log(1 + "2")          // => 12

console.log("1" + 2 + 2)      // => 122
console.log(1 + "2" + "2")    // => 122
console.log(1 + 2 + "2")      // => 32

console.log(true+"true");   // truetrue
console.log("true"+true);   // truetrue
console.log(true+true);     // 2

console.log(+true)          // 1
console.log(+"")            // 0


// Meanwhile this is also possible!

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2
// But this is not a good practice

