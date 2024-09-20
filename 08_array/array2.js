let marvelHeros = ['Ironman', 'Thor', 'Spiderman']
let dcHeros = ['Superman', 'Batman', 'Wonderwoman']

// What if - ?
// marvelHeros.push(dcHeros)       // it just treated the fourth element as an dcHeros array
// console.log(marvelHeros);       
// console.log(marvelHeros[3][2]);     // selecting the inside array


let concat = marvelHeros.concat(dcHeros)            // merge two arrays
// console.log(concat)

// Spread operator (...) - kaanch ka glass

const all_heros = [...marvelHeros, ...dcHeros]
// console.log(all_heros)


// Flattening the array

const nestedArr = [1, 2, 3, [4, 5, 6],7, 8, [9, [10, 11, 12]]]
// console.log(nestedArr.flat(Infinity));                  // depth = Infinity


// Checking the given value is an array

console.log(Array.isArray("Satvik"))                      // false
console.log(Array.from("Satvik"))                         // converted into the array
// converting from object (key-pair value) to an array
console.log(Array.from({name: "Satvik"}))                 // Giving the empty array ~ Interesting for Interview

// Creating the array from given sort of arrays

let score1 = 100
let score2 = 200
let score3 = 300 

console.log(Array.of(score1, score2, score3));
