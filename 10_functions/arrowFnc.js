// NOTE: this KEYWORD ALSO WON'T WORKS HERE

const arrFnc = () => {
    console.log("basic arrow function");
}

arrFnc()

// Explicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}


// Implicit return
// const addThree = (num1, num2, num3) => num1 + num2 + num3
// or
const addThree = (num1, num2, num3) => (num1 + num2 + num3)             // Useful in the react.js


// we can return the object like this too

// const objReturn = () => {username: "Satvik"}             // Error
const objReturn = () => ({username: "Satvik"})              // Right