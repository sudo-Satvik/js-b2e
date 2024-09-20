// Array - 

const arr = [1, 2, 3, 4]
const mixed = ["Satvik", 18, 1000.00, true]

const arr2 = new Array(0, 1, 2, "Satvik", true)
// console.log(arr2);


// Methods in the array

arr2.push(6)
// console.log(arr2)

arr2.pop()  // remove last value in the array
// console.log(arr2)

arr2.unshift(9)     // add 9 in the beginning of the array, but that's not good for the large size of the array
arr2.shift()        // remove first element of the array

// console.log(arr2);

// console.log(arr2.includes(9))       // false

// console.log(arr2.indexOf(9))        // -1

// console.log(arr2.join('-'));              // binds the array according to the param (if no param then , ) and converts array to string 

// Interview Important

let originalArr = new Array(1, 2, 3, 4, 5)

console.log("Slice Performed: " + originalArr.slice(0, 3))              // Cut out the element from 'start' index to 'end-1' index
console.log("A: " + originalArr)                                        // No change in the original array

console.log("Splice Performed: " + originalArr.splice(0, 3));           // Cut out the element from start index to end index
console.log("B: " + originalArr)                                        // In the original array, the rest from the cut off element occured
