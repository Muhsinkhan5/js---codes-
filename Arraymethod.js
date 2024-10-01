// 1 : push(element)
// adds an element to the end of he array.
/*
let array1 = [1, 2];
arr.push(3);
console.log(arr); // [1, 2, 3]
// example
*/
let array1 = ["a,b,c,d,e"];
array1.push("f");
console.log(array1);
/*
 2 : pop();
  Removes the last element from the array and returns it.
let array = [1, 2, 3];
arr.pop();
console.log(arr); // [1, 2]
example
*/
let array2 = ['muhsin','khan','asim'];
array2.pop('asim');
console.log(array2);


// 3 : shift()
// Removes the first element from the array and return it 
/*
let array3 = [1, 2, 3];
arr.shift();
console.log(arr); // [2, 3]
*/
let array33 = ['muhsin', 'khan', 'asim']
array33.shift('muhsin');
console.log(array33);

// 4: unshift (element)
// adds an element to the beginning of the array.
/*
let array4 = [2, 3];
arr.unshift(1);
console.log(arr); // [1, 2, 3]
*/
let array44 = ['muhsin', 'khan',];
array44.unshift('asim');
console.log(array44)

// 5 : concatenation (array)
// combine two or more arrays into one
/*
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4]
*/
let array55= ['muhsin','khan'];
let array66 = ['asim','khan'];
let newArray= array55.concat(array66);
console.log(newArray);


// 6 : join(separator)
// joins all element of an array into a string with specified separator.
/*
let array6 = [1, 2, 3];
console.log(arr.join("-")); // "1-2-3"
*/
 let array77 = ['muhsin', 'khan'];
 array77= array77.join("_");
 console.log(array77);


//7 : slice (start, end)
// Return a shallow copy of a portion of an array into a new array.
/*
let arr_ = [1, 2, 3, 4];
console.log(arr.slice(1, 3)); // [2, 3]
*/
let array88 = [1,2,3,4,5,6,7,8,9];
 array88=array88.slice(1, 5);
console.log(array88);


// 8: splice(start, deleteCount, item)
// adds/removes items to an array and return the removed items
/*
let arr_ay = [1, 2, 3];
arr.splice(1, 1, 4);
console.log(arr); // [1, 4, 3]
*/
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1, "mango");  // Replace 1 element at index 1
console.log(fruits);


// 9 : map(callback)
// creates a new array populated with the result of calling a function on every element in the array.

let arr3 = [1, 2, 3];
console.log(arr3.map(x => x * 2)); // [2, 4, 6]


// 10 : filter(callback)
// creates a new array with elements that pass the test implemented by the callback function

let array = [1, 2, 3];
console.log(array.map(x => x * 2)); // [2, 4, 6]


const numbers = [1,3,2,6,4,8];



 evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);


//let name_11 ="muhsin khan shalfalam" ;
//console.log(name_11.length)
//console.log(name_11.toUpperCase())
//console.log(name_11.trim());

//console.log(name_11.indexOf(5));
//console.log(name_11.reduce());

const arr = ["a","b","c","d"];
const new_1 = arr.reduce((a,b) => a+b);
console.log(new_1);


const arr11 = [1,2,3 ,4,5]
const new22 = arr11.map(x=> x* 4);
console.log(new22);

const arr33 =[1,2,3,4,5]
const new44 = arr33.filter(number % 0);
console.log(new44);
