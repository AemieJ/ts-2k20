// Easy method to define objects
const person = {
    name: 'Aemie Jariwala',
    age: 19,
    hobbies: ['Sports', 'Coding']
};

console.log (person.name);

//Typescript interpretation to objects
enum Food {'COFFEE', 'TEA', 'MAGGI'}; // enum used for mapping the values to a particular number of choice
const personNew: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // Array with fixed length: tuple
    food: number;
} = {
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
