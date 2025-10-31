// CMPM 121 Smelly Code Activity

// This variable keeps track of the counter
let counter = 0;

// These constants are for button IDs and heading text
const headingText = "CMPM 121 Project";
const counterText = "counter";
const incText = "increment";
const decText = "decrement";
const resetText = "reset";

function setup() {
  // Create the HTML for the counter
  document.body.innerHTML = `
    <h1>${headingText}</h1>
    <p>Counter: <span id="${counterText}">0</span></p>
    <button id="${incText}">Click Me!</button>
    <button id="${decText}">Decrement</button>
    <button id="${resetText}">Reset</button>
  `;

  // Get the increment button element from the document
  const incButton = document.getElementById(incText);
  // Get the decrement button element from the document
  const decButton = document.getElementById(decText);
  // Get the reset button element from the document
  const resetButton = document.getElementById(resetText);
  // Get the counter span element from the document
  const counterElement = document.getElementById(counterText);

  // Check if any element is missing, then exit the function
  if (!incButton || !decButton || !resetButton || !counterElement) return;

  // Add click event to the increment button
  incButton.addEventListener("click", () => {
    // Increase the counter by 1
    counter++;
    // Call to update UI
    updateUI();
  });

  // Add click event to the decrement button
  decButton.addEventListener("click", () => {
    // Decrease the counter by 1
    counter--;
    // Call to update UI
    updateUI();
  });

  // Add click event to the reset button
  resetButton.addEventListener("click", () => {
    // Reset the counter to 0
    counter = 0;
    // Call to update UI
    updateUI();
  });

  function updateUI() {
    // Check if the counter element is missing, then exit the function
    if (!counterElement) return;
    // Update the counter display
    counterElement.innerHTML = `${counter}`;
    // Update the document title
    document.title = "Clicked " + counter.toString();
    // Change the background color based on even/odd count
    document.body.style.backgroundColor = counter % 2 ? "pink" : "lightblue";
  }
}

// Call setup to initialize the UI
setup();
