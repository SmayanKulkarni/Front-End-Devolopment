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

// for each keyword

let arr = [1,2,3,4,5,6,7,8,9]

arr.forEach(function (key) {
    if(key%2==0) console.log(key)
})

const doubles = arr.map(function (el){
    return 2*el
})

// some and every

const exam = [90,98,78,78,89,80,98]
exam.every(score=> score>=75)


// reduce function 

const price= [ 9.99, 1.50,5.99,9.99]
const total = price.reduce((total, price) => price + total)

price.reduce((min,price) => {
    if(price<min){
        return price
    }
    else return min
})

const evens = [2,4,6,8]

evens.reduce((sum, num) => sum + num, 10)   // here 10 is the initial value of sum

const person = {
    firstName: `Viggo`,
    lastName : `Mortenson`, 
    fullName: () => {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function() {
        setTimeout(function() {
            console.log(this.fullName()) // here `this` refers to the window object, so we get an error
        }, 3000)
}
}



