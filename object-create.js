// 1. using object literal
const student = { name: "Sakib Al Hasan", age: 12 };

// 2. Using constructor
const person = new Object();

// 3. Using inheritence
// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.age);

// 4. creating  object from class
class People {
  //SYntactical sugar
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const man = new People("Masum", 12);
console.log(man);

// 5. creating object using function
function Manus(name, age) {
  this.name = name;
  this.age = age;
}
const man2 = new Manus("Masum", 21);
console.log(man2);
