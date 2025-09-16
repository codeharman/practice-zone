// I learned we use objects to store key value pairs and maps to store key value pairs with any type of key.

const blueColor = '#00f';
const redColor = '#f60';

const colors = {
  blue: blueColor, // key is blue and value is blueColor
  red: redColor, // key is red and value is redColor
}

console.log(colors);

// We can also use objectName.methodName to access the value of a key in an object.
console.log(colors.blue); // #00f
console.log(colors.red); // #f60

// I learned Primitives vs objects types
// there are technically 6 primitive types in JS
// string, number, boolean, null, undefined, symbol

// primitives - passed by value

let a = 3;
let b = a;

console.log(a === b); // true hence its passed by value

b = 5;
console.log(a, b);
console.log(a === b); // false

// objects - passed by reference

const obj1 = {};
const obj2 = {}; // obj2 is referencing the same object as obj1

console.log(obj1 === obj2); // false hence its passed by reference

// but even if one has value and other is reference to the same object

const obj3 = obj1; // obj3 is referencing the same object as obj1

console.log(obj1 === obj3); // true

obj3.name = 'Harman'; // adding a key value pair to obj3

console.log(obj1); // { name: 'Harman' } hence obj1 also has the key value pair as obj3 is referencing the same object as obj1
console.log(obj3); // { name: 'Harman' }

// I also learned [] to access the value of a key in an object
const key = {
  ['light blue']: "#F0F8FF",
  ['light red']: "#FFA07A"
}

console.log(key['light blue']); // #F0F8FF
console.log(key['light red']); // #FFA07A
console.log(key); // Full Answer

// I learned the Object Destructuring

// We are creating a social media and we want to store the 
// user information in an object

const user = {
  username: "harman",
  email: "name@email.com",
  name: "Harman"
}

// We can extract by putting the following
const {username, email} = user;

// We do not need to put the object and key we can directly extract the key value pairs
console.log(`Hi ${username} you have registered with email ${email}`);
