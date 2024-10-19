// let form = document.querySelector("form")
// form.addEventListener("submit",function(event)
// {
//     event.preventDefault();
//     // console.log(form.elements[0].value);
//     // console.log(form.elements[1].value);
//     console.log(this.elements[0].value);
//     console.log(this.elements[1].value);

//     // let user = document.querySelector("#user");
//     // let pass = document.querySelector("#pass");
//     // console.log(user.value);
//     // console.log(pass.value);
//     // alert("Form Submitted");
// }); 

let user = document.querySelector("#user");
user.addEventListener("change",function()
{
    console.log("Change Event");
    console.log("Final Value :",this.value );
});
user.addEventListener("input",function()
{
    console.log("Input Event");
    console.log("Final Value :",this.value );
});
