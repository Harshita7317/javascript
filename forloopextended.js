//Iteration means one cycle of for loop before the update of i;
//We can customize our own update algorithm. i.e Update in the value of i

//Break statment => Break statement instantly terminates the for loop and comes outside of it.
 for(let i=0; i<10; i++)
 {
    if(i === 5){
        continue;
    }
 console.log("I am outside of for loop");
}
console.log("I am ");