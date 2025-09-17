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
