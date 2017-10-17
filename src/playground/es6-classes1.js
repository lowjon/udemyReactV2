class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name,
    this.age = age
  }
  getGreeting() {
    // return 'Hi, I am ' + this.name + '!'
    return `Hi, I am ${this.name}!`//use template strings to make text more readable and easier to inject JS
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`
  }
}

class Student extends Person {
  constructor(name, age, major){
    super(name, age)
    this.major = major
  }
  hasMajor() {
    return !!this.major //returns either true or false.  Instead of a string or undefined
  }
  getDescription(){
    let description = super.getDescription()
    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`
    }

    return description
   }
}

class Traveler extends Person {
  constructor(name, age, homeLocation){
    super(name, age)
    this.homeLocation = homeLocation
  }
  hasHome(){
    return !!this.homeLocation
  }
  getGreeting(){
    let greeting = super.getGreeting()
    if (this.hasHome) { greeting += ` I'm visiting from ${this.homeLocation}.`
    return greeting
    }
  }
}

const me = new Traveler('Jon Low', 31, 'Hell')

console.log(me.getGreeting())
const other = new Student()
console.log(other.getDescription());
