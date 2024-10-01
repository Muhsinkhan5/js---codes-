// conditional statement 
// use if to specify a block of code to be executed if a specify condition is true
// Use else to specify a block of code to be executed if the sam condition is false
// Use else if  to specify a new condition to test if the first condition is false 
// Use (Switch) to specify many alternative block of codes to be executed


// if
let time = 18;
if(time<18){
console.log("good day");
}

let number = 20;
if(number > 10){
    console.log('the number id greater thn 10');
}


let a = 50;
if(a == 50){
    console.log(" the a is equal to b");
}

let value = 100;
if (value > 0 && value == 100){
    console.log("the value is positive number and equal to 100");
}


// else 

let number1 = 40;
if(number1 >= 45 ){
    console.log("your are pass");
}else{
    console.log("your are fail");
}


let age = 18;
if(age >= 20){
    console.log("your adult");
}else{
    console.log("your are man");
}

let number3 = 7;
if(number % 2 ===1){
    console.log("number is even")
}else{
    console.log("number is odd");
}

// else if
// it is use for multiple condition

let  grade = 60;
if(grade >= 95){
    console.log("grade A+");
}else if(grade>=80){
    console.log("grade A");
}else if(grade>= 70){
    console.log("grade B");
} else{
    console.log("your fail");
}

let time1 = 24 ;
if(time1 < 18){
    console.log("good morning");
}else if(time1 < 12){
    console.log("good afternoon")
}else{
    console.log("good evening");
}



// switch 
 let day = 3;

switch(day){
    case 1:
    console.log("monday");
    break;
    case 2: 
    console.log("tuesday");
    break;
    case 3: 
    console.log("wednesday");
    break;
    case 4 : 
    console.log("thursday");
    break;
    case 5:
        console,log("friday");
        break;
    case 6:
    console.log("saturday");
    break;
    case 7:
        console.log("sunday");
        break;
   default:
    console.log("invalid day")
}
