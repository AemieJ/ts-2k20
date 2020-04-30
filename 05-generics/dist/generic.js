"use strict";
// Generic functions define a particular type and tells the compiler what could the variable type be.
const arr = ['Tanjiro', 'Light', 'Touka'];
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Nezuko');
    }, 1000);
});
// Building your own generic functions
function merge(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
const merged = merge({ name: 'Kaneki', hobbies: ['Loving Touka'] }, { age: 39 });
function countAndDescribe(element) {
    let text = 'Got no values';
    if (element.length === 1)
        text = 'Got 1 value';
    else if (element.length > 1)
        text = `Got ${element.length} values`;
    return [element, text];
}
console.log(countAndDescribe('Anime is beautiful'));
// Generic function using keyof constraint
function extractAndConvert(obj, key) {
    return (`Value: ${obj[key]}`);
}
console.log(extractAndConvert({ anime: 'Guilty Crown' }, 'anime'));
function createCourse(name, description, date) {
    let courseGoal = {};
    courseGoal.name = 'Shelly';
    courseGoal.description = 'Theoretical Physicist';
    courseGoal.completeUntil = new Date();
    return courseGoal;
}
