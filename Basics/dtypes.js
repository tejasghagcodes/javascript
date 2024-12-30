//Interview questions
/*
Primitive type
Call  by value
7 types:
String,null,number,boolean,undefined,symbol,BigInt
*/
const id= Symbol("12")
const id1= Symbol("12")
console.log(id == id1) //false

num = 1234567890n // n specifies that the number is bigint

/*
Reference/non primitive type
Array,objects,functions
*/
let arr=["t","e","j"]  //datatype=object

let obj={                //object is like strcture in c
    name:"tejas",        //after one variable put ,
    age: 18
}

const fn= function(){         //declare
    console.log("Print it");  //define
    
}                                       //datatype of function is object function
fn(); //calling function

//Js is dynamicaly typed language since we dont have to specify the datatype explixitly








