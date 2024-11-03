h1 = document.querySelector("h1");
function changeColor(color, delay)
{
    return new Promise((resolve,reject)=>
    {
        setTimeout(()=>
        {
            let n = Math.floor(Math.random()*2)+1;
            if(n > 1)
            {
                reject("Promise Rejected");
            }
            else
            {
                h1.style.color = color;
                console.log(`Color Changed : ${color}`);
                resolve(`Color Changed`);
            }
        }, delay);
    });
}
async function waitChange()
{
    try
    {
        await changeColor("red",1000);    
        await changeColor("orange",1000);    
        await changeColor("yellow",1000);    
        await changeColor("green",1000);    
        await changeColor("blue",1000);
    }
    catch(err)
    {
        console.log("Error Caught");
        console.log(err);
    }
        
}
waitChange();
// h1 = document.querySelector("h1");
// function changeColor(color, delay)
// {
//     return new Promise((resolve,rejected)=>
//     {
//         setTimeout(()=>
//         {
//             h1.style.color = color;
//             resolve(`Color Changed : ${color}`);
//         }, delay);
//     });
// }
// changeColor("red",1000)
// .then((result)=>
// {
//     console.log("Result :",result)
//     return changeColor("orange",1000);
// })
// .then((result)=>
// {
//     console.log("Result :",result)
//     return changeColor("yellow",1000);
// })
// .then((result)=>
// {
//     console.log("Result :",result)
//     return changeColor("green",1000);
// })
// .then((result)=>
// {
//     console.log("Result :",result)
// });