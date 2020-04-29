"use strict";
// Array Destructuring
// Order remains
let hobby = ['Coding', 'Swimming', 'Eating', 'Basketball'];
const [hobby1, hobby2, ...remainingHobbies] = hobby;
console.log(hobby, hobby1, hobby2, remainingHobbies);
// Object Destructuring
// Order doesn't matter but key name does
const person = {
    firstName: 'Tanjiro',
    age: 19
};
const { firstName, age } = person;
console.log(firstName, ' ', age);
