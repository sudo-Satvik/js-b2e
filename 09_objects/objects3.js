// Object destructuring
const course = {
    coursename: 'Js in hindi',
    price: 'free',
    teacher: 'hitesh'
}

const {coursename : cn, price} = course

console.log(cn);
console.log(price);
