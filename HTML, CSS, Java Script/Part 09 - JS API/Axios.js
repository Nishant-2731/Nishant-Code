let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click",async function()
{
    let p = document.querySelector("div p")
    p.innerText = await getCatFacts();
});

let url1 = "https://catfact.ninja/fact";

async function getCatFacts() 
{
    try
    {
        let res = await axios.get(url1);       
        return res.data.fact;       
    }
    catch(err)
    {
        console.log("Error :",err);
        return "No Fact Found"
    }
}
let btn2 = document.querySelector(".btn2");
btn2.addEventListener("click",async function()
{
    let img = document.querySelector("div img")
    img.src = await getDogImages();
});

let url2 = "https://dog.ceo/api/breeds/image/random";

async function getDogImages() 
{
    try
    {
        let res = await axios.get(url2);       
        // console.log(res);     
        return res.data.message;       
    }
    catch(err)
    {
        console.log("Error :",err);
        return "No Fact Found"
    }
}

// let url = "https://catfact.ninja/fact";

// async function getFacts() 
// {
//     try
//     {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);
        
//         res = await fetch(url);
//         data = await res.json();
//         console.log(data.fact);
//     }
//     catch(err)
//     {
//         console.log("Error :",err);
//     }
// }
// getFacts();