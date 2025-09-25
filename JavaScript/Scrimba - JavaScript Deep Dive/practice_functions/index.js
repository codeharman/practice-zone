// Here I learned why we need functions at the first place

// I learned that functions has the scope inside it and outside that scopre it is not accessible

name = "Harman"

function hello() {
  console.log(`${name} is a good`)
}

hello()

// another example is the += operator

let count = 0

function increment() {
  count += 1
  console.log(count)
}

increment()
increment()
increment()

// another example of the -= operator

let points = 100

function decrement() {
  points -= 10
  console.log(points)
}

decrement()
decrement()
decrement() 

// the other concept I learned was the document.getElementById() method but we don't have any html so I will learn it later

// another thing I learned was the innerText property but again I don't have any html so I will learn it later

// Also learned that functions only worked under the scope not outside of it

// We are learning the Closures and why it matters

// eg like count

let likes = 0;

function addLike() {
  likes += 1;
  console.log(likes);
}

addLike();

// but the var "let" can be changes as it is outside
// the solution is to put inside the function

function newLike() {
  let likes = 0;
  return function addlike() {
    likes += 1;
    return likes;
  }
}

// we cannot invoke the newLike() because it will return the function addlike
// not the value of likes, think like it is factory but needs to know the product (variable)
// so we need to store it in a variable

const actualLike = newLike();
console.log(actualLike()); // 1
console.log(actualLike()); // 2
console.log(actualLike()); // 3

// this is how closures works
// why we use it, to make the JS remember the values
// the inner function has access to the outer function's variable even after the outer function has executed
// this is useful for data encapsulation and creating private variables

// now we are learning the better functions with default parameters
// we are making the weather converter app here

function convertTemp(celsius) {
  // celsius to fahrenheit
  const temp = celsius * 1.8 + 32;
  return Number(temp.toFixed(2)); // rounding to 2 decimal by using the toFixed method
}

console.log(convertTemp(21));

// We are learning the shorter functions with the arrow functions
// =>

  const username = "Harman";

  const greet = (name) => 
    `Hello, My name is ${username}`

  console.log(greet(username));

// if there is only one parameter we can remove the parenthesis
