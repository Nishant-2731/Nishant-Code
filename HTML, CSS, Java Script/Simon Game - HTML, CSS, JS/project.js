let gameSeq = [];
let userSeq = [];

let btnName = ["red" ,"orange", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function()
{
    if(started == false)
    {
        console.log("started")
        started = true;

        levelUp();
    }
});

function gameFlash(btn)
{
    btn.classList.add("gameflash");
    setTimeout(function()
    {
        btn.classList.remove("gameflash");
    },250);
}
function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
    {
        btn.classList.remove("userflash");
    },250);
}

function levelUp()
{
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let ranIdx = Math.floor(Math.random()*4);
    let ranColor = btnName[ranIdx];
    let ranBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq)
    gameFlash(ranBtn);
}

function checkAns(idx)
{
    // console.log("Current Level :",level);
    if(userSeq[idx] === gameSeq[idx])
    {
        if(userSeq.length === gameSeq.length)
        {
            setTimeout(levelUp,1000);
            //Level Up
        }
    }
    else
    {
        reset();
    }
}

function btnPress()
{
    let btn = this;
    userFlash(btn);

    let userColor = btn.classList[1];
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
    // console.log(userColor);
    // console.log(userSeq);
}

let btns = document.querySelectorAll(".btn");
for(btn of btns)
{
    btn.addEventListener("click", btnPress);
}

function reset()
{
    h2.innerHTML = `Game Over! Your score was <b>${level}<b><br> Press any key to start`;
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    let body = document.querySelector("body");
    body.classList.add("overflash");
    setTimeout(function()
    {
        body.classList.remove("overflash");
    },250);
}

//Event Delegation Method - Works
// function btnPress(event)
// {
//     console.log(event.target.classList[1]);
//     let btn = event.target.classList[1];
//     let pressBtn = document.querySelector(`.${btn}`);
//     btnFlash(pressBtn);
// }

// let box = document.querySelector(".box");
// box.addEventListener("click", btnPress);