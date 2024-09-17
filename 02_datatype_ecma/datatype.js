/* There are 7 primitive datatypes
    1. Number: Range -2^53 to 2^53
    2. BigInt: No Range, depend upon the memory length
    3. Boolean: True or False
    4. Null: [standalone value] which is a intentional representation of empty value
    5. Undefined: variable is declared but not initialize
    6. String: group of letters, number, symbol
    7. Symbol: used for unique components
*/

// typeof "satvik": tell us about the datatype ~ String


// Important!!!!
console.log(typeof null);       // object
console.log(typeof undefined);  // undefined

// Examples

// String
let str = "Hello, world!";
console.log("String:", str); // Output: Hello, world!

// Number
let num = 42;
let floatNum = 3.14;
console.log("Number (Integer):", num); // Output: 42
console.log("Number (Float):", floatNum); // Output: 3.14

// Boolean
let isTrue = true;
let isFalse = false;
console.log("Boolean (True):", isTrue); // Output: true
console.log("Boolean (False):", isFalse); // Output: false

// Undefined
let undefinedVar;
console.log("Undefined:", undefinedVar); // Output: undefined

// Null
let emptyValue = null;
console.log("Null:", emptyValue); // Output: null

// Symbol
let sym = Symbol('id');
console.log("Symbol:", sym); // Output: Symbol(id)

// BigInt
let bigInt = 12345678901234567890n;
console.log("BigInt:", bigInt); // Output: 12345678901234567890n


