// There are two ways to create an object, with no performance difference

// 1. Using literals

// 2. Using Constructor         a.k.a. Singleton


// In this, I'll learn about object literals

let varName = "Hii"

const jsUser = {
    name: "Satvik",
    email: "satvik@google.com",
    age: 20,
    salary: 10_000_000,
    isLoggedIn: false,
    lastLoggedIn: ["Mon", "Fri"],
    variable: varName
}

// There are two ways to access object's data

// console.log(jsUser.email)

// console.log(jsUser["email"])

// Let see the difference between them
 const objUser = {
    "full name" : "Satvik Sharma"
 }

//  console.log(objUser.full name)     // Not correct
// console.log(objUser["full name"])      // This will be get used in here

// How can we integrate symbol in a object literals
let mySym = Symbol('qna@123')

const symObj = {
    symObj : "keyhere",
    [mySym] : "anotherkey"
}

// console.log(typeof symObj[mySym]);

// How to change values
jsUser.email = "satan@google.com"

// How to stop changes
// Object.freeze(jsUser)           // Now values don't change and also don't show the error

jsUser.greeting = function(){
    console.log(`Hello ${this.name}`)       // this keyword here allow user to get access to all key-value pairs inside that object
}

// console.log(jsUser.greeting)        // We get reference of that function: [Function (anonymous)]
console.log(jsUser.greeting())      // Hello