
// I practiced here how to use the var keyword in JavaScript with little french phrases
// je suis = I am
// je ai = I have
// ans = years

"use strict"; // Enables strict mode, which helps catch common coding errors 

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

// Lesson on Template Literals in JavaScript

let firstName = `Harmam`; // back ticks are used for template literals
let age = 25;
let greeting = `Hello, my name is ${firstName} and I am ${age}` // in order to use variables in a string, you can use ${variableName} inside back ticks
console.log(greeting);

// Template literals can also be used for multi-line strings
let multiLineString = `This is a string
that spans multiple lines.`;
console.log(multiLineString);