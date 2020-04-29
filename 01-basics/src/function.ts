function add(n1: number, n2: number) {
    let result = n1 + n2;
    return result;
}

function printResult(res: number) {
    console.log('Result is: ' + res);
}

console.log(printResult(add(30, 26))); 

//Assigning a function to another variable
let combinedFunc: (a: number, b: number) => number;

combinedFunc = add;
// combinedFunc = printResult; results in an error
// combinedFunc = 5; results in an error

console.log('Result: ' + combinedFunc(8, 8));

function addAndHelper(n1: number, n2: number, cb: (num: number) => void) {
    let result = n1 + n2;
    cb(result);
}

addAndHelper(20, 24, (result) => {
    console.log(result);
})
