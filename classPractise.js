// class Person {
//   constructor(name, age, isAwesome) {
//     this.name = name;
//     this.age = age;
//     this.isAwesome = isAwesome;
//   }

//   sayMyName() {
//     return `My name is ${this.name}`;
//   }
// }

const Person = require("./exportErrorExample");

const person = new Person("michael z", 25, true);

console.log(person);
// console.log(person.sayMyName());
