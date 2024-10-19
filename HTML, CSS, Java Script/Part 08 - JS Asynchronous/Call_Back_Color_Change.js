h1 = document.querySelector("h1");

function changeColor(color, delay)
{
    return new Promise((resolve,rejected)=>
    {
        setTimeout(()=>
        {
            h1.style.color = color;
            resolve(`Color Changed : ${color}`);
        }, delay);
    });
}
changeColor("red",1000)
.then((result)=>
{
    console.log("Result :",result)
    return changeColor("orange",1000);
})
.then((result)=>
{
    console.log("Result :",result)
    return changeColor("yellow",1000);
})
.then((result)=>
{
    console.log("Result :",result)
    return changeColor("green",1000);
})
.then((result)=>
{
    console.log("Result :",result)
});

// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange)
// {
//     setTimeout(()=>
//     {
//         h1.style.color = color;
//         if(nextColorChange)
//         {
//             nextColorChange();
//         }
//     }, delay);
// }

// changeColor("red", 1000, ()=>
// {
//     changeColor("orange", 1000, ()=>
//     {
//         changeColor("green", 1000);
//     });
// });