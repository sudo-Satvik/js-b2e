// Use to avoid code repeatation and make the stuffs reusable

function sayMyName(){
    console.log("Hello Satvik")
}

sayMyName()

function sum(num1, num2){
    return num1 + num2
}

console.log(sum(1, 3))

// We can assign default value for param which will be overwritten by the arguments

function userLogin(userName = "User"){
    return `${userName} just logged in!`
}

console.log(userLogin());
