let maximum = parseInt(prompt("Enter a number: "))

while(!maximum)
{
    maximum=parseInt(prompt("Enter a number: "))
}

const targetNum= Math.floor(Math.random*maximum) +1;
console.log(targetNum);

let guess=parseInt(prompt("Enter your first guess: "));
let ctr=0;

while(guess!==targetNum)
{
    ctr++;
    if(guess>targetNum)
    {
        guess=parseInt(prompt("Too High! Enter a new guess"))
    }
    else{
        guess=parseIntpromp("Too low! Enter a new guess")
    }
}

console.log(`You got it! in ${ctr} guesses`) 