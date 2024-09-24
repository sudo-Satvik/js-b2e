//  nullish coalescing operator (??) : null and undefined
// use case: when fetching data from database

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;             
val1 = null ?? 10 ?? 15;        // First value should be assigned

console.log(val1);
