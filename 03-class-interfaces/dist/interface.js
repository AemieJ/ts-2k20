"use strict";
/*
A class can inherit from another base class (only 1) however can inherit from several other interfaces (through commas). Interfaces are used to define a
particular structure.
*/
let add;
add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(`Hello! My name is ${this.name} & ${phrase}`);
    }
}
let user = new Person('Tanjiro');
user.greet('I am a demon slayer!');
