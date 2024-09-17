// < > = >= <= == !=

// But
// console.log("2" > 1);       // True: bcz js already converts it to the number
// console.log("02" > 1);      // True

// In js, equality "==" and comparative "> < >= <=" works differently

// console.log(null > 0);          // False
// console.log(null == 0);         // False
// console.log(null >= 0);         // True

console.log(undefined == 0);           // False
console.log(undefined > 0);            // False
console.log(undefined < 0);            // False
console.log(undefined >= 0);           // False
console.log(undefined <= 0);           // False

// TypeScript won't allow all these stuffs

// === : strict check! ~ also checks for the datatype
console.log(2 == "2");  // true
console.log(2 === "2"); // false

