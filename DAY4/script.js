//EXE1
//1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let userAge = prompt("Enter your age");
let ageDiff = 18 - userAge;
if (userAge >= 18) {
  alert("You are old enough to drive");
} else {
  alert(`Wait for ${ageDiff} years `);
}

//2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let yourAge = prompt("Enter your age");
console.log(yourAge);
let myAge = 30;
ageDiff = yourAge - myAge;
if (myAge > yourAge) {
  console.log("I'm older than you");
} else {
  console.log(` You are ${ageDiff} years older than me `);
}

//3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.

let a = 4;
let b = 3;
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("a is less than b");
}

a > b ? console.log("a is greater than b") : console.log("a is less than b");

//4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let n = prompt("Enter a number");
if (n % 2 == 1) {
  alert(`${n} is odd`);
} else {
  alert(`${n} is even`);
}

//EXE2

//1 Write a code which can give grades to students according to theirs scores:

let score = prompt("Enter your score");
if (score > 79 && score < 101) {
  alert("your grade is A");
} else if (score > 69 && score < 80) {
  alert("your grade is B");
} else if (score > 59 && score < 70) {
  alert("your grade is C");
} else if (score > 49 && score < 60) {
  alert("your grade is D");
} else alert("your grade is F");

/* 2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer*/

let month = prompt("Enter Month: ");

switch (month) {
  case "September":
  case "October":
  case "November":
    alert("the season is Autumn");
    break;

  case "December":
  case "January":
  case "February":
    alert("the season is Winter");
    break;

  case "March":
  case "April":
  case "May":
    alert("the season is Spring");
    break;

  case "June":
  case "July":
  case "August":
    alert("the season is Summer");
    break;
}

//3 Check if a day is weekend day or a working day. Your script will take day as an input.

let day = prompt("What is").toLowerCase();
if (day == "saturday" || day == "sunday") {
  console.log("${day} is a weekend!");
} else console.log("${day} is a working day");

//EXE3
