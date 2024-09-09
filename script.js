// Palindrome Checker

const btn = document.querySelector(".btn");
const res = document.querySelector(".result");


// Event listener
btn.addEventListener("click", checkPalindrome);

function checkPalindrome() {
    // Get word and start and end index of word
    const wordSelector = document.querySelector(".input-text");
    const word = wordSelector.value.toLowerCase();
    let start = 0;
    let end = word.length - 1;

    // Update result based on if word is palindrome or not
    let isPalindrome = true;
    while (start < end) {
        if (word[start] == word[end]) {
            start++;
            end--;
        }
        else {
            isPalindrome = false;
            break;
        }
    }
    
    // Update result on screen based on if word is palindrome or not
    if (isPalindrome) {
        res.innerHTML = `${word.toUpperCase()} is a palindrome`; 
    }
    else {
        res.innerHTML = `${word.toUpperCase()} is not a palindrome`;
    }
}