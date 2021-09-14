'use strict';

// STEP 1
const theOldWay = function(course) {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
 console.log('The old way:', theOldWay('Code 301'));


// STEP 2
const theNewWay = (course) => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
 console.log('The new way:', theNewWay('Code 301'));


// STEP 3
const withoutParens = course => {
  return `I am currently enrolled in ${course}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
 console.log('Without parens:', withoutParens('Code 301'));


// STEP 4
const oneLiner = course => `I cam currently enrolled in ${course}`;

// TODO: Uncomment the following line of code to see the output in the browser console
 console.log('As a one-liner:', oneLiner('Code 301'));


// STEP 5
const add = function(num1, num2) {
  return `${num1} + ${num2} = ${num1 + num2}`;
};

// TODO: Uncomment the following line of code to see the output in the browser console
 console.log('Let\'s do some math:', add(4, 5));


// STEP 6
const addOneLiner = (num1, num2) => `${num1} + ${num2} = ${num1 + num2}`;

// TODO: Uncomment the following line of code to see the output in the browser console
 console.log('Add as a one-liner:', addOneLiner(4, 5));


// STEP 7
const multiLiner = word => {
  word = word.toUpperCase();
  return word;
};

// TODO: Uncomment the following line of code to see the output in the browser console
 console.log('Multi-line arrow function:', multiLiner('hello'));


// STEP 8
const oldObject = function(array) {
  return {
    firstValue: array[0],
    secondValue: array[1],
    thirdValue: array[2]
  };
};

// TODO: Uncomment the following line of code to see the output in the browser console
 console.log('Hello from the old object function', oldObject(['hi', 'hello', 'are you there?']));


// STEP 9
const newObject = array => ({
  firstValue: array[0],
  secondValue: array[1],
  thirdValue: array[2]
});

// TODO: Uncomment the following line of code to see the output in the browser console
console.log('Hello from the new object function', newObject(['hi', 'hello', 'are you there?']));


// STEP 10
// Uncomment the console.log lines to view the output of each function in the browser console.
// Refactor each function into an arrow function.
// Write your solutions on a single line wherever possible.


//task1

// let sum = function(a, b, c, d) {
//   return a + b + c + d;
// };

/////arrow function

let sum = (a, b, c, d) => `${a + b + c + d}`;
// TODO: Uncomment the following line of code to see the output in the browser console
 console.log(sum(1, 2, 3, 4));

//task2


// let objectLit = function() {
//   return {
//     key1: 'value1',
//     key2: 'value2',
//     key3: 'value3',
//   };
// };

//arrow function

let objectLit = () => ({
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
});
// TODO: Uncomment the following line of code to see the output in the browser console
 console.log(objectLit());

 //task 3

// let sumAndProduct = function(a, b) {
//   let sum = a + b;
//   let product = a * b;
//   return [sum, product];
// };

//arrow function

let sumAndProduct = (a, b) => {
  let sum = a + b;
  let product = a * b;
  return[sum, product];
};
// TODO: Uncomment the following line of code to see the output in the browser console
 console.log(sumAndProduct(3, 9));

//task 4
// let message = function(name) {
//   return `Hello, ${name}!`;
// };

//arrow function

let message = (name) => `Hello, ${name}!`;
// TODO: Uncomment the following line of code to see the output in the browser console
 console.log(message('Allie'));


//task 5

// let Student = function(name, age, hometown) {
//   this.name = name;
//   this.age = age;
//   this.hometown = hometown;
// };

// let joe = new Student('Joe', 'Schmoe', 100);

//arrow function

let Student = (name, age, hometown) => {
  let newName = name;
  let newAge = age;
  let newHometown = hometown;
  return[newName, newAge, newHometown];
};
let joe = Student('Joe', 'Schmoe', 100);

// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this code to break!
 console.log(joe);
// TODO: After viewing the previous console.log(), return the code to a working state.

//task 6


// Student.prototype.greeting = function() {
//   return `Hi, my name is ${this.name}`;
// };


//arrow function

let greeting = () => `Hi, my name is ${joe.name}`;
// TODO: Uncomment the following line of code to see the output in the browser console
// Note that the arrow function will cause this method to break!
// TODO: After viewing the previous console.log(), return the code to a working state.

//task 7

// Student.courseName = function() {
//   return 'This student is enrolled in Code 301.';
// };

//arrow function
Student.courseName = () => {
  return 'This student is enrolled in Code 301.';
};
// TODO: Uncomment the following line of code to see the output in the browser console
console.log(Student.courseName());


// STEP 11
// How do arrow functions affect constructor functions?
Student.prototype.scope = function() {
  console.log(this);
};

// TODO: Uncomment the following line of code to see the output in the browser console
 console.log(joe.scope());

Student.prototype.scopeArrow = () => console.log(this);

// TODO: Uncomment the following line of code to see the output in the browser console
 console.log(joe.scopeArrow());

// TODO: Write a COMMENT below to answer the following questions.
// 1. What is "this" when joe.scope() is invoked?
// Object ( Student {name: 'Joe', age: 100, hometown: 'Schmoe'} )
// 2. What is "this" when joe.scopeArrow() is invoked?
// Window
// 3. Explain why "this" is different when an arrow function is used.
// Because it depends on where it wrote in the code
