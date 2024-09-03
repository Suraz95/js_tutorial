// console.log("hello world")
// var
// let
// const

// if (true) {
//     let a;
//     var b;
//     const c=23;
//     c=27
//     console.log(c)
// }
// console.log(b)

/*

    Data Types

    Primitive data types
    +++++++++++++++++++++++++++++++++++++++++++++++++
    1. NULL
    2. Undefined
    3. Number
    4. String
    5. Boolean
    6. Symbol
    7. BigInt

    non Primitive datatypes
    +++++++++++++++++++++++++++++++++++++++++++++++++++++++

    1. Arrays
    2. Objects
 */

// let a1 = null;
// let a2;
// let a3 = 123;
// let a4 = 'anil';
// let a5 = true;
// let a6 = BigInt(1234567876543212345678)
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)
// console.log(a6)
//  internally Null datatype is Object
// console.log(typeof a1)
// console.log(typeof a2)
// console.log(typeof a3)
// console.log(typeof a4)
// console.log(typeof a5)
// console.log(typeof a6)
//  Symbol returns a unique value
// let s1 = Symbol(50);
// let s2 = 50;
// console.log(s1==s2)
// let num1 = 5
// let num2 = '5'
// console.log(num1 == num2);
//  == only checks value doesnot check datatype , but === checks datatype and value
// objects
// let student = {
//     name: "Anil",
//     age: 21,
//     occupation:"hero"
// }
// console.log(student.age,student["name"])
//  loops
/*
    1. for loops
    2. while loop
    3. do while loop
    4. for in loop  -  object
    5. for of       - iterabels (string,arrays)
*/

// let student = {
//     name: "Anil",
//     age: 21,
//     occupation:"hero"
// }
// for (let key in student) {
//     console.log(student[key])
// }
// let str = "Anil"
// let arr=[10,20,30]
// for (let i of arr) {
//     console.log(i)
// }
// for (let i in arr) {
//     console.log(i)
// }


