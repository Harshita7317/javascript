for(let index= 0; index< 10; index++)
{
    console.log("The value of index is", index);
}
console.log("Hello from outside the loop");

// uses of for loop
// to print or access all the elements of an array.

let A=["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"];
console.log(A.length);
for(let i=0; i< A.length; i++)
console.log("The element at index",i ," of the array is",A[i]);

/*Whenever we want to print a sentence that consists of one or more variables
1- then we separate them by comas.
2-use template literals
Rule 1- `` to enclose whole sentence
put variables inside ${variable}
*/
let staticsentence ="Hello,this is Harshita Mishra";
console.log(staticsentence);

let dynamicsentence="Hello I am from";
let clgname="MMMUT";
console.log("Hello I am form", clgname);
  //another way
  console.log(`Hello I am from ${clgname}`);