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
    case "Wednesday":
      console.log("Jeudi");
}

