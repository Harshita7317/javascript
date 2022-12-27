
const operations =( a,b, type)=>{
    let c;
   if(type==="add"){
     c=a+b;
   }
   else if(type==="sub"){
     c=a-b;
   }
   else if(type==="mul"){
     c=a*b;
   }
   else if(type==="div"){
     c=a/b;
    }
   return c;
};
 let sol1=operations(5, 6, "add");
 console.log(sol1);
 let sol2=operations(6, 4,"sub");
 console.log(sol2);
 let sol3=operations(5, 6,"mul");
 console.log(sol3);
 let sol4=operations(12, 3,"div");
 console.log(sol4);

