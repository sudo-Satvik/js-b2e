console.log(Math.PI.toFixed(4));       // prints pie value

console.log(Math.abs(-5));             // - ko + me change krdeta h but + ko - me nhi

console.log(Math.round(4.3));          // 4
console.log(Math.ceil(4.1));           // 5
console.log(Math.floor(4.9));          // 4

console.log(Math.max(4,3,6,8));
console.log(Math.min(4,3,6,8));

console.log(Math.random());            // Random btwn 0 to 1
console.log(Math.random()*10);         // if we want a number left to decimal (0 - 9)
console.log((Math.random()*10) + 1);   // if we don't want 0                  (1 - 10)

const rangeMin = 20
const rangeMax = 40

console.log(Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin);
