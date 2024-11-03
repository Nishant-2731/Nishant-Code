let A = prompt("Enter a word : ");
A = A.toLowerCase();
let newA = [];
for (let i = 97; i <= 122; i++) 
{
    let char = String.fromCharCode(i);
    if(A.indexOf(char) == -1)
    {
        continue;
    }
    newA += char;
}

console.log(`Old String : ${A} New String : ${newA}`)