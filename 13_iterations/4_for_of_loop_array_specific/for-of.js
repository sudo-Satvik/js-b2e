// For of loop

// ["", "", ""]
// [{}, {}, {}]

// for (const element of object) {              // object means kis chiz me lagana h loop
    // console.log(element)
// }

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(`Value: ${num}`);
}

const greeting = "Good Evening!"

for(const greet of greeting){
    console.log(`Each letter of greeting: ${greet}`);
}

// const number = 12232424

// for(const num of number){
//     // console.log(num);                // number is not iterable
// }


// Maps: just like array but have some extra features

const newMap = new Map()
newMap.