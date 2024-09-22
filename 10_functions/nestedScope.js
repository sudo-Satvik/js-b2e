// CLOSURE: Closure means when the child function can access the variables of parent's function ~ Same also apply for if-else

function one(){
    const userName = "Satvik"
    function two() {
        const website = "github"
        console.log(userName);
    }
    // console.log(website);
    two()
}

one()           // Error: website not defined! ~ Scope issue


// ============INTERESTING==============
function addOne(value){
    return value++
}

console.log(addOne(5));

//  or

// Function expression
const addTwo = function(num){
    return num + 2;
}

console.log(addTwo(5));


// The main difference between them is : in normal function we can call the function before it's declaration but in function expression, we can't

