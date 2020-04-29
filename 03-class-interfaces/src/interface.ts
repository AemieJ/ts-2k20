/* 
A class can inherit from another base class (only 1) however can inherit from several other interfaces (through commas). Interfaces are used to define a 
particular structure. 
*/

// Interface being used as Function types
interface AddFunction {
    (a: number, b: number): number;
}

let add: AddFunction;
add =  (n1: number, n2: number) => {
    return n1+n2;
}

interface Greet {
    name: string;
    greet(phrase: string): void;
}

class Person implements Greet{
    name: string;
    age = 30;

    constructor(n: string) {
        this.name = n;
    }

    greet(phrase: string) {
        console.log(`Hello! My name is ${this.name} & ${phrase}`);
    }
}

let user = new Person('Tanjiro');
user.greet('I am a demon slayer!');