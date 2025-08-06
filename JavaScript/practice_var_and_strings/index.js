
// I practiced here how to use the var keyword in JavaScript with little french phrases
// je suis = I am
// je ai = I have
// ans = years

var harman
harman = `je suis harman`
console.log(harman);

var harman2
harman2 = `je ai 25 ans`
console.log(harman2);

console.log(harman + ' ' + harman2);

// I practiced here how to use the let keyword in JavaScript, it can be reassigned like var but not redeclared like const

let count = 1;
count = 2;
count = 3;
console.log(count);

// const is used to decalre a constant var once, it cannot be reassigned or redeclared

const name = `harman`;
console.log(name);

// Blocking and scoping in JavaScript

let discount = 5
let memberDiscount = true;
if (memberDiscount) {
  const discount = 10;
  // This 'discount' is block-scoped
  console.log(`Member discount is ${discount}`);
}

console.log(`Regular discount is ${discount}`)
// This 'discount' is not affected by the block-scoped variable above


