document.querySelector("body");

let p = document.createElement('p');
p.innerText = "Hey I'm red";
p.classList.add("red");

let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3";
h3.classList.add("blue")

let h1 = document.createElement('h1');
h1.innerText = "I'm in a div"

let newP = document.createElement('p');
newP.innerText = "ME TOO";

let div = document.createElement('div');
div.append(h1);
div.append(newP);
div.classList.add("bgborder");

document.querySelector("body").append(p);
document.querySelector("body").append(h3);
document.querySelector("body").append(div);