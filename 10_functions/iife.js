// Immediately Invoked Function Expression ~ jaise hi function likha, waise hi turant run krwana h toh hum iife ko use krenge
// Use case: database connection, which helps to avoid global scope pollution
// first parenthesis: where we write the function, 
// second parenthesis: which is used to execute the function
// ()()

// semi-colon is must here to end the context

// Named IIFE
(function dbConnection(){
    console.log("Database connected");
})();

// Unnamed IIFE
( (name) => {
    console.log(name + " db connected");
})("ChaiaurCode");