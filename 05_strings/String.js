// We can concatenate the string by using string interpolation

let name = 'Satvik'
let course = "BCA"

let concatenate = `Hello, I'm ${name} and I'm from ${course}`
// console.log(concatenate);

// console.log(course[0]);     // Can also be done by the traditional method of string declaration

// Another method of String declaration

let name2 = new String("Mayank")

// console.log(name2);         // [String: 'Mayank']

// console.log(name2.length);  // 6

// console.log(name2.charAt(0));           // Index to character

// console.log(name2.indexOf('a'));        // Postion of element from start
// console.log(name2.lastIndexOf('a'));    // Position of element from end

const subString = name2.substring(1, 3)         // 'Mayank' to 'ay' element picked from 1nd and 2nd index
// console.log(subString);

const anotherString = name2.slice(-2, 3)             // Same as substring but it includes the negative values too
// console.log(anotherString);

const newString2 = "   satvik"              // string with extra spaces and line terminator '\n', used in user input
// console.log(newString2);
// console.log(newString2.trim());

const url = "https://satviksharma.com/satvik%20sharma"
// console.log(url.replace('%20', '-'));

console.log(url.includes('satvik'));            // checks for satvik in the string

console.log(url.split(' '));


