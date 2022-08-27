//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
const firstName = "sulyman";
console.log(typeof firstName); //string
const lastName = "yasir";
console.log(typeof lastName); //string
const country = "saudi arabia";
console.log(typeof country); //string
const city = "ilorin";
console.log(typeof city); //string
const age = 18;
console.log(typeof age); //number
const isMarried = true;
console.log(typeof isMarried); //boolean
const year = 2018;
console.log(typeof year); //number

//2 Check if type of '10' is equal to 10
console.log(typeof "10" === 10); //false

//3 Check if parseInt('9.8') is equal to 10
console.log(parseInt(9.8) === 10); //false

//4 Boolean value is either true or false.
//Write three JavaScript statement which provide truthy value.
//Write three JavaScript statement which provide falsy value.
var trut = console.log(2 > 1); //true
var truth = console.log(3 > 2); //true
var truthy = console.log(4 > 3); //false

var fal = console.log(2 < 1); //false
var fals = console.log(3 < 2); //false
var falsy = console.log(4 < 3); //false

//5 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//Find the length of python and jargon and make a falsy comparison statement.
4 > 3; // true
4 >= 3; // true
4 < 3; // false
4 <= 3; // false
4 == 4; // true
4 === 4; // true
4 != 4; // false
4 !== 4; // false
4 != "4"; // false
4 == "4"; // true
4 === "4"; // false
var gon = "jargon".length;
var thon = "python".length;
console.log(gon != thon);

//6 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//There is no 'on' in both dragon and python

4 > 3 && 10 < 12; // true;
4 > 3 && 10 > 12; // false;
4 > 3 || 10 < 12; // true;
4 > 3 || 10 > 12; // false;
!(4 > 3); // true;
!(4 < 3); // false;
!false; // true;
!(4 > 3 && 10 < 12); // true;
!(4 > 3 && 10 > 12); // false;
!(4 === "4"); // false;

var string = "there is no 'on' in dragon and python";
console.log(!"dragon".includes("on") && !"python".includes("on")); //false

//7 Use the Date object to do the following activities
//What is the year today?
//What is the month today as a number?
//What is the date today?
//What is the day today as a number?
//What is the hours now?
//What is the minutes now?
//Find out the numbers of seconds elapsed from January 1, 1970 to now.

var date = new Date();
console.log(date); //Fri Aug 12 2022 16:33:31 GMT+0100 (West Africa Standard Time)
console.log(date.getFullYear()); //2022
console.log(date.getMonth()); // 7
console.log(date.getDate()); // 12
console.log(date.getDay()); // 5
console.log(date.getHours()); //16
console.log(date.getMinutes()); //33
console.log(date.getTime()); //1660318411425

//EXE2

//1 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt("base");
let height = prompt("height");
let area = 0.5 * b * h;
alert(area);

//2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

let a = prompt("a");
let b = prompt("b");
let c = prompt("c");
let perimeter = parseInt(a) + parseInt(b) + parseInt(c);
alert(perimeter);

//3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt("length");
let width = prompt("width");
area = length * width;
perimeter = 2 * (parseInt(length) + parseInt(width));
alert(area);
alert(perimeter);

//4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let pi = prompt("pi");
let r = prompt("r");
r = prompt("r");
area = pi * r * r;
perimeter = 2 * parseInt(pi) * parseInt(r);
alert(area);
alert(perimeter);

//5 Calculate the slope, x-intercept and y-intercept of y = 2x -2
let x = prompt("Enter a value for X");
let y = 2 * x - 2;
alert("the slope is ${y}");

//6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let m = (10 - 2) / (6 - 2);
alert(m);

//7 Compare the slope of above two questions.
console.log(y == m);

//8
y = x * x + 6 * x + 9;
x = prompt("Enter a value for x");
console.log(y);

//9

//10
let name = prompt("Enter your name");
let nameLenght = name.length
nameLenght > 7 ? alert("your name is long");
alert("your name is short");


//11 
const todaysDate = newDate();
console.log(todaysDate)
