// ============================
// Part 1: Basics
// ============================

// Variable declarations
let name = "Mustapha";
let age = 23;
let isStudent = true;

// Conditional example
let basicsOutput = "";
if (age >= 18) {
  basicsOutput = `${name} is an adult student: ${isStudent}`;
} else {
  basicsOutput = `${name} is a minor.`;
}

// Show result on the webpage
document.getElementById("basics-output").textContent = basicsOutput;


// ============================
// Part 2: Functions
// ============================

// Function 1: Calculate total of numbers
function calculateTotal(a, b) {
  return a + b;
}

function showTotal() {
  let total = calculateTotal(10, 20);
  document.getElementById("total-output").textContent = "Total is: " + total;
}

// Function 2: Toggle message
let show = false;
function toggleMessage() {
  show = !show;
  let message = show ? "Hello, this is a toggled message!" : "";
  document.getElementById("message-output").textContent = message;
}


// ============================
// Part 3: Loops
// ============================

// Example 1: Countdown with for loop
let countdownList = document.getElementById("countdown-list");
for (let i = 5; i >= 1; i--) {
  let li = document.createElement("li");
  li.textContent = i;
  countdownList.appendChild(li);
}

// Example 2: Iterating an array with forEach
let fruits = ["Apple", "Banana", "Mango", "Orange"];
let fruitsList = document.getElementById("fruits-list");
fruits.forEach(fruit => {
  let li = document.createElement("li");
  li.textContent = fruit;
  fruitsList.appendChild(li);
});


// ============================
// Part 4: DOM Manipulation
// ============================

// 1. Change background color
document.getElementById("color-btn").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightblue" ? "#f4f4f4" : "lightblue";
});

// 2. Add new list item dynamically
document.getElementById("add-item-btn").addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "New Item " + (document.querySelectorAll("#dynamic-list li").length + 1);
  document.getElementById("dynamic-list").appendChild(li);
});

// 3. Show greeting when button clicked
document.getElementById("greet-btn").addEventListener("click", function() {
  document.getElementById("greet-output").textContent = "Welcome to JavaScript DOM Mastery!";
});
