/*Stack
Primitive
When used we get a copy of the variable declared
original value doesn't change*/

let v1= 100
let v2= v1
v2=200
console.log(v1);
console.log(v2);

/*Heap
Non-primitive
When used we get reference value (ie. whatever changes we make are sceen)
Originaal value does change*/
 let u1={
    name:"Tejas"
 }
 let u2= u1
 u2.name="Goat"
console.log(u1.name);
console.log(u2.name);

 