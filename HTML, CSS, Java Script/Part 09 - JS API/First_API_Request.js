let url = "https://catfact.ninja/fact";

async function getFacts() 
{
    try
    {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data.fact);
        
        res = await fetch(url);
        data = await res.json();
        console.log(data.fact);
    }
    catch(err)
    {
        console.log("Error :",err);
    }
}
getFacts();
// fetch(url)  // Returns a promise in the form of response
// .then((res)=>
// {
//     // console.log(res);
//     return res.json();
// })
// .then((data1)=>
// {
//     console.log(data1.fact);
//     return fetch(url);
// })
// .then((res)=>
// {
//     // console.log(res);
//     return res.json();
// })
// .then((data2)=>
// {
//     console.log(data2.fact);
// })
// .catch((err)=>
// {
//     console.log("Error :", err);
// });