// var date = new Date();

// console.log(date.toString());
// console.log(date.toTimeString());
// console.log(date.toUTCString());

// create your own data
var date2 = new Date(2020, 2, 8, 19, 48, 49, 9);

console.log(date2.toString());

// with time value in milliseconds
// var date3 = new Date(1192169216977);
// console.log(date3.toString());

// with date time string
// var d4 = new Date("2015-03-02");
// console.log(d4.toString());

// var d5 = new Date("Mar 06 2020 ");
// console.log(d5.toString());

// GETTERS
// get date
console.log(date2.getDate());
// get day
console.log(date2.getDay());
// get month
console.log(date2.getMonth());
// get year
console.log(date2.getFullYear());

// SETTERS
date2.setDate(7);
console.log(date2.toISOString());

var start = new Date();
doSomething();
var end = new Date();

var elapsed = end.getTime() - start.getTime();

function doSomething() {
  for (var i = 0; i < 1000000; i++);
}

console.log(elapsed);
