let btns = document.querySelectorAll("button");
for(btn of btns)
{
    btn.addEventListener("dblclick",sayHello);
    btn.addEventListener("dblclick",sayName);
}
function sayHello()
{
    alert("Helo!");
}
function sayName()
{
    alert("Adminstrator");
}
