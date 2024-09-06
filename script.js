// Random Number Generator

// Required selectors on frontend
const number = document.querySelector(".random")
const generateBtn = document.querySelector(".generate")

// Generate random number function
const generateRandomNumber = () => {
    // Generate number between 1 and 10
    const num = Math.floor(Math.random() * 10 + 1);
    return num;
}


// Add event listener to create click event on generate button
generateBtn.addEventListener("click", () => {
    const newNumber = generateRandomNumber();
    console.log(`Generated ${newNumber}`);
    number.innerHTML = newNumber;
});
