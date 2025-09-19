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

// Let's understand now the prototype chain

const a = Object.getPrototypeOf({});

console.log(a)

// Classes are the functions
// they are shared behaviour methods

class Finals {
  constructor(id, name, subjects = []) {
    this.id = id;
    this.name = name;
    this.subjects = subjects;
  }
  addSubject() {}
};

const final = new Finals(1, "harman", 'math');
console.log(final.addSubject)

// Now I learned the share class features with extends

class Product {
  constructor(name, price, discountable) {
    this.name = name;
    this.price = price;
    this.discountable = discountable;
  }

  isDiscountable() {
    return this.discountable;
  }
};

// extends is used to inherit the methods and obj from the given classes

class SaleProduct extends Product {
  constructor(name, price, discountable, percentOff) {
// super() Think of super as a keyword that lets the child class talk to its parent class.
    super(name, price, discountable);
    this.price = percentOff; 
  }

  getSalePrice() {
    if (super.isDiscountable()) {
      return this.price * ((100 - this.percentOff));
    } else {
      return `${this.name} is not eligible`
    }
  }
}

const p = new SaleProduct('coffee maker', 99, true, 10);
console.log(p)

// CHATGPT exercise Basic Inheritance

class Vehicle {
  constructor(brand, wheels) {
    this.brand = brand;
    this.wheels = wheels;
  }
  // method
  describe() {
    return `This vehicel is a ${this.brand} with ${this.wheels} wheels`
  }
};

class Cars extends Vehicle {
  constructor (brand, wheels, fuelType) {
    super(brand, wheels)
    this.fuelType = fuelType;
  }

  describeFuel() {
    return `This car runs on ${this.fuelType}`
  }
}

const carType = new Cars('BMW', 4, 'electric');

console.log(carType)

console.log(carType.describe());      // This vehicle is a BMW with 4 wheels
console.log(carType.describeFuel());

