var age = 21
var gender = "female";

if(gender==="male"){
   
    if(age>=21 || age>18){
        console.log("Eligible for marriage, hurry up meet you parent")
    }else{
        console.log("Your age is not meeting legal criteria")
    }
}
else if(gender==="female"){
    
    if(age>=18){
        console.log("Eligible for marriage, hurry up meet you parent")
    }
    else{
        console.log("Your age is not meeting legal criteria")
    }
}
else{
    console.log("Invalid gender")
}