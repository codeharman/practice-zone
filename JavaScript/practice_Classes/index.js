// Learned what are the constructor functions?

// first example we are in the school

const student1 = {
  id: 1,
  name: "Reed",
  subjects: [],
  addSubject(subject) {
    this.subjects = [...this.subjects, subject];
  }
}

// so if we add the subject
student1.addSubject('Computer Science');

// So if we console log it should come as the computer science
console.log(student1.subjects);

// constructor function - they start with the capital letter
function Hello(id, name, subjects = []) {
  this.id = id;
  this.name = name;
  this.subjects = subjects;
};

// we need to add the new in front for the output

console.log(new Hello(1, 'harman', 'maths'));

// excercise to master the constructor 

// E:1 a Constructor function that creates object when used with new

function Car(model, year) {
  this.model = model;
  this.year = year;
};

const car1 = new Car("bmw", 2001);
const car2 = new Car('toyota', 2008);

console.log(car1)