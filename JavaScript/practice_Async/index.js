// The Problem with the Callbacks

// The code gives the current position but it will log in second position
// The reason being is coz of the async
navigator.geolocation.getCurrentPosition(position =>
{console.log(position)}
);

// The below code give output first before the upper one
console.log('done'); 

// setTimeout() - delay a particular thing to do the function
// addEventListener() - mouse click

// I made example to learn the setTimeout()

console.log('start');

setTimeout(() => {
  console.log('after 2 seconds');
}, 2000)

// addEventListener()

const body = document.querySelector('body')

body.addEventListener('click', () => {
  body.innerText = 'button clicked'
});

// callbacks -> promises
// promises give us the control
// A Promise is either fullfilled or rejected

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000)
});

console.log(promise);
promise.then(value => console.log(value)).catch(value => console.log(value));

// when resolve is called .then() will work
// when reject is called .catch() will work

// Make Network Requests with the fetch()

// API - application programming interface: software to communicate with other software
// API - is helpful service

// CRUD - how data is used commonly in applications

// Create - post
// read - get
// update - put / patch method
// delete - delete request

// http://jsonplaceholder.typicode.com/posts

// The data we will get is JSON - JS object notation
// fetch()

// documentation -> jsonplaceholder.typicode.com

// we are making the GET request

fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
  }) // remember if it is successfull .then we need to tell what data
  .then(data => console.log(data)) // then we get the real result here
  .catch(error => console.error(error))

