// If statement is true or not, return true or false

const harman = true;

if (harman) {
  console.log("harman is good");
} else {
  console.log("harman is bad");
}

// now we can also use else if statement 
// we use this when we have multiple conditions to check

const age = false;
const isAdult = false;

if (age) {
  console.log("Harman is 18 years old");
} else if (isAdult) {
  console.log("Harman is an adult");
} else {
  console.log("harman is not an adult");
}

// I learned here switch case statement with default and break

const day = "Wednesday"; // so when I change it to different weekdays that answer changes

switch (day) {
  case "Monday":
    console.log("Mardi");
    break;
  case "Tuesday":
    console.log("Mercredi");
    break;
  default:
  console.log("Jeudi");
}

// if else but in ? short conditions with ternaries

const harmanAge = true;

const isHarmanAdult = harmanAge ? "Harman is an adult" : "Harman is not an adult";

console.log(isHarmanAdult);

// the next thing today I learned is how to use the even shorter conditionals with the short-circuiting

const french = "bonjour";

const greeting = french || "hello";

console.log(greeting);

// So to make my learning more fun, I made one challenge below
// Excercise: coffee shops order system

const orderSize = true;

const orderType = orderSize ? "$5" : "$3";

console.log(orderType);



const drink = "latte";

switch (drink) {
  case "espresso":
    console.log("Total order is $7");
    break;
    case "latte":
      console.log("Total otder is $8");
      break;
      case "cappuccino":
        console.log("Total order is $9");
        break;
      default:
        console.log("Total order is $6");
}


const customerOld = false;
const customerStudent = true;

if (customerOld) {
  console.log("You will get 20% discount");
} else if (customerStudent) {
  console.log("You will get 10% discount");
} else {
  console.log("Sorry no discount for you");
}

const customerName = "";

const customerDefault = customerName || "guest";

console.log(customerDefault);

const customerCoupon = "";

const customerDiscount = customerCoupon && "10% off your order";

console.log(customerDiscount);