const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const num1 = document.getElementById("number");
const URL = "https://quotes-api-self.vercel.app/quote";

async function getQuotes(e) {
    e.preventDefault();

    if (num1.value.length === 0) {
        return alert("Please enter a number.")
    }
    else {
        output = "";
        let num = num1.value;
        for (let i=0; i<num; i++) {
            console.log(num);
            await fetch(URL)
              .then(function(response) {
                return response.json();
              })
              .then(function(data) {
                output += `
                    <li>Quote: ${data.quote}</li>
                    <li>Author: ${data.author}</li>
                    <hr>
                `;
              })
        }

        document.querySelector(".quotes").innerHTML = output;
    }
}