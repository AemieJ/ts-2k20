// Generic functions define a particular type and tells the compiler what could the variable type be.
const arr: Array<string> = ['Tanjiro', 'Light', 'Touka'];
const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Nezuko');
    }, 1000);
});

// Building your own generic functions
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return Object.assign(obj1, obj2);
}
const merged = merge({name: 'Kaneki', hobbies: ['Loving Touka']}, {age: 39});

// Generic function using interface & constraints
interface Length {
    length: number;
}

function countAndDescribe<T extends Length>(element: T): [T, string] {
    let text = 'Got no values'; 
    if (element.length === 1) text = 'Got 1 value';
    else if (element.length > 1) text = `Got ${element.length} values`;
    return [element, text];
}
console.log(countAndDescribe('Anime is beautiful'));

// Generic function using keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return (`Value: ${obj[key]}`);
}
console.log(extractAndConvert({anime: 'Guilty Crown'}, 'anime'));

// Generic utility types

// * Partial Utility type
interface CourseGoal {
    name: string;
    description: string;
    completeUntil: Date;
}

function createCourse(name: string, description: string, date: Date): CourseGoal {
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.name = 'Shelly';
    courseGoal.description = 'Theoretical Physicist';
    courseGoal.completeUntil = new Date();
    return courseGoal as CourseGoal;
}
