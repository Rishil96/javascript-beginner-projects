// Select important components from counter app
const count = document.querySelector(".count");

// Variables for bad method to listen to events
// const addButton = document.querySelector(".add");
// const resetButton = document.querySelector(".reset");
// const subtractButton = document.querySelector(".subtract");


/* Event delegation on parent class (Cool way of doing stuff) */
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    // Check if button with class add was targeted
    if (e.target.classList.contains("add")) {
        console.log("Add Button Pressed!");
        count.innerHTML++;
    }
    // Check if button with class reset was targeted
    if (e.target.classList.contains("reset")) {
        console.log("Reset Button Pressed!");
        count.innerHTML = 0;
    }
    // Check if button with class subtract was targeted
    if (e.target.classList.contains("subtract")) {
        console.log("Subtract Button Pressed!");
        count.innerHTML--;
    }
    // Function to change color of counter
    setColor();
})


// Function to set color of counter
function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = "yellow";
    }
    else if (count.innerHTML < 0) {
        count.style.color = "orangered";
    }
    else {
        count.style.color = "white";
    }
}

/*
// Event listener for every button (Poor way of doing stuff)

// Event listener to increment number in our counter based on click
addButton.addEventListener("click", () => {
    count.innerHTML++;
})

// Event listener to decrement number in our counter based on click
subtractButton.addEventListener("click", () => {
    count.innerHTML--;
})

// Event listener to reset number in our counter based on click
resetButton.addEventListener("click", () => {
    count.innerHTML = 0;
})
*/