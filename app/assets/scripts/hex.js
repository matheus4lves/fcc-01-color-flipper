const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// DOM manipulation
const btn = document.getElementById("btn");
const colorText = document.querySelector(".color");

// Event handling
btn.addEventListener("click", () => {
  let color = generateRandomColor();
  colorText.textContent = color;
  document.body.style.backgroundColor = color;
});

// Function definiton
function generateRandomColor() {
  let colorHEXCode = "#";
  for (i = 0; i < 6; i++) {
    colorHEXCode += hex[Math.floor(Math.random() * hex.length)];
  }
  return colorHEXCode;
}
