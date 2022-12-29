const createObject= (Name,email, number,address,age) =>{
   // let newobject={};
    newobject={
        username: Name ,
        emailid:email,
        userphonenumber:number,
        useraddress: address,
        userage: age,
    };
    return newobject;
};
const form=createObject("Harshita","harshita@123", 1223445, "gkp", 20);
console.log(form);



