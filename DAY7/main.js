//1 Declare a function fullName and it print out your full name.
function fullName() {
  console.log("sulyman yasir");
}
fullName();

//2  Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function printFullName(a, b) {
  return "${a} ${b}";
}
console.log(printFullName("sulyman", "yasir"));

//3 Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  return sum;
}
console.log(addNumbers(3, 6));

//4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle
function area(length, width) {
  let sum = length * width;
  return sum;
}
console.log(area(3, 4));

//5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeter(length, width) {
  sum = 2 * length * width;
  return sum;
}
console.log(perimeter(3, 4));

//6  A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volume(length, width, height) {
  let sum = length * width * height;
  return sum;
}
console.log(volume(5, 8, 3));

//7  Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(PI, r, r) {
  let sum = PI * r * r;
  return sum;
}
console.log(areaOfCircle(3.143, 4, 5));

//8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circle(PI, r) {
  let sum = 2 * PI * r;
  return sum;
}
console.log(circle(2, 3.143, 4));

//9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
function density(mass, volume) {
  let sum = mass / volume;
  return sum;
}
console.log(density(10, 2));

//10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
function speed(distance, total) {
  let sum = distance / total;
  return sum;
}
console.log(speed(20, 2));

//11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
function weight(mass, gravity) {
  let sum = mass * gravity;
  return sum;
}
console.log(weight(4, 6));

//12  Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function Temperature(oC) {
  let sum = (oC * 9) / 5;
  return sum;
}
console.log(Temperature(8, 9 / 5));

/*13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more*/
function BMI(weight, height) {
  let sum = (weight / height) * height;
  return sum;
}
console.log(BMI(8, 2));

//14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month) {
  return "${month}";
}
console.log(checkSeason("Winter"));

/* 15  Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0*/
