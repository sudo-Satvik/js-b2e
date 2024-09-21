const tinderUser = new Object()

// console.log(tinderUser)         // {}

// Nested objects

let user = {
    fullname: {
        firstname: "Satvik",
        secondname: "Sharma"
    },
    email: "satvik@google.com"
}

// console.log(user.fullname?.firstname)               // Here '?' means it is used to check that fullname is present or not

const obj1 = {1 : "a", 2 : "b"}
const obj2 = {3 : "c", 4 : "d"}

// console.log(obj1 + obj2)                            // [object Object][object Object]
// console.log({obj1, obj2})                           // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// So it's the actual way we can concatenate it
const obj3 = Object.assign({}, obj1, obj2)          // param as braces is optional but it's recommended to use it because it creates the object in that {} instead of obj1
// console.log(obj3)

// Also we can use spread operator
const obj4 = {...obj1, ...obj2}                     // Easy and recommended to use it
// console.log(obj4)

// When value came from Database
const users = [
    {
        key1: "value1"
    },
    {
        key2: "value2"
    }
]
console.log(users[1].key2);

// Considering this object

const jsUser = {
    name: "Satvik",
    email: "satvik@google.com",
    age: 20,
    salary: 10_000_000,
    isLoggedIn: false,
    lastLoggedIn: ["Mon", "Fri"]
}


// If I want to print all the keys from this object : returns array of keys
console.log(Object.keys(jsUser))

console.log(Object.entries(tinderUser))     // Array inside array, with key and value


// Check for key
console.log(jsUser.hasOwnProperty('isLoggedIn'));
