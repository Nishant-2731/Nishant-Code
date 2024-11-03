let input = document.querySelector("input");
input.addEventListener("keydown",function(event)
{
    // console.log("Code :",event.code);
    // console.log("key :en",evt.key);
    // console.log("key pressed")
    if(event.code == "ArrowLeft")
    {
        console.log("Character Moves Left");
    }
    else if(event.code == "ArrowRight")
    {
        console.log("Character Moves Right");
    }
    else if(event.code == "ArrowUp")
    {
        console.log("Character Moves Forward");
    }
    else if(event.code == "ArrowDown")
    {
        console.log("Character Moves Backward");
    }
});