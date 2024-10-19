let input = document.createElement("input");
let button = document.createElement("button");

document.querySelector("body").append(input);
document.querySelector("body").append(button);

button.innerText = "Click Me";

input.placeholder = "username"
button.setAttribute("id","btn");

document.getElementById("btn").style.backgroundColor = "blue";
document.getElementById("btn").style.color = "white";

let h1 = document.createElement("h1");
document.querySelector("body").append(h1);

h1.innerText = "DOM Practice"
h1.classList.add("head");

let p = document.createElement("p");
document.querySelector("body").append(p);

p.innerHTML = "Apna College <b>Delta</b> Practice"