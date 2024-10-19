// function savetoDb(data, success, failure)
// {
//     let internetSpeed = Math.floor(Math.random()*10) + 1;
//     if(internetSpeed > 4)
//     {
//         success();
//     }
//     else
//     {
//         failure();
//     }
// }
// savetoDb("Data",()=>
// {
//     console.log("Your data1 was saved : success1");
//     savetoDb("helo",()=>
//     {
//         console.log("Your data2 was saved : success2");
//         savetoDb("world",()=>
//         {
//             console.log("Your data3 was saved : success3");
//         },()=>
//         {
//             console.log("Weak Connection : Failure3");
//         })
//     },()=>
//     {
//         console.log("Weak Connection : Failure2");
//     });
// },
// ()=>
// {
//     console.log("Weak Connection : Failure1");
// });
function savetoDb(data)
{
    return new Promise((resolve,reject)=>
    {
        let internetSpeed = Math.floor(Math.random()*10) + 1;
        if(internetSpeed > 4)
        {
            resolve("Success : Data was saved");
        }
        else
        {
            reject("Failure : Weak Connection");
        }
    });
}

savetoDb("Data")
.then((result)=>
{
    console.log("Data1 save. Resolved");
    console.log(result);
    return savetoDb("Helo");    
})
.then((result)=>
{
    console.log("Data2 save. Resolved");
    console.log(result);
    return savetoDb("World");
})
.then((result)=>
{
    console.log("Data3 save. Resolved");
    console.log(result);
})
.catch((error)=>
{
    console.log("Promise was Rejected");
    console.log(error);
});