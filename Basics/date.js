//Date is an object

const day = new Date()
// console.log(day.toJSON());
// console.log(day.toLocaleDateString());
// console.log(day.toTimeString());

//let day2=  new Date(2025, 0, 23 ) //date(yy,mm,dd,hr,min,sec,)
let day2=  new Date("1-28-2025")  //mm/dd/yyyy
//let day2=  new Date("2025-1-10")   //yyyy/mm/dd
//console.log(day2.toLocaleDateString());

let Ts= Date.now()
// console.log(Ts);
// console.log(day2.getTime());

//Convert to millisecond
//console.log(Math.floor(Date.now()/1000));

let day3 =new Date()
// console.log(day3.getMonth()+1); //+1 to get to normal index 
// console.log(day3.getDay(+1));// Same goes for day

day3.toLocaleString('default',{
    weekday:"short",
    month:"long"
})
//





