// For of loop

// Used to iterate over iterable objects like arrays, strings, or sets, returning the values of each item (e.g., elements in an array).
// works on iterable objects like arrays, strings, and other iterable structures (e.g., sets and maps) because it directly returns the values of each element in the iterable.

// for (const element of object) {              // object means kis chiz me lagana h loop
    // console.log(element)
// }

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    // console.log(`Value: ${num}`);
}

const greeting = "Good Evening!"

for(const greet of greeting){
    // console.log(`Each letter of greeting: ${greet}`);
}

// const number = 12232424

// for(const num of number){
//     // console.log(num);                // number is not iterable
// }


// Maps: just like array but have some extra features

const newMap = new Map()
newMap.set('IN', "India")
newMap.set('USA', "United States of America")
newMap.set('FR', "France")

// console.log(newMap);

// Iterating Map

// for (const key of newMap) {
//     console.log(key);    
// }

// above will not work correctly so I will do this instead!

// We'll use array de-structure

for(const [key, value] of newMap){
    // console.log(key + ":- " + value);
}

// const myObj = {
//     'game1': "NFS",
//     'game2': "GTA"
// }

// for(const [key, value] of myObj){
//     console.log(key, ":- ", value);                  // Object is not iteratable
// }