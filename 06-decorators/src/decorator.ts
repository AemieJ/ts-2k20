function Log(logString: string) {
    return function(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    }
}

@Log('Logging Now')
class Person {
    name: string = 'Me';

    constructor() {
        console.log('Constructor invoked!');
    }
}
let person = new Person();
console.log(person);

/*
Return types from property and parameter decorator is not considered by typescript. However, it is considered for the accessor and method decorator. 
*/
// Adding decorator to a property 
function Property(target: any, propertyName: string | Symbol) {
    console.log('Property Decorator');
    console.log(target, propertyName);
}

// Adding decorator to a accessor ( set or get )
function Accessor(target: any, propertyName: string, description: PropertyDescriptor) {
    console.log('Accessor Decorator');
    console.log(target, propertyName);
    console.log(description);
}

// Adding decorator to a method 
function Method(target: any, propertyName: string, description: PropertyDescriptor) {
    console.log('Method Decorator');
    console.log(target, propertyName);
    console.log(description);
}

// Adding decorator to a parameter
function Parameter(target: any, correspondingMethod: string, indexOfParam: number) {
    console.log('Parameter Decorator');
    console.log(target, correspondingMethod);
    console.log(indexOfParam);
}

class Product {
    @Property
    target: string;
    private _price: number;

    @Accessor
    set price(value: number) {
        if (value > 0) this._price = value;
        else throw new Error('Enter a valid price value');
    }

    constructor(t: string, p: number) {
        this.target = t;
        this._price = p;
    }

    @Method
    calcTax(@Parameter tax: number) {
        return (this._price * (1 + tax));
    }
}

// Autobind Decorator 

/*
Here, when any element is selected and listens to an event and has to use the methods described within the class, then we use an autobinder decorator 
which helps in using the methods of the class.
*/
function AutoBinder(target: any, methodName: string, description: PropertyDescriptor) {
    const originalMethod = description.value;
    const adjustDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            return originalMethod.bind(this);
        }
    }
    return adjustDescriptor;
}

class Printer {
    message = 'Works!';
    
    @AutoBinder
    showMessage() { 
        console.log(this.message);
    }
}