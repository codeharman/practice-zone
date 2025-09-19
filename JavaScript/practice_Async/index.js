// Make network reqest with fetch()

// API - Application Programming Interface

// CRUD
// Create - Post
// Read - Get
// update - Put / Patch
// delete - Delete

// http://jsonplaceholder.typicode.com/posts
// JSON - JavaScript Object Notation
// fetch(url)
//  jsonplaceholder.typicode.com

// so lets get started 

const h = fetch('https://jsonplaceholder.typicode.com/posts/1');
console.log(h) // it will give you the Promise
  .then(response => response.json())
  .then(data => console.log(data.title))