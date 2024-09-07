// Random Hex Color Generator

// Get required selectors
const hexColor = document.querySelector(".hex-color");
const generateBtn = document.querySelector(".generate");


// Function to generate hex color randomly
const generateHexColor = () => {
    const randomHexColor = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = `#${randomHexColor}`;
    hexColor.innerHTML = `#${randomHexColor}`;
}


// Add event listener
generateBtn.addEventListener("click", generateHexColor);
