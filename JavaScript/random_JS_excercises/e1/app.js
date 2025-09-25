// Exercise: Random Color Code Generator

// Write the js function that makes random color generator starting with the #

// Build the function

// Generate a 6-digit hex color for each box.
// Loop 6 times, picking random hex digits from the array and building the string.
// Update the span elements with the generated colors.

// ✅ Challenge:
// Make sure each color starts with #.
// Bonus: After generating the color, also set the background of the span to that color.

// hexdigits characters

const hexDigits = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

// getting the elements

let colorGenerator = document.getElementById('color-btn');
let firstColor = document.getElementById('first-color');
let secondColor = document.getElementById('second-color');

// event listener button

colorGenerator.addEventListener('click', randomColor);

// random color function 

function randomColor() {
  let length = 6;
  let firstCol = '';
  let secondCol = '';
  
  for (let i = 0; i < length; i++) {
    firstCol += hexDigits[Math.floor(Math.random() * hexDigits.length)]
    secondCol += hexDigits[Math.floor(Math.random() * hexDigits.length)]
  }

  firstColor.textContent = `#${firstCol}`
  secondColor.textContent = `#${secondCol}`

  
}