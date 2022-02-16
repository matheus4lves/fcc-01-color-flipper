const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// DOM manipulation
const btn = document.getElementById("btn");
const colorText = document.querySelector(".color");

// Event handling
btn.addEventListener("click", function () {
  // Generate random number from 0 to 3
  let idx = getRandomInt(colors.length);
  // Set the color of the body to be the drawn color
  document.body.style.backgroundColor = colors[idx];
  // Set background color text equal to the drawn color text
  colorText.textContent = colors[idx];
});

// Function definition
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
