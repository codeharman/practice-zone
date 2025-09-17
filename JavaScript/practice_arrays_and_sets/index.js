// Build Flexible collections with Arays

const toDos = []; // we have to change {} for obj and [] for the 

const toDo1 = {
  text: 'Wash the dishes',
  complete: false
}

toDos[1] = toDo1;

console.log(toDos);

 const toDo2 = {
  text: `write code`,
  complete: true
 };

 toDos[2] = toDo2;

 console.log(toDos);

// this shows that objects are good when we know somehting but not when we don't know
// array stores the order of things
// const a = []; this is array
// const b = {}; this is object

// other way of combining the results are

toDos.push(toDo1, toDo2); // we use push to combine the things
toDos.pop(); // to remove the last thing

console.log(toDos);

// I learned the check element existence in arrays

const temp = [53, 35, 23, 23];

// index is the position of the array

console.log(temp.indexOf(53)); // tells you the index is 0 which means first
console.log(temp[1]); // tells us what temperature by putting the index number 

// but what if we put the number which doesn't exist

console.log(temp.indexOf(49) > -1); // here -1 means the number doesn't exist
// but the better version is includes

console.log(temp.includes(50));

// but what if there is more items inside the arrays

const newTemp = [
  {temp: 99, isRecordHigh: true}, // please note I wrote obj here
  {temp: 70, isRecordHigh: false}
];

console.log(newTemp.some(newTemp => newTemp.isRecordHigh === true)); // .some tells us if there is one thing that is matching inside a given containers


// but how can we update all the values, well we can use the map function

const oldTemp = [
  {temp: 77, isRecord: false},
  {temp: 221, isRecord: true}
];

// we are using map here inside the function
console.log(oldTemp.map (oldTemp => {
  oldTemp.isRecord = true;
  return oldTemp;
})); // the result will come true for both

// I also learned the ternaries basically the short form of if else

  const he = [
    {married: 'harman', status: false},
    {married: 'john', status: true}
  ];

  const newHe = he.map (he => {
    he.status === true ? {...he, message: 'congrats'} : he 
    return he
  });

  console.log(newHe);

  // .forEach we use to kind of make custom output

  newHe.forEach(he => {
    if (he.status) {
      console.log(`The following person: ${he.married} is married`);
    }
  });

// I learned the subsets of arrays
// like to filter the things up

const restaurants = [
  {name: 'baro', location: 'Toronto'},
  {name: 'king taps', location: 'Toronto'}
];

// here we use the filter to filter the array
// Also we can use the find method to find the things particularly

const results = restaurants.filter(restaurant => restaurant.name.startsWith('b'));
console.log(results);

// I learned .reduce and types like acc etc

const menu = [
  {item: 'burger', price: 20},
  {item: 'pasta', price: 10},    
  {item: 'noodle', price: 30},
];

const final = menu.reduce((acc, menu) => {
  return acc + menu.price;
}, 0);

console.log(final)

