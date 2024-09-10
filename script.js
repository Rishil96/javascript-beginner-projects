// Vowel Counter

// Selector variables
const btn = document.querySelector(".btn");
const res = document.querySelector(".result");

// Add event listener
btn.addEventListener("click", getVowelCount);

// Event listener function
function getVowelCount() {
    // Get word from frontend
    const word = document.querySelector(".input-text").value;

    // Count vowels
    let count = 0;
    for (let w of word.toLowerCase()) {
        if ((w == "a") || (w == "e") || (w == "i") || (w == "o") || (w == "u")) {
            count++;
        }
    }

    // Print result in frontend
    res.innerHTML = `The number of vowels in ${word.toUpperCase()} is ${count}.`
}