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

// I learned Dead simple promises with asynce-await


// async always return the promieses
async function getPost() {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');  
   const data = await response.json();
   console.log(data);
}

getPost();

// Async and await excersize to learn from the CHATGPT

async function getPost2() {
  const post = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  const answer = await post.json();
  console.log(answer);
}

async function getPostsSequential() {
  const post1 = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post2 = await fetch('https://jsonplaceholder.typicode.com/posts/2');
  const post3 = await fetch('https://jsonplaceholder.typicode.com/posts/3');
  
  const data1 = await post1.json();
  const data2 = await post2.json();
  const data3 = await post3.json();

  console.log(data1);
  console.log(data2);
  console.log(data3);
}

getPostsSequential()

// Try and Catch

async function getPost3() {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');  
   const data = await response.json();
   console.log(data);
  } catch (error) {
    console.log("sorry error occured", error)
  }
}

getPost3();