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