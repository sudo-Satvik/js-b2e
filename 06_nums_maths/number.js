const num = 100
console.log(num);

const score = new Number(200)       // use when if humko number hi chahiye sirf
console.log(score);

console.log(score.toString());      // used to convert num to string

const price = 28.32432
console.log(price.toFixed(2));      // limit the after decimal value to <param> size

console.log(price.toPrecision(2));  // precise krdeta h value, diye hue param ko left to right tkk

let hundreds = 100000000
console.log(hundreds.toLocaleString());         // provide international number of number representation
console.log(hundreds.toLocaleString('en-IN'));  // provided indian number representation

