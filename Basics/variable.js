const id=123456
let mail="tejas@g.com"
var name="Tejas"//dont use var as it has issues with block scope
let ufo; //if variable is not specified it gives output as "undefined" LINE 11
city="Mumbai"
console.log(id)
//Every value can change except "const"
city="Kalyan"
var name="Superman"
console.log([mail,name,city]) //print multiple things
console.table([mail,name,city,ufo])//print in tabular form 