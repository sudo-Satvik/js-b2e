// Nesting in for loop is possible

for(let i = 1 ; i <= 2 ; i++){
    // console.log(`Outer loop: ${i}`)
    for(let j = 1 ; j <= 2 ; j++){
        // console.log(`Inner Loop: ${j} and Outer loop: ${i}`);
    }
}


// Multiplicative Table

// Consider user want multiplicative table of 5

let userInput = 9343

for(let i = 1 ; i <= userInput ; i++){
    for(let j = 1 ; j <= 10 ; j++){
        if(i === userInput){
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}
