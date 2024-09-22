if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);                 // won't run bcz of block-level scoping
// console.log(b);                 // also won't run
console.log(c);                    // it will run, that's why we try to avoid that


// Global Level Scoping
var x = 12;
let y = 13;
let z = 15;


if (true) {
    var x = 14;
    let y = 15;
    z = 18;
}


console.log(x);                    // 14
console.log(y);                    // 13
console.log(z);                    // 18 ~ because it's re-assigned inside the block scope
