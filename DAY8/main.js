//1 Create an empty object called dog
const dog = {};

//2 Print the the dog object on the console
console.log(dog);

//3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
//const dogg = {
// name: "bingo",
//legs: 4,
//color: "brown",
//age: 2,
//bark: ["woof", "woof woof"],
//getBark: function () {
//return "${this.bark}";
// },
//};
//console.log(brak.Bark());

//4  Get name, legs, color, age and bark value from the dog object

//const key = Object.keys(dogg);
//console.log(key);

//5 Set new properties the dog object: breed, getDogInfo

const dogg = {
  name: "bingo",
  legs: 4,
  color: "brown",
  age: 2,
  bark: ["woof", "woof woof"],
};
dogg.breed = "local";
dogg.getDoggInfo = function () {
  let.barkWithoutLastBark = this.bark
    .splice(0, this.bark.length - 1)
    .join(", ");
  let lastBark = this.bark.splice(this.bark.length - 1)[0];
  let bark = "${barkWithoutLastBark}, and ${lastBark}";
};
console.log(dogg.getDoggInfo());
