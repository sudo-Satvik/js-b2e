//  Date is an object

// console.log(new Date());    // \2024-09-19T16:06:08.647Z ~ Not easily readable by us

// console.log(new Date().toString());    // Now better to read

// console.log(new Date().getDate());       // Returns Date

// console.log(new Date().getDay());        // Returns Day

// console.log(new Date().getFullYear());   // Return Year

// console.log(new Date().toDateString());  // Thu Sep 19 2024

// console.log(new Date().toLocaleDateString());  // 9/19/20244
console.log(new Date().toLocaleString('default', {
    weekday: 'short',                            // Narrow: T, short: Thu, long: Thursday
    timeZone: 'Asia/Kolkata',
}));


// console.log(new Date().toLocaleString());      // 9/19/2024, 4:39:14 PM
// console.log(new Date().toLocaleString("05:30"));      // 9/19/2024, 4:39:14 PM

// console.log(new Date().toTimeString());         // 16:40:01 GMT+0000 (Coordinated Universal Time)

// let customDate = new Date(2023, 14, 23)             // Months -> 0 - 11
// let customDate = new Date(2023, 14, 23, 5, 3)
let customDate = new Date("2026-03-23")
console.log(customDate.toString());


let timeStamp = Date.now()
console.log(timeStamp);                             // Return milisec from 01, 01, 1970
console.log(customDate.getTime());                  // Return milisec of that date
// Now we can compare it easily

console.log(Date.now()*1000);                       // Return date in sec from 1970 to now

