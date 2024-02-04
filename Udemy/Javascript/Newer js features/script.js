 // default parameters

 function mult(a,b=2)
 {
    return a*b;
 }

 mult(3,4) // 12
 mult(2) // 4

 //spread
   let arr=[1,2,4,6,7,8,8]

   console.log(arr)
   console.log(...arr)
   const cats=['Blue', 'Scout', 'Rocket']
   const dogs = ['Rusty', 'Wyatt']
   const allpets = [...cats, ...dogs]
   const feline = {legs: 4, family: 'Felidae'};
   const canine = {legs: 4, family: 'Caninae'}
 
   // rest 

   function raceresults(gold, silver, ...everyoneElse)
   {
      console.log(`GOLD MEDAL GOES TO: ${gold}`)
      console.log(`SILVER MEDAL GOES TO: ${silver}`)
      console.log(`Thanks to everyone else: ${everyoneElse}`)
   }

   // destructuring 

   const user = { 
      email: "a.gmail.com",
      password:" password", 
      firstname: " Smayan", 
      lastname: " Kulkarni"
   }

const {email,password,firstname,last} = user;            
   
function fullName(user)
{
   
}



