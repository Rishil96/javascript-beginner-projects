// HTTP Requests
/*
    ajax : Asynchronous JavaScript and XML is old way to making asynchronous requests.
    fetch: is a recent way to make HTTP requests.
*/

const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

/* Ajax Implementation */
btn.addEventListener("click", getUsers);

function getUsers(e) {
    e.preventDefault();
    const http = new XMLHttpRequest();
    http.open("GET", "users.json", true);
    http.onload = function() {
        if (this.status === 200) {
            const users = JSON.parse(this.responseText);
            console.log(users);
            let output = "<h3>Using Ajax</h3>";

            users.forEach(function(user) {
                console.log(user)
                output += `
                    <hr>
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Age: ${user.age}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `;
            });

            document.getElementById("users").innerHTML = output;
        }
    }
    http.send();
}


/* Fetch Implementation */
btn2.addEventListener("click", getUsersFetch);

function getUsersFetch(e) {
    e.preventDefault();
    fetch("users.json")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            let output = "<h3>Using Fetch</h3>";

            data.forEach(function(user) {
                console.log(user)
                output += `
                    <hr>
                    <ul>
                        <li>ID: ${user.id}</li>
                        <li>Name: ${user.name}</li>
                        <li>Age: ${user.age}</li>
                        <li>Email: ${user.email}</li>
                    </ul>
                `;
            });

            document.getElementById("users").innerHTML = output;
        });
}