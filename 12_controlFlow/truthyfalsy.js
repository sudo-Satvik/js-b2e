// const userEmail = "s@satvik.ai"         // truthy value
const userEmail = ""                       // falsy value
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

/* Falsy Values:
    1. false
    2. 0
    3. -0 : for interview
    4. BigInt - 0n
    5. '' or ""
    6. null and undefined
    7. NaN
 */

/* Truthy Values:
    1. "0"
    2. "false"
    3. " "
    4. []
    5. {}
    6. function(){}
*/

// What if I want to check for the array or object to be empty

let arr1 = []
// Generally it execute
if(arr1){
    console.log("Unfortunately, this will execute");
}

if(arr1.length !== 0){
    console.log("This will not execute");
}

let emptyObj = {}

if(Object.keys(emptyObj).length !== 0){
    console.log("object is empty and this will not get run");
}


// false == 0       true
// false == ''      true
// 0 == ''          true

