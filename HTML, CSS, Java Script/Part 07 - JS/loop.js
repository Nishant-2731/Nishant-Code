let max = prompt("Enter the max limit :");
const  random = Math.floor(Math.random()*max)+1;
while(true)
{
    let guess = prompt("Guess : ");
    if(guess == "quit")
    {
        console.log("quitting");
        break;
    }
    if(random == guess)
    {
        console.log("Correct");
        break;
    }
    else if(guess > random)
    {
        console.log("Your guess was too large, please try again");
    }
    else
    {
        console.log("Your guess was too small, please try again");
    }
}