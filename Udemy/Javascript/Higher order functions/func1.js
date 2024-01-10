// Higher Order  functions

function callTwice(func) {
    func();
    func();
}

    function Tentimes(f){
    for(let i = 0;i<10;i++)
    {
        f();
    }
}

function rollldie()
{
    const roll =   Math.floor(Math.random()*6) +1;
    console.log(roll)
}


function makemysteryfunc(){
    const rand = Math.random();
    if(rand>0.5){
        return function(){
            console.log("COngrats");
        }
    }
    else{
        return function(){
            console.log("Nuh uh");
            console.log("Nuh uh");
            console.log("Nuh uh");
    }
}
}

// Methods

const mymath = 
{
    PI: 3.14159,
    square(n){return n*n},
    cube(n) { return n**3},
}

// 'this' keyword



const cat = {
    name: 'Blue Steele',
    color: "grey", 
    breed: "scottish fold",
    meow(){
        console.log(`${this.name} says MEOWWWW`);
    }
}

 