let ul = document.querySelector("ul");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
btn.addEventListener("click",function()
{
    let task =  document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");
    task.innerText = inp.value;
    task.appendChild(delBtn);
    // ul.insertAdjacentElement("beforeend",task);
    ul.appendChild(task)
    inp.value = "";
    //Works
    // delBtn.addEventListener("click",function()
    // {
    //     let par = this.parentElement;
    //     par.remove();
    // });
});
ul.addEventListener("click",function(event)
{
    if(event.target.nodeName == "BUTTON")
    {
        let par = event.target.parentElement;
        par.remove();
    }
});