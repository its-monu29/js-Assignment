// quetion-1

var num = 19;

if(num>0){
    console.log(num+"  is a positive number")
}
else if(num<0){
    console.log(num+"  is a negative number")
}
else{
    console.log("number is zero(0)")
}


// question-2

var score = 89;

if(score>=90){
    console.log("Grade A")
}

else if(score>=70){
    console.log("Grade B")
}

else if(score>=55){
    console.log("Grade c")
}
else if(score>=40){
    console.log("Grade D")
}
else if(score>=30){
    console.log("Grade E")
}

else {
    console.log("Grade F")
}


// question- 3 
var requiredAge = 18;
var userage = 22;

if(requiredAge<=userage){
    console.log("you are an adult ");
}
else{
    console.log("you are minor")
}

// quetion-4
var year = 2024; // Example year

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


