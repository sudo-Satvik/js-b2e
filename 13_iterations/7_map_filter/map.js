const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Adding 10 in each number

// const newNums = myNum.map( (num) => num + 10)

// console.log(newNums);

// Chaining ~ 2-3 methods ek saath use krlena
// .map().filter()
// .map().map()

// map() transforms each element, whereas filter() selects some elements based on a condition.

const newNums = myNum.map((num) => num + 10).map((num) => num * 2).filter((e) => e > 25);

console.log(newNums);

