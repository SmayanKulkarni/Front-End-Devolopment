let input=prompt("What would you like to do?")
const todos= [`maths syllabus`, `chemistry syllabus`]
while(input!==`quit` && input!==`q`)
{
    if(input===`list`){
        console.log(`******************`)
        console.log(`******************`)
        for(let i=0;i<todos.length;i++)
        {
            console.log(`${i} : Z${todos[i]}`)
        }
    }
    input=prompt("what would you like to do?")
}