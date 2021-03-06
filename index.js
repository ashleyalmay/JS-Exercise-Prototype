/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function() {
  this.isFlying = true;
};
Airplane.prototype.land = function() {
  this.isFlying = false;
};

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}
Person.prototype.eat = function(f) {
  if (this.stomach.length < 10) {
    this.stomach.push(f);
  }
};
Person.prototype.poop = function() {
  this.stomach = [];
};
Person.prototype.toString = function() {
  return `${this.name}, ${this.age}`;
};

// function Person(attributes) {
//   this.name = attributes.name;
//   this.age = attributes.age;
//   this.stomach = [];
// }

// Person.prototype.eat = function(someFood) {
//   // const result = someFood.filter(function(x) {

//   return someFood <= 10;
//   // });
//   // const x = eat.push("stomach");
// };

// Person.prototype.poop = function() {};
// //   this.stomach = [];
// // };
// // Person.prototype.t = function(){
// //   return ('${name}',)

// // const anyone = {
// //   name: "Isabelle",
// //   age: "20"
// // };
// // Person.anyone.eat;

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function(gallons) {
  return (this.tank = this.tank += gallons);
};
Car.prototype.drive = function(distance) {
  this.odometer = this.odometer += distance;
  this.tank = this.tank -= distance / this.milesPerGallon;
};

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
// function Pet(attributes){
//   this.name = attributes.name;
//   this.species = attributes.species;
//   this.pronoun = attributes.pronoun;
//   this.favFood = attributes.favFood;
//   this.phrase = attributes.phrase;
//   this.toy = attributes.toy;
// }

//   Pet.prototype.eat = function(){
//     console.log(`${this.name} is a ${this.species} and ${this.pronoun} favourite food is ${this.favFood}`);
//   }
// Pet.prototype.speak = function(){
//   console.log(`${this.name} says ${this.phrase}`);
// }
// Pet.prototype.play = function(){
//   console.log(`${this.name} plays with ${this.toy}`);
// }

//   const petOne = new Pet({
//   name: 'Ada',
//   species: 'Bali Dog',
//   pronoun: 'her',
//   favFood: 'salmon',
//   phrase: 'woof woof',
//   toy: 'stuffed squirrel'

//petOne.play();
// });

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  // this.name = name;
  // this.age = age;
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype);

Baby.prototype.play = function() {
  return ` Playing with ${this.favoriteToy}`;
};
// const babyOne = new Baby({
//   name: "mary",
//   age: "22",
//   toy: "stuffed bear"
// });

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding - if none of the other rules apply "this" defaults to the window - unless you are in strict mode in which case it returns undefined 
  2.  Implicit Binding 
// most common rule - found in 80% of use cases
// when the function is invoked - look to the left of the dot - that is what "this" refers to
// only applies to objects with methods
  3. Explicit Binding 
// Call - will immediately invoke the function / .call you pass in arguments 1 by 1
// Apply - will immediately invoke the function / .apply you pass in arguments as an array
// Bind - you pass in arguments 1 by 1 but it does not immediately invoke the function. It returns a brand new function that can be invoked later
// all of the above allow us to explicitly state what the "this" keyword refers to.
  4. New Binding 
// using the new keyword constructs a new object and "this" points to it
// when a function is invoked as a constructor function using the new keyword "this" points to the new object that's created 
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== "undefined") {
  module.exports = module.exports || {};
  if (Airplane) {
    module.exports.Airplane = Airplane;
  }
  if (Person) {
    module.exports.Person = Person;
  }
  if (Car) {
    module.exports.Car = Car;
  }
  if (Baby) {
    module.exports.Baby = Baby;
  }
}
