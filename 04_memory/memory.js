// Example of Stack Memory!!!

let myName = "SatvikSharma"
let anotherName = myName
anotherName = "MayankSharma"

// console.log(myName);            // SatvikSharma - Doesn't change because anotherName gets the copy of the myName
// console.log(anotherName);       // MayankSharma

// Example of Heap Memory!!!
let userOne = {
    name: "Satvik Sharma",
    upi: "satviksharma@ybl"
}

let userTwo = userOne

userTwo.name = "Mayank"

console.log(userOne);           // Changed ~ because the userTwo get the original value of it
console.log(userTwo);           // name: "Mayank"
