// Higher order function of array

// Used to execute a provided function once for each element in an array.
// forEach only works on arrays, not on strings or objects, because it is a method specifically designed for array-like structures in JavaScript.

// Major problem solve easily is this
// ["", "", ""]
// [{}, {}, {}]

const coding = ["js", "ruby", "cpp"]

// Call back function : name of the function shouldn't be there

coding.forEach( function (e){
    // console.log(e);
} )

// using arrow function

// coding.forEach(() => {})

// also we can do iteration like this

function printMe(e){
    // console.log(e);    
}

coding.forEach(printMe)         // we should have to give the function reference not to call the function

// params: (element, index, array)


coding.forEach((e, i, a) => {
    console.log(`Element ${e} from index ${i} which is in ${a} array`);
    
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach((e) => {
    console.log(e.languageFileName);
})