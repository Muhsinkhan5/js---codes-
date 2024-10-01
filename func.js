  //function in js


  function singHappyBirthday(){
    console.log("happy birthday to you.....");

  }
  function twoPlusFour(){
    console.log(2+4);
  }
const returnedValue = twoPlusFour();
console.log(returnedValue);


//parameters 
function sumTwoNumber(number1, number2){
    return number1 + number2;
}

//is even 
//input : true, false 

function isEven(number){
  return number % 2 ===0;
}

//console,log(is Even(4));
//function 
input : string 
output : firstCharacter 

function firstCharter(anyString){
    return anyString[o];

}
console.log(firstChar("zbc"));


// function 
//input : array , target (number)
//output : index of target if target present in array

function findTarget(array, target){
    for(let i = 0; i<array .lenght; i++){
        if (array[i]===target){
            return i;
        }
    }
    return -1;
}
const myArray= [1,3,2,4,4]
const ans = findTarget(myArray, 4);
console.log(ans);



 //function expression 
 const firstChar = function (anyString){
    return anyString[0];
 }
  const findTarget(array, target){
    for(let i = 0; i<array .lenght; i++){
        if (array[i]===target){
            return i;
        }
    }
    return -1;
}

//arrow function
// remove the function key words 
const singHappyBirtday = ()=>{
    console.log("happy birthday to you ...")

}
const sumThreeNumber = (Number1, number2, number3) => {
return number1 +number2 + number3 ;

}
const is Even = (number) => {
    return number % 2=== 0;

}

const firstChar = (anyString) => {
    return anyString[0];
}
const findTarget=  (anyString) => {
    return 
}

//this is more simple example of arrow function
const isEven = number => number % 2 === 0;
cont firstChar = anyString => anyString[0];


//hoisting 


function hello(){
    console.log("hello word");
}

console.log(hello);
const hello ="hello world";
console.log(hello);


//function inside function 
function app = () =>{
    const myFunc = () => {
        console.log("hello from myFunc")
    }

    const addTwo = (num1, num2) => {
        return num1 + num2;
    }
    const mul = (num1, num2)=> num1* num2;

    console.log("inside app");
    myFunc();
}
app();

//lexical scope
function myApp(){
    const myVar = "value";

    function myFunc(){
        const myVar= "value57";
        console.log("inside my Func",myVar);

    } 
    console.log(myVar);
    myFunc();
}
myApp();

//parametar
//object
//react

const person = {
    firstName: "muhsin",
    gender:"male",
}

function prindDatials(obj){
    console.log (obj.firstName);
    console.log(bj.gender)
}

function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}
printDetails(person);

//callback function 

function myFunc(){
    console.log(a);
    console.log('hello world');
}

function myFunc2(){
    console,log("inside my func 2")
}
function myFunc(a){
    console.log(a);
}
myFunc(myFunc2);

//function returning function

function myFunc(){
    return "a"; "0r" {name: "muhsin" age: "23"}


}

const ans =myFunc();
ans();




// important array methods 


const users = [
    {firstName: "muhsin", age: 23},
    {firstName: "khan", age:12},
    {firstName: "ali" ,  age:21},
]
user.forEach(function(user){
    console.log(user.firstName);
});
for(let user of users){
console.log(user.firstName);
}


