let url = "http://universities.hipolabs.com/search?name="

let btn1 = document.querySelector(".countrySearch");
let btn2 = document.querySelector(".stateSearch");

btn1.addEventListener("click",async function()
{
    let countryInput = document.querySelector(".countryInput").value;
    let colArr = await getColleges(countryInput);

    let state = document.querySelector(".state");
    state.classList.remove("disp");

    showCountryCollege(colArr);
    // console.log(colleges);
});

btn2.addEventListener("click",async function()
{
    let stateInput = document.querySelector(".stateInput").value;
    let countryInput = document.querySelector(".countryInput").value;

    let colArr = await getColleges(countryInput);
    showStateCollege(colArr, stateInput);
    // console.log(colleges);
});


function showCountryCollege(colArr)
{
    let ul = document.querySelector(".list")
    ul.innerText = "";
    for(let col of colArr)
    {
        // console.log(col);
        let li = document.createElement("li");
        li.innerText = col.name;
        ul.appendChild(li);
    }
}

function showStateCollege(colArr, stateInput)
{
    let ul = document.querySelector(".list")
    ul.innerText = "";
    for(let col of colArr)
    {
        // console.log(col)
        if(col['state-province'] == stateInput)
        {
            let li = document.createElement("li");
            li.innerText = col.name;
            ul.appendChild(li);
        }
    }
}

async function getColleges(countryInput)
{
    try
    {
        let res = await axios.get(url+countryInput);
        return res.data;
    }
    catch(err)
    {
        console.log("Error :",err);
        return [];
    }
}