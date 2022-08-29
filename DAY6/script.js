//1 Iterate 0 to 10 using for loop, do the same using while and do while loop
//for loop

for (let q = 0; q <= 10; q++) {
  console.log(q);
}

//while loop
let s = 0;
while (s <= 10) {
  console.log(s);
  s++;
}

//do while loop
let o = 0;
do {
  console.log(o);
  o++;
} while (o <= 10);

//2 Iterate 10 to 0 using for loop, do the same using while and do while loop

//for loop
for (let w = 10; w >= 0; w--) {
  console.log(w);
}
//while loop
let e = 10;
while (e >= 0) {
  console.log(e);
  e--;
}

//do while loop
let y = 10;
do {
  console.log(y);
  y--;
} while (y >= 0);

//3 Iterate 0 to n using for loop
let n = 10;
for (let c = 0; c <= n; c++) {
  console.log(c);
}
//4 Write a loop that makes the following pattern using console.log()
/*#
    ##
    ###
    ####
    #####
    ######
    #######*/
let hash = ["#", "##", "###", "####", "#####", "######", "#######"];
for (let i = 0; i <= hash.length - 1; i++) {
  console.log(hash[i], i);
}

//5 Use loop to print the following pattern:
/*0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100*/

for (let g = 0; g <= 10; g++) {
  console.log("${g} * ${g} = ${g * g}");
}

//6 Using loop print the following pattern
/* i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000*/

//7 Use for loop to iterate from 0 to 100 and print only even numbers
let i = 2;
let evenSum = 0;
for (let i = 0; i <= 100; i++) i % 2 == 0;
evenSum = evenSum + i;

console.log(evenSum);

//8 Use for loop to iterate from 0 to 100 and print only odd numbers
let j = 2;
let oddsum = 1;
for (let j = 1; j <= 100; j++) j % 2 == 1;
oddsum = oddsum + j;
console.log(oddsum);

// 9 Use for loop to iterate  from 0 to 100 and print only prime numbers
let b = 1;
let primesum = 1;
//for (let b = 1; b <= 100; b++)

//10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
//The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

//11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
evenSum = 0;
let oddSum = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    evenSum = evenSum + i;
  } else {
    oddSum = oddSum + i;
  }
}
console.log(evenSum);
console.log(oddSum);
console.log(`The sum of all evens from 0 to 100 is ${evenSum}. And the sum of all odds from 0 to 100 is ${oddSum}.
`);

//12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let odd = 0;
let even = 0;
let total = [];
for (let j = 0; j <= 100; j++) {
  if (j % 2 == 1) {
    odd = odd + j;
  } else {
    even = even + j;
  }
}
total.push(even, odd);
console.log(total);

//13. Math.floor(Math.random()*max)
//Develop a small script which generate array of 5 random numbers

let randArr = [];
for (let i = 0; randArr.length <= 4; i++) {
  const rand = Math.floor(Math.random() * 5);
  randArr.push(rand);
}
console.log(randArr);

//15. Develop a small script which generate array of 5 random numbers and the numbers must be unique

let uniqRand = [];
for (let i = 0; uniqRand.length <= 4; i++) {
  const num = Math.floor(Math.random() * 10);
  if (uniqRand.indexOf(num) == -1) {
    uniqRand.push(num);
  }
}

console.log(uniqRand);

let characters = "abcdefghijklmnopqrstuvwzyz1234567890";
id = "";
for (let i = 0; i <= 5; i++) {
  const num = Math.floor(Math.random() * characters.length);
  id = id + characters.charAt(num);
}
//console.log(id);

//EXE2

//1 Develop a small script which generate any number of characters random id:
//let random = "abcdefghijklmnopqirstuvwxyz0123456789";
//let id = "";
//for (let i = 0; i <= 8; i++) {
// const number = Math.floor(Math.random() * random.length);
//id = id + random.charAt(number);
//}
//console.log(id);

let yasir = "akmkaaufnfkm2356p0cggr9864";
id = "";
for (let i = 0; i <= 20; i++) {
  const icon = Math.floor(Math.random() * yasir.length);
  id = id + yasir.charAt(icon);
}
console.log(id);
