// When we don't know how many params are there to pass in the fnc, we use Rest Operator:- (...paramName)

function calculateCartPrice(...prices){
    return prices
}

console.log(calculateCartPrice(12, 14, 15, 64))

function calculateCartPrices(val1, val2, ...prices){
    return prices
}
console.log(calculateCartPrices(12, 14, 15))

// Passing the object as an param in the function

const user = {
    userName: "Satvik",
    userEmail: "satvik@google.com",
    userAge: 20
}

function handleObjects(userObj) {
    console.log(`Name of the user is: ${userObj.userName} who is ${userObj.userAge} years old!`);
}

handleObjects(user)                 // Instead we can also create the object as an argument!

const arr = [200, 400, 500, 600]

function fncArr(getArr){
    return getArr[1]
} 

console.log(fncArr(arr));           // // Instead we can also create the array as an argument!
