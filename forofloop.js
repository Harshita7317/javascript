// For of loop, mapping and arrayfind
// For of loop is a special kind of loop which is used specially in case of array or similar data types.

//this for loop is used to access array elemetns one by one
//for(let i=0;i<arr.length; i++){
//console.log(arr[i]);
//}
 
// For of loop is similar as, array mapping, array find

const practicearray=[ "Post 1","Post 2", "Post 3", "Post 4", "Post 5"];
// a similar kind of short for of loop can be achieved to do the same task
//for(let A of practicearray){
//    console.log( A,"of for of loop");
//}
//The variable a starts from first element of array and goes to last element by updating its value to next element one by one.

// array mapping 
// arrayname.map((candidate) =>{
    
//})

//practicearray.map((candidate) =>{
  //  console.log(candidate, "of mapping");

//});
// array find;
const findelement= practicearray.find((candidate) =>{
    return candidate ==="Post 4";
});
console.log(findelement);