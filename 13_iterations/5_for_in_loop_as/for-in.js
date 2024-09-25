const extensionName = {
    js: "JavaScript",
    cpp: "C++",
    rb: "Ruby",
    html: "HTML"
}

// Iterating only keys
for (const key in extensionName) {
    // console.log(key);
}

// Iterating both keys and values
for (const keys in extensionName) {
    // console.log(keys + ":- " + extensionName[keys]);
}


// Iterating arrays

const programming = ["JS", "Ruby", "Java"]

for(const language in programming){
    // console.log(language)                       // Prints the index of the array viz is key of array
    // console.log(programming[language])
}

// Iterating maps

const map = new Map();
map.set('JS', "JavaScript")
map.set('CPP', "C++")

// for(const [keys, values] in map){
//     console.log(keys, values)            // Not iterable
// }