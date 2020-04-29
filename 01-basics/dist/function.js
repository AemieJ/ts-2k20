"use strict";
function add(n1, n2) {
    let result = n1 + n2;
    return result;
}
function printResult(res) {
    console.log('Result is: ' + res);
}
console.log(printResult(add(30, 26)));
//Assigning a function to another variable
let combinedFunc;
combinedFunc = add;
// combinedFunc = printResult; results in an error
// combinedFunc = 5; results in an error
console.log('Result: ' + combinedFunc(8, 8));
function addAndHelper(n1, n2, cb) {
    let result = n1 + n2;
    cb(result);
}
addAndHelper(20, 24, (result) => {
    console.log(result);
});
