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

