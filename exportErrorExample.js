class Person {
  constructor(name, age, isAwesome) {
    this.name = name;
    this.age = age;
    this.isAwesome = isAwesome;
  }

  sayMyName() {
    return `My name is ${this.name}`;
  }
}

module.exports = Person;
