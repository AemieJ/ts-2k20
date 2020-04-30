"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Log(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Me';
        console.log('Constructor invoked!');
    }
};
Person = __decorate([
    Log('Logging Now')
], Person);
let person = new Person();
console.log(person);
/*
Return types from property and parameter decorator is not considered by typescript. However, it is considered for the accessor and method decorator.
*/
// Adding decorator to a property 
function Property(target, propertyName) {
    console.log('Property Decorator');
    console.log(target, propertyName);
}
// Adding decorator to a accessor ( set or get )
function Accessor(target, propertyName, description) {
    console.log('Accessor Decorator');
    console.log(target, propertyName);
    console.log(description);
}
// Adding decorator to a method 
function Method(target, propertyName, description) {
    console.log('Method Decorator');
    console.log(target, propertyName);
    console.log(description);
}
// Adding decorator to a parameter
function Parameter(target, correspondingMethod, indexOfParam) {
    console.log('Parameter Decorator');
    console.log(target, correspondingMethod);
    console.log(indexOfParam);
}
class Product {
    constructor(t, p) {
        this.target = t;
        this._price = p;
    }
    set price(value) {
        if (value > 0)
            this._price = value;
        else
            throw new Error('Enter a valid price value');
    }
    calcTax(tax) {
        return (this._price * (1 + tax));
    }
}
__decorate([
    Property
], Product.prototype, "target", void 0);
__decorate([
    Accessor
], Product.prototype, "price", null);
__decorate([
    Method,
    __param(0, Parameter)
], Product.prototype, "calcTax", null);
// Autobind Decorator 
/*
Here, when any element is selected and listens to an event and has to use the methods described within the class, then we use an autobinder decorator
which helps in using the methods of the class.
*/
function AutoBinder(target, methodName, description) {
    const originalMethod = description.value;
    const adjustDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        }
    };
    return adjustDescriptor;
}
class Printer {
    constructor() {
        this.message = 'Works!';
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    AutoBinder
], Printer.prototype, "showMessage", null);
