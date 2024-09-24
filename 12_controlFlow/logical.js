// Logical Operator: Logical AND - &&, Logical OR - , Logical NOT - 

const userLoggedIn = true
const debitCard = true
const newsletter = false
const loggedInFromGoogle = false

// Checks for both
if (userLoggedIn && debitCard) {            // true + true = true
    console.log("Paid Course claimed");     // It will not run
}
if (userLoggedIn && newsletter) {           // true + false = false
    console.log("It will not work");        // It will not run
}

// Check for one to be true
if(userLoggedIn || loggedInFromGoogle){     // true + false = true
    console.log("Allowed to login");        // It will run
}