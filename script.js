// ex 1
//var favoriteColor = prompt(
// `What's your favorite color?`
//);

//console.log(
//  `Your favorite color is ${favoriteColor}.`
//);

//ex 2
//var name = prompt(`What your name?`);

//var birthYear = Number(
//  prompt(`What year were you born in?`)
//);

//var d = new Date();
////var n = Number(d.getFullYear());

//var age = n - birthYear;

//console.log(`Hi ${name}! You're ${age}.
//`);

//ex 3
var hourlyWage = Number(
  prompt(`What's your hourly wage?`)
);

var hoursWorked = Number(
  prompt(`How many hours do you work a week?`)
);

var weeklyPay = hourlyWage * hoursWorked;

console.log(
  `Hi there! You made $${weeklyPay} this week!`
);
