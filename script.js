// List Search

const input = document.getElementById("search");

input.addEventListener("keyup", search);

// This function hides the list items that do not match search list
function search() {
    const inputVal = input.value;
    const li = document.getElementsByTagName("li");

    for (let i=0; i<li.length; i++) {
        if (li[i].innerHTML.toLowerCase().includes(inputVal)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}