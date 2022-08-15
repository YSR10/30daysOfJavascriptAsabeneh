//1 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.

var challenge = "30 Days Of JavaScript";

//2 Print the string on the browser console using console.log()

console.log(challenge);

//3 Print the length of the string on the browser console using console.log()

console.log(challenge.length);

//4Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//5Change all the string characters to lowercase letters using toLowerCase() method

console.log(challenge.toLowerCase());

//6Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substr(0, 2));

//7Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(3, 18));

//8Check if the string contains a word Script using includes() method

console.log(challenge.includes(Script));

//9 Split the string into an array using split() method

console.log(challenge.split(""));

//10Split the string 30 Days Of JavaScript at the space using split() method

console.log(challenge.split(" "));

//11'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

let medias = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(medias.split(","));

//12Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.

let string = "30 Days Of  JavaScript";
console.log(string.replace("JavaScript", "Python"));

//13What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.

let days = "30 Days Of JavaScript";
console.log(days.charAt(15));

//14What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()

let day = "30 Days Of JavaScript";
console.log(day.charCodeAt(11));

//15Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript

let of = "30 Days Of JavaScript";
console.log(of.indexOf("3"));

//16Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let last = "30 Days Of JavaScript.";
console.log(string.lastIndexOf("a"));

//17Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let because =
  "You cannot end a sentence with because because because is a conjunction";
console.log(of.indexOf("because"));

//18Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'//1 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

var love =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(love.match(love));

//2 Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

var you =
  "You cannot end a sentence with because because because is a conjunction";
console.log(you.match(because));

//3 Clean the following text and find the most frequent word (hint, use replace and regular expressions).

const sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replace());

//4 Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
//You cannot end a sentence with because because because is a conjunction'

let lastBecause =
  "You cannot end a sentence with because because because is a conjunction";
console.log(of.indexOf("because"));

//19Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

let first =
  "You cannot end a sentence with because because because is a conjunction";
console.log(first.search("because"));

//20Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let end = " 30 Days Of JavaScript ";
console.log(end);
console.log(end.trim());

//21Use startsWith() method with the string 30 Days Of JavaScript and make the result true

let java = "30 Days Of JavaScript";
console.log(string.startsWith("30"));

//22Use endsWith() method with the string 30 Days Of JavaScript and make the result true

let sript = "30 Days Of JavaScript";
console.log(string.endsWith("JavaScript"));

//23Use match() method to find all the a’s in 30 Days Of JavaScript
let a = "30 Days Of JavaScript";
console.log(a.match("a"));
//24Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let con = "30 Days of";
console.log(con.concat("JavaScript"));
//25Use repeat() method to print 30 Days Of JavaScript 2 times
let re = "30 Days Of JavaScript";
console.log(re.repeat(2));

//EXE2
//1 Using console.log() print out the following statement: The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.

let quote =
  "'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";

console.log(quote);

//2Using console.log() print out the following quote by Mother Teresa: "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."

let charity =
  "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";

console.log(charity);

//3Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

console.log(typeof "10" === 10);
let tenString = "10";
let tenNumber = Number(10);
console.log(tenString);

//4Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let float = "9.8";
let num = Number(9.8);
console.log(Math.ceil(float));

//5Check if 'on' is found in both python and jargon

console.log("python".includes("on") && "jargon".includes("on"));

//6I hope this course is not full of jargon. Check if jargon is in the sentence.

console.log("i hope this course is not full of jargon".includes("jargon"));

//7Generate a random number between 0 and 100 inclusively.

let number = Math.floor(Math.random() * 101);
console.log(number);

//8Generate a random number between 50 and 100 inclusively.

let numb = Math.floor(Math.random() * 50) + 50;
console.log(numb);

//9Generate a random number between 0 and 255 inclusively.

let numbe = Math.floor(Math.random() * 256);
console.log(numbe);

//10Access the 'JavaScript' string characters using a random number.
let n = math.floor(math.random() * 10);
console.log("JavaScript".charAt(n));

//11Use console.log() and escape characters to print the following pattern.
/*1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/

console.log("1 1 1 1 1 \n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64 \n5 1 5 25 125");

//12 Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'

sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.substr(31, 23));

//EXE3
//1 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

var love =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(love.match(love));

//2 Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

var you =
  "You cannot end a sentence with because because because is a conjunction";
console.log(you.match(because));

//3 Clean the following text and find the most frequent word (hint, use replace and regular expressions).

sentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replace());

//4 Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
