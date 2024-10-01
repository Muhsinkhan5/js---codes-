// loops 
// we use loop to perform repeated actions 
// for example 
// if you are assigned a task of printing number from 1 to 100 it will be
// hectic to do it manually 
// loops help us automate such task
// 




// for lo0p
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

for(let i = 0; i < 10; i++){
    console.log(i);
}


// e.g

const fruits =['apple', 'banana', 'orange'];

for (let i =0; i< fruits.length; i++){
    console.log(fruits[i]);
}

// for of loop

let fruits1 = ["apple","banana", "orange"];
for(const fruit of fruits1){
    console.log(fruit);
}

//forEach method

const fruits2= ["apple", "banana","orange"];

fruits2.forEach(function(fruit){
    console.log(fruit);
});

// fo in loop
// it is mainly use in object

const person = {nem: "muhsin", age:23, city: "khall"};

for(let key in person){
    console.log(key + ":" + person[key]);
}


// Nested loop

for (let i = 1; i <= 5; i++){
    let row = "";
    for(let j = 1; j<= 5; j++){
        row += (i * j) + "";
    }
    console.log(row);
}


// while loop 
// with break 

// let i = 0;

// while(i < 10){
//     console.log(i);
//     if(i === 10){
//         break;
//     }
//     i++;
// }


// while loop
// with continue
 let k = 0;
 
 while(k < 10){
    k++;
    if(k % 2 === 0){
        continue;
    }
    console.log(k);
 }



 //
 let count = 1;

do {
    console.log(count);
    count++;
} while (count <= 5);


