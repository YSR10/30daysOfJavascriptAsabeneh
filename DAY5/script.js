//1 Declare an empty array;
const arr = Array();
console.log(arr);

//2 Declare an array with more than 5 number of elements
let game = ["COD", "FREEFIRE", "FORTNITE", "APEXLEGEND", "CYBERHUNTER"];
console.log("Game:", game);

//3 Find the length of your array
console.log("Game of game:", game.length);

//4 Get the first item, the middle item and the last item of the array
const number = ["one", "two", "three", "four", "five"];
let firstNumber = number[0];
console.log(firstNumber);
let secondNumber = number[2];
console.log(secondNumber);
let lastNumber = number[4];
console.log(lastNumber);

//5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = ["company", "date", "age", "size", "height", "shape"];
console.log("mixedDataTypes of mixedDataTypes:", mixedDataTypes.length);

//6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//7 Print the array using console.log()

console.log(itCompanies);

//8 Print the number of companies in the array
let companies = ["1", "2", "3", "4", "5", "6", "7"];
console.log(companies);

//9Print the first company, middle and last company
companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
let firstCompanies = companies[0];
console.log(firstCompanies);
let secondCompanies = companies[2];
console.log(secondCompanies);
let lastCompanies = companies[4];
console.log(lastCompanies);

//10Print out each company

firstCompanies = companies[0];
console.log(firstCompanies);
secondCompanies = companies[1];
console.log(secondCompanies);
let thridCompanies = companies[2];
console.log(thridCompanies);
let fourthCompanies = companies[3];
console.log(fourthCompanies);
let fifthCompanies = companies[4];
console.log(fifthCompanies);
let sixthCompanies = companies[5];
console.log(sixthCompanies);
let seventhCompanies = companies[6];
console.log(seventhCompanies);

//11 Change each company name to uppercase one by one and print them out
console.log(companies[0].toUpperCase());
console.log(companies[1].toUpperCase());
console.log(companies[2].toUpperCase());
console.log(companies[3].toUpperCase());
console.log(companies[4].toUpperCase());
console.log(companies[5].toUpperCase());
console.log(companies[6].toUpperCase());

//12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

//13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

//14 Filter out companies which have more than one 'o' without the filter method

//15 Sort the array using sort() method
itCompanies.sort();
console.log(itCompanies);

//16 Reverse the array using reverse() method
itCompanies.reverse();
console.log(itCompanies);
//17 Slice out the first 3 companies from the array
console.log(itCompanies.slice(3, 0, 1, 2));
//18 Slice out the last 3 companies from the array
console.log(itCompanies.slice(3, 4, 5, 6));
//19 Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 3));
//20 Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);
//21 Remove the middle IT company or const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']companies from the array
//22 Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);
//23 Remove all IT companies

//EXE2

//3 In the following shopping cart add, remove, edit items
//const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//add 'Meat' in the beginning of your shopping cart if it has not been already added
//add Sugar at the end of you shopping cart if it has not been already added
//remove 'Honey' if you are allergic to honey
//modify Tea to 'Green Tea'

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.push("Sugar");
console.log(shoppingCart);
shoppingCart.pop("Honey");
console.log(shoppingCart);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

//4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
