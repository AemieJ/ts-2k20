"use strict";
// Easy method to define objects
const person = {
    name: 'Aemie Jariwala',
    age: 19,
    hobbies: ['Sports', 'Coding']
};
console.log(person.name);
//Typescript interpretation to objects
var Food;
(function (Food) {
    Food[Food["COFFEE"] = 0] = "COFFEE";
    Food[Food["TEA"] = 1] = "TEA";
    Food[Food["MAGGI"] = 2] = "MAGGI";
})(Food || (Food = {}));
; // enum used for mapping the values to a particular number of choice
const personNew = {
    name: 'Aemie Hitesh Jariwala',
    age: 20,
    hobbies: ['Sports', 'Coding'],
    role: [1, 'author'],
    food: Food.MAGGI
};
console.log(personNew.name);
if (personNew.food === Food.MAGGI) {
    console.log(personNew.name + ' loves maggi.');
}
